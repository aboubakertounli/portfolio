import { useState } from "react";
import { links } from "../content";
import { Title, useApp } from "../context";

export function Contact() {
  const { text } = useApp();
  const form = text.form;
  const [code, setCode] = useState("");
  const [pending, setPending] = useState(false);
  const status = code === "sent" ? form.sent : form[code] || "";

  async function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setPending(true);
    setCode("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (response.ok) {
        setCode("sent");
        event.currentTarget.reset();
      } else {
        setCode(payload.error === "validation" || payload.error === "rate" || payload.error === "config" ? payload.error : "sendFail");
      }
    } catch {
      setCode("sendFail");
    } finally {
      setPending(false);
    }
  }

  return (
    <article>
      <Title>{text.contactTitle}</Title>
      <p className="lead">{text.contactLead}</p>
      <div className="contact-grid">
        <dl className="profile">
          <div>
            <dt>Email</dt>
            <dd><a href={`mailto:${links.email}`}>{links.email}</a></dd>
          </div>
          <div>
            <dt>{text.based}</dt>
            <dd>{text.city}</dd>
          </div>
          <div>
            <dt>{text.elsewhere}</dt>
            <dd>
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              {" · "}
              <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
            </dd>
          </div>
        </dl>
        <form className="message" onSubmit={onSubmit}>
          <div className="hp" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>
          <label htmlFor="name">{form.name}</label>
          <input id="name" name="name" required maxLength={100} autoComplete="name" />
          <label htmlFor="email">{form.email}</label>
          <input id="email" name="email" type="email" required maxLength={160} autoComplete="email" />
          <label htmlFor="message">{form.message}</label>
          <textarea id="message" name="message" required minLength={10} maxLength={5000} rows={6} />
          <button type="submit" disabled={pending}>{pending ? form.sending : form.send}</button>
          {status ? <p className="form-note" role="status">{status}</p> : null}
        </form>
      </div>
    </article>
  );
}
