import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
dotenv.config({ path: path.join(root, ".env") });

const app = express();
const port = Number(process.env.PORT) || 3001;
const hits = new Map();

app.use(express.json({ limit: "32kb" }));

function clientIp(req) {
  return req.ip || req.socket.remoteAddress || "unknown";
}

function tooMany(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < 15 * 60 * 1000);
  if (recent.length >= 5) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function clean(value, max) {
  return String(value || "").replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, max);
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function mailer() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, mail: Boolean(mailer()) });
});

app.post("/api/contact", async (req, res) => {
  if (clean(req.body?.company, 80)) {
    res.json({ ok: true });
    return;
  }
  if (tooMany(clientIp(req))) {
    res.status(429).json({ error: "rate" });
    return;
  }

  const name = clean(req.body?.name, 100);
  const email = clean(req.body?.email, 160);
  const message = clean(req.body?.message, 5000);
  if (name.length < 2 || !validEmail(email) || message.length < 10) {
    res.status(400).json({ error: "validation" });
    return;
  }

  const transport = mailer();
  if (!transport) {
    res.status(503).json({ error: "config" });
    return;
  }

  try {
    await transport.sendMail({
      from: `"Aboubaker Tounli" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || "aboubakertounli@gmail.com",
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    res.json({ ok: true });
  } catch (error) {
    console.error("Mail send failed");
    res.status(502).json({ error: "send" });
  }
});

const dist = path.join(root, "dist");
app.use(express.static(dist));
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) {
    res.status(404).json({ error: "not-found" });
    return;
  }
  res.sendFile(path.join(dist, "index.html"), (error) => {
    if (error) next();
  });
});

app.listen(port, () => {
  console.log(`Portfolio API on http://0.0.0.0:${port}`);
});
