const PROMPT = "aboubaker@portfolio:~$";

const COPY = {
  en: {
    skip: "Skip to the console",
    role: "Cloud & DevOps · INPT · Rabat",
    status: "Open to a graduation internship, and to what comes after",
    place: "Rabat",
    railLabel: "Commands",
    session: "session",
    portrait: "Run whoami",
    placeholder: "Type a command",
    hintIdle: "Try whoami, about, work, huawei. Tab completes.",
    hintTab: "Tab completes",
    langSet: "Language set to English.",
    langBad: "Use lang en or lang fr.",
    boot: [
      "link to rabat · ok",
      "profile loaded · final year at inpt",
      "console ready. the introduction follows.",
    ],
    empty: "Type help, or click a command.",
    unknown: (name) => `No command named “${name}”. Type help and I’ll show you the ones that open.`,
    more: "Type work for the longer version of each build.",
    commands: [
      ["whoami", "the short version"],
      ["about", "how I work, and the internship"],
      ["work", "three builds"],
      ["huawei", "Shenzhen, 2026"],
      ["skills", "tools on one path"],
      ["contact", "write to me"],
      ["cv", "the record, compressed"],
    ],
    helpRows: [
      ["whoami", "the short version"],
      ["about", "how I work, and the internship"],
      ["stage", "the Clever Cloud internship"],
      ["work", "three builds"],
      ["huawei", "the world finals"],
      ["skills", "tools on one path"],
      ["contact", "email, LinkedIn, GitHub"],
      ["cv", "the record, compressed"],
      ["ls", "what you can open"],
      ["lang fr", "lire en français"],
      ["clear", "wipe the screen"],
    ],
    helpNote: "You can also click a command on the left. Arrow up recalls what you typed.",
    whoName: "Aboubaker Tounli.",
    whoLead:
      "Cloud and DevOps engineer in Rabat. I like systems that stay up, stay understandable, and cost less than they did last month. I am looking for a graduation internship, and I am just as interested in the role that comes after.",
    facts: ["INPT · 2024–2027", "AWS CLF-C02", "AZ-104 · in progress", "English · French · Arabic"],
    aboutIntro:
      "I am in my last year at INPT, in ubiquitous and distributed systems, cloud, and IoT. What I enjoy sits between the code and the machine that runs it: getting a service into a cluster, watching it, and knowing what to do when it starts to drift.",
    cleverMeta: "Clever Cloud Morocco × AGEL Partners · Casablanca · July–August 2026",
    clever:
      "The work that stayed with me this year was a FinOps agent at Clever Cloud, with AGEL Partners. We listed every application and add-on, priced them in a way the team could trust, and pointed at what was idle, oversized, or forgotten. I packaged the agent with Docker, deployed it on Clever Kubernetes Engine as a weekly job, and used Terraform so the in-cluster setup could be rebuilt. The first test on the internal organization came back around 10% cheaper. I also ran two workshops, on Terraform and on Kubernetes, because a tool only helps if the people beside you can use it.",
    huaweiMeta: "Huawei ICT · cloud track · Shenzhen · March–June 2026",
    huaweiAbout:
      "A few months earlier I was in Shenzhen, representing Morocco at the Huawei ICT world finals. I had finished first in the country and second in North Africa, selected from more than 100,000 people across 80 countries. I placed third worldwide on the cloud track. That week still reminds me that a careful architecture can travel.",
    aboutClose:
      "I want a team where someone depends on the platform, the bill is real, and I stay long enough to see what breaks.",
    workKicker: "Selected work",
    repo: "View the repository",
    projects: [
      {
        slug: "aiops",
        title: "A platform that notices trouble first.",
        body: "On a private OpenStack cloud I raised a three-node Kubernetes cluster with Ansible, then put a DevSecOps pipeline in front of it: GitLab CI, Maven, SonarQube, dependency checks, Trivy, and Flux so delivery stays in Git. The part I care about most is a Spring AI agent. Through three MCP servers it watches Docker, Kubernetes, and OpenStack, warns when resources are about to run out, and restarts containers that have already failed. Angular is the window into that.",
        tags: ["OpenStack", "Kubernetes", "Ansible", "Flux", "Spring AI", "MCP"],
        repo: "https://github.com/aboubakertounli/aiops-self-healing",
      },
      {
        slug: "aws",
        title: "A monolith, split so one change cannot take everything down.",
        body: "I broke it into containerized services on Amazon ECS, kept the images in ECR, and let an Application Load Balancer decide where traffic goes. The pipeline, from CodeCommit through CodeDeploy to CodePipeline, ships blue/green, so a release does not ask anyone to wait.",
        tags: ["ECS", "ECR", "CodePipeline", "Docker", "Node.js"],
        repo: null,
      },
      {
        slug: "aks",
        title: "The step between “it works on my branch” and “it may enter production.”",
        body: "Azure Pipelines builds, tests, and scans, deploys to staging on AKS, then waits for a person to approve production. Secrets stay in Key Vault. Images are scanned before they move. Prometheus and Grafana are how you know the approval was worth it.",
        tags: ["AKS", "Azure Pipelines", "Key Vault", "Helm", "Grafana"],
        repo: null,
      },
    ],
    ranks: [
      ["3rd", "worldwide · cloud track"],
      ["1st", "Morocco"],
      ["2nd", "North Africa"],
    ],
    huawei:
      "Third prize worldwide, cloud track. First in Morocco. Second in North Africa. In Shenzhen I built the path end to end: secure virtual networks, identity, a move onto managed services, Docker, Kubernetes, centralized logs, metrics, and a look at what was vulnerable.",
    skills:
      "The list of tools is the easy part. What I practice is putting them on one path: build, scan, ship, watch, and repair. AWS, Azure, Huawei Cloud, Clever Cloud, OpenStack. Kubernetes, Terraform, Ansible. GitLab CI, GitHub Actions, Azure Pipelines. Prometheus and Grafana when I need to see what the cluster is actually doing.",
    stages: [
      ["Build", ["Terraform", "Ansible", "Docker", "Python"]],
      ["Scan", ["SonarQube", "Trivy", "Key Vault"]],
      ["Ship", ["GitLab CI", "GitHub Actions", "Jenkins", "Flux", "Argo CD"]],
      ["Watch", ["Prometheus", "Grafana", "Fluent Bit", "cAdvisor"]],
      ["Repair", ["Kubernetes", "Spring AI", "MCP"]],
    ],
    certs: ["AWS Cloud Practitioner", "Azure Administrator Associate · in progress"],
    contact:
      "If you are hiring for a graduation internship, or for the seat after it, write to me. I answer.",
    contactLinks: [
      ["aboubakertounli@gmail.com", "mailto:aboubakertounli@gmail.com"],
      ["LinkedIn", "https://www.linkedin.com/in/aboubaker-tounli/"],
      ["GitHub", "https://github.com/aboubakertounli"],
    ],
    lsIntro: "Open any of these.",
    lsWork: "Three builds. Type work, or work aiops, work aws, work aks.",
    cleared: "Screen cleared. Type help if you want the map again.",
    cvTitle: "The record, on one screen.",
    cv: [
      ["Education", [
        "National Institute of Posts and Telecommunications, INPT — Engineering degree, Ubiquitous and Distributed Systems, Cloud and IoT. Rabat. 2024–2027.",
        "Lycée Technique Mohammedia — Preparatory classes for Grandes Écoles (CPGE). Mohammedia. 2022–2024.",
      ]],
      ["Experience", [
        "Cloud Engineer Intern, Clever Cloud Morocco × AGEL Partners, Casablanca, July 2026–August 2026. FinOps agent: automated inventory, deterministic cost, recommendations for rightsizing, idle instances, and orphaned resources. Docker on Clever Kubernetes Engine as a weekly CronJob, with Terraform for the in-cluster state. First internal test: around 10% savings. Two workshops, Terraform and Kubernetes / CKE.",
        "Huawei ICT Competitor, cloud track, Shenzhen, March 2026–June 2026. 3rd prize worldwide after 1st nationally and 2nd in Northern Africa, selected from 100,000+ participants in 80+ countries. Secure virtual networks, IAM, managed services, Docker, Kubernetes, observability, centralized logging, vulnerability analysis.",
      ]],
      ["Projects", [
        "AIOps Self-Healing Platform — OpenStack, Ansible, Kubernetes, FluxCD, Spring AI, Prometheus, Grafana.",
        "Microservices architecture and CI/CD on AWS — ECS, ECR, ALB, CodePipeline, Docker, Node.js.",
        "CI/CD pipeline for AKS applications — Azure Pipelines, AKS, ACR, Key Vault, Helm, Prometheus, Grafana.",
      ]],
      ["Certifications", [
        "CLF-C02: AWS Cloud Practitioner.",
        "AZ-104: Azure Administrator Associate, in progress.",
      ]],
      ["Languages", ["English, fluent. French, fluent. Arabic, native."]],
    ],
  },
  fr: {
    skip: "Aller à la console",
    role: "Cloud et DevOps · INPT · Rabat",
    status: "Ouvert à un stage de fin d’études, et à la suite",
    place: "Rabat",
    railLabel: "Commandes",
    session: "session",
    portrait: "Lancer whoami",
    placeholder: "Tape une commande",
    hintIdle: "Essaie whoami, about, work, huawei. Tab complète.",
    hintTab: "Tab complète",
    langSet: "Langue : français.",
    langBad: "Utilise lang fr ou lang en.",
    boot: [
      "liaison avec rabat · ok",
      "profil chargé · dernière année à l’inpt",
      "console prête. la présentation suit.",
    ],
    empty: "Tape aide, ou clique une commande.",
    unknown: (name) => `Pas de commande « ${name} ». Tape aide, je te montre celles qui ouvrent quelque chose.`,
    more: "Tape work pour la version longue de chaque projet.",
    commands: [
      ["whoami", "la version courte"],
      ["about", "la façon dont je travaille"],
      ["work", "trois projets"],
      ["huawei", "Shenzhen, 2026"],
      ["skills", "les outils, un chemin"],
      ["contact", "m’écrire"],
      ["cv", "le parcours, en bref"],
    ],
    helpRows: [
      ["whoami", "la version courte"],
      ["about", "la façon dont je travaille, et le stage"],
      ["stage", "le stage chez Clever Cloud"],
      ["work", "trois projets"],
      ["huawei", "la finale mondiale"],
      ["skills", "les outils sur un seul chemin"],
      ["contact", "e-mail, LinkedIn, GitHub"],
      ["cv", "le parcours, en une vue"],
      ["ls", "ce que tu peux ouvrir"],
      ["lang en", "read in english"],
      ["clear", "effacer l’écran"],
    ],
    helpNote: "Tu peux aussi cliquer une commande à gauche. La flèche haut rappelle ce que tu as tapé.",
    whoName: "Aboubaker Tounli.",
    whoLead:
      "Ingénieur Cloud et DevOps à Rabat. J’aime les systèmes qui tiennent, qui se comprennent, et qui coûtent moins cher que le mois dernier. Je cherche un stage de fin d’études, et le poste d’après m’intéresse tout autant.",
    facts: ["INPT · 2024–2027", "AWS CLF-C02", "AZ-104 · en cours", "Anglais · Français · Arabe"],
    aboutIntro:
      "Je suis en dernière année à l’INPT, en systèmes ubiquitaires et distribués, cloud et IoT. Ce qui me plaît se trouve entre le code et la machine qui l’exécute : faire entrer un service dans un cluster, le surveiller, et savoir quoi faire quand il commence à dériver.",
    cleverMeta: "Clever Cloud Morocco × AGEL Partners · Casablanca · juillet–août 2026",
    clever:
      "Le travail qui m’a le plus marqué cette année, c’est un agent FinOps chez Clever Cloud, avec AGEL Partners. On listait chaque application et chaque add-on, on chiffrait le coût d’une façon que l’équipe pouvait croire, et on montrait ce qui dormait, ce qui était trop gros, ou ce qu’on avait oublié. J’ai conteneurisé l’agent avec Docker, je l’ai déployé sur Clever Kubernetes Engine en tâche hebdomadaire, et j’ai utilisé Terraform pour que l’installation dans le cluster puisse être reconstruite. Le premier essai sur l’organisation interne a tourné autour de 10 % d’économies. J’ai aussi animé deux ateliers, Terraform et Kubernetes, parce qu’un outil ne sert que si les gens à côté peuvent s’en servir.",
    huaweiMeta: "Huawei ICT · track cloud · Shenzhen · mars–juin 2026",
    huaweiAbout:
      "Quelques mois plus tôt, j’étais à Shenzhen pour représenter le Maroc à la finale mondiale Huawei ICT. J’avais fini premier au Maroc et deuxième en Afrique du Nord, parmi plus de 100 000 personnes venues de plus de 80 pays. J’ai pris la troisième place mondiale sur le track cloud. Cette semaine me rappelle encore qu’une architecture soignée peut voyager.",
    aboutClose:
      "Je veux une équipe où quelqu’un dépend de la plateforme, où la facture est vraie, et où je reste assez longtemps pour voir ce qui casse.",
    workKicker: "Travaux choisis",
    repo: "Voir le dépôt",
    projects: [
      {
        slug: "aiops",
        title: "Une plateforme qui voit le problème en premier.",
        body: "Sur un cloud privé OpenStack, j’ai monté un cluster Kubernetes de trois nœuds avec Ansible, puis j’ai placé devant un pipeline DevSecOps : GitLab CI, Maven, SonarQube, analyse des dépendances, Trivy, et Flux pour que la livraison reste dans Git. Ce qui compte le plus pour moi, c’est un agent Spring AI. À travers trois serveurs MCP, il surveille Docker, Kubernetes et OpenStack, prévient quand les ressources vont saturer, et redémarre les conteneurs déjà tombés. Angular est la fenêtre sur tout ça.",
        tags: ["OpenStack", "Kubernetes", "Ansible", "Flux", "Spring AI", "MCP"],
        repo: "https://github.com/aboubakertounli/aiops-self-healing",
      },
      {
        slug: "aws",
        title: "Un monolithe, découpé pour qu’un seul changement ne fasse pas tout tomber.",
        body: "Je l’ai séparé en services conteneurisés sur Amazon ECS, avec les images dans ECR et un Application Load Balancer pour diriger le trafic. Le pipeline, de CodeCommit à CodeDeploy puis CodePipeline, livre en blue/green : une mise en production n’oblige personne à attendre.",
        tags: ["ECS", "ECR", "CodePipeline", "Docker", "Node.js"],
        repo: null,
      },
      {
        slug: "aks",
        title: "Le pas entre « ça marche sur ma branche » et « on peut le mettre en production ».",
        body: "Azure Pipelines construit, teste et scanne, déploie en staging sur AKS, puis attend qu’une personne approuve la production. Les secrets restent dans Key Vault. Les images sont scannées avant d’avancer. Prometheus et Grafana disent si cet accord en valait la peine.",
        tags: ["AKS", "Azure Pipelines", "Key Vault", "Helm", "Grafana"],
        repo: null,
      },
    ],
    ranks: [
      ["3e", "mondial · track cloud"],
      ["1er", "Maroc"],
      ["2e", "Afrique du Nord"],
    ],
    huawei:
      "Troisième prix mondial, track cloud. Premier au Maroc. Deuxième en Afrique du Nord. À Shenzhen, j’ai construit le chemin de bout en bout : réseaux virtuels sécurisés, identité, passage vers des services gérés, Docker, Kubernetes, logs centralisés, métriques, et un regard sur ce qui était vulnérable.",
    skills:
      "La liste d’outils est la partie facile. Ce que je pratique, c’est de les mettre sur un seul chemin : construire, scanner, livrer, surveiller, réparer. AWS, Azure, Huawei Cloud, Clever Cloud, OpenStack. Kubernetes, Terraform, Ansible. GitLab CI, GitHub Actions, Azure Pipelines. Prometheus et Grafana quand il faut voir ce que le cluster fait vraiment.",
    stages: [
      ["Construire", ["Terraform", "Ansible", "Docker", "Python"]],
      ["Scanner", ["SonarQube", "Trivy", "Key Vault"]],
      ["Livrer", ["GitLab CI", "GitHub Actions", "Jenkins", "Flux", "Argo CD"]],
      ["Surveiller", ["Prometheus", "Grafana", "Fluent Bit", "cAdvisor"]],
      ["Réparer", ["Kubernetes", "Spring AI", "MCP"]],
    ],
    certs: ["AWS Cloud Practitioner", "Azure Administrator Associate · en cours"],
    contact:
      "Si vous recrutez pour un stage de fin d’études, ou pour le poste qui vient après, écrivez-moi. Je réponds.",
    contactLinks: [
      ["aboubakertounli@gmail.com", "mailto:aboubakertounli@gmail.com"],
      ["LinkedIn", "https://www.linkedin.com/in/aboubaker-tounli/"],
      ["GitHub", "https://github.com/aboubakertounli"],
    ],
    lsIntro: "Tu peux ouvrir chacune de ces pages.",
    lsWork: "Trois projets. Tape work, ou work aiops, work aws, work aks.",
    cleared: "Écran effacé. Tape aide si tu veux la carte à nouveau.",
    cvTitle: "Le parcours, sur un seul écran.",
    cv: [
      ["Formation", [
        "Institut national des postes et télécommunications, INPT — cycle d’ingénieur, ingénierie des systèmes ubiquitaires et distribués, cloud et IoT. Rabat. 2024–2027.",
        "Lycée Technique Mohammedia — classes préparatoires aux grandes écoles (CPGE). Mohammedia. 2022–2024.",
      ]],
      ["Expérience", [
        "Ingénieur Cloud, stage, Clever Cloud Morocco × AGEL Partners, Casablanca, juillet 2026–août 2026. Agent FinOps : inventaire automatique, chiffrage déterministe, recommandations (rightsizing, instances dormantes, ressources orphelines). Docker sur Clever Kubernetes Engine en CronJob hebdomadaire, état du cluster reproduit avec Terraform. Premier essai interne : de l’ordre de 10 % d’économies. Deux ateliers, Terraform et Kubernetes / CKE.",
        "Compétiteur Huawei ICT, track cloud, Shenzhen, mars 2026–juin 2026. 3e prix mondial après la 1re place nationale et la 2e en Afrique du Nord, parmi plus de 100 000 participants de plus de 80 pays. Réseaux virtuels sécurisés, IAM, services gérés, Docker, Kubernetes, observabilité, logs centralisés, analyse de vulnérabilités.",
      ]],
      ["Projets", [
        "AIOps Self-Healing Platform — OpenStack, Ansible, Kubernetes, FluxCD, Spring AI, Prometheus, Grafana.",
        "Architecture microservices et CI/CD sur AWS — ECS, ECR, ALB, CodePipeline, Docker, Node.js.",
        "Pipeline CI/CD pour applications AKS — Azure Pipelines, AKS, ACR, Key Vault, Helm, Prometheus, Grafana.",
      ]],
      ["Certifications", [
        "CLF-C02 : AWS Cloud Practitioner.",
        "AZ-104 : Azure Administrator Associate, en cours.",
      ]],
      ["Langues", ["Anglais, courant. Français, courant. Arabe, langue maternelle."]],
    ],
  },
};

const SLUGS = {
  aiops: ["aiops", "1", "01", "healing"],
  aws: ["aws", "2", "02", "ecs", "microservices", "microservice"],
  aks: ["aks", "3", "03", "azure"],
};

const screen = document.getElementById("screen");
const form = document.getElementById("form");
const input = document.getElementById("cmd");
const hint = document.getElementById("hint");
const rail = document.getElementById("rail");

let lang = document.documentElement.lang === "fr" ? "fr" : "en";
let lastView = "whoami";
let history = [];
let historyAt = -1;
let draft = "";
let booting = true;
let bootToken = 0;

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function copy() {
  return COPY[lang];
}

function norm(value) {
  return value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().trim();
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function wait(ms) {
  return reduced ? Promise.resolve() : new Promise((resolve) => setTimeout(resolve, ms));
}

function externalLink(href, text, className) {
  const a = el("a", className || "text-link", text);
  a.href = href;
  if (!href.startsWith("mailto:")) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  return a;
}

function prose(text) {
  return el("p", "prose", text);
}

function renderChrome() {
  const t = copy();
  document.documentElement.lang = lang;
  document.getElementById("role").textContent = t.role;
  document.getElementById("status").textContent = t.status;
  document.getElementById("place").textContent = t.place;
  document.getElementById("rail-label").textContent = t.railLabel;
  document.getElementById("skip").textContent = t.skip;
  document.title = lang === "fr" ? "Aboubaker Tounli · Cloud et DevOps" : "Aboubaker Tounli · Cloud & DevOps";
  input.setAttribute("aria-describedby", "hint");
  document.getElementById("portrait-btn").setAttribute("aria-label", t.portrait);
  document.getElementById("lang-group").setAttribute("aria-label", lang === "fr" ? "Langue" : "Language");
  input.placeholder = t.placeholder;
  input.setAttribute("aria-label", t.placeholder);
  document.querySelectorAll(".lang button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
  document.getElementById("console-title").textContent = `${t.session} · ${lastView}`;
  rail.replaceChildren();
  t.commands.forEach(([id, label]) => {
    const button = el("button");
    button.type = "button";
    button.append(el("strong", null, id), el("em", null, label));
    if (id === lastView) button.setAttribute("aria-current", "true");
    button.addEventListener("click", () => execute(id));
    rail.append(button);
  });
  updateHint();
  tick();
}

function tick() {
  const formatted = new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Africa/Casablanca",
  }).format(new Date());
  document.getElementById("clock").textContent = formatted;
  document.getElementById("clock").dateTime = new Date().toISOString();
}

function scrollDown() {
  screen.scrollTop = screen.scrollHeight;
}

function echo(command) {
  const line = el("p", "echo");
  line.append(el("span", "prompt", PROMPT), document.createTextNode(command));
  return line;
}

function push(command, node) {
  const article = el("article", "entry");
  if (command) article.append(echo(command));
  article.append(node);
  screen.append(article);
  scrollDown();
}

function syslog(text) {
  const article = el("article", "entry");
  article.append(el("p", "syslog", text));
  screen.append(article);
  scrollDown();
}

function renderWhoami() {
  const t = copy();
  const wrap = el("div");
  wrap.append(el("h3", "who-name", t.whoName), el("p", "who-lead prose", t.whoLead));
  const facts = el("div", "facts");
  t.facts.forEach((fact) => facts.append(el("span", "fact", fact)));
  wrap.append(facts);
  return wrap;
}

function renderAbout() {
  const t = copy();
  const wrap = el("div");
  wrap.append(prose(t.aboutIntro));
  const clever = el("div", "case");
  clever.append(el("p", "meta", t.cleverMeta), prose(t.clever));
  const huawei = el("div", "case");
  huawei.append(el("p", "meta", t.huaweiMeta), prose(t.huaweiAbout));
  wrap.append(clever, huawei, prose(t.aboutClose));
  return wrap;
}

function renderStage() {
  const t = copy();
  const wrap = el("div", "case");
  wrap.append(el("p", "meta", t.cleverMeta), prose(t.clever));
  return wrap;
}

function projectCard(project) {
  const t = copy();
  const card = el("article", "card");
  card.append(el("h3", null, project.title), prose(project.body));
  const tags = el("ul", "tags");
  project.tags.forEach((tag) => tags.append(el("li", null, tag)));
  card.append(tags);
  if (project.repo) card.append(externalLink(project.repo, t.repo, "card-link"));
  return card;
}

function findProject(token) {
  const key = norm(token || "");
  const slug = Object.keys(SLUGS).find((name) => SLUGS[name].includes(key));
  if (!slug) return null;
  return copy().projects.find((project) => project.slug === slug);
}

function renderWork(only) {
  const t = copy();
  const wrap = el("div");
  wrap.append(el("p", "kicker", t.workKicker));
  const cards = el("div", "cards");
  const list = only ? [only] : t.projects;
  list.forEach((project) => cards.append(projectCard(project)));
  wrap.append(cards);
  return wrap;
}

function renderHuawei() {
  const t = copy();
  const wrap = el("div");
  wrap.append(el("p", "meta", t.huaweiMeta));
  const stats = el("div", "stats");
  t.ranks.forEach(([rank, label]) => {
    const cell = el("div", "stat");
    cell.append(el("b", null, rank), el("span", null, label));
    stats.append(cell);
  });
  wrap.append(stats, prose(t.huawei));
  return wrap;
}

function renderSkills() {
  const t = copy();
  const wrap = el("div");
  wrap.append(prose(t.skills));
  const path = el("div", "path");
  t.stages.forEach(([name, tools], index) => {
    const stage = el("section", "stage");
    stage.append(el("span", "stage-index", String(index + 1).padStart(2, "0")), el("h3", null, name));
    const list = el("ul");
    tools.forEach((tool) => list.append(el("li", null, tool)));
    stage.append(list);
    path.append(stage);
  });
  const facts = el("div", "facts");
  t.certs.forEach((cert) => facts.append(el("span", "fact", cert)));
  wrap.append(path, facts);
  return wrap;
}

function renderContact() {
  const t = copy();
  const wrap = el("div");
  wrap.append(prose(t.contact));
  const links = el("div", "facts");
  t.contactLinks.forEach(([label, href]) => links.append(externalLink(href, label, "fact text-link")));
  wrap.append(links);
  return wrap;
}

function renderCv() {
  const t = copy();
  const wrap = el("div");
  wrap.append(el("p", "kicker", t.cvTitle));
  const record = el("dl", "record");
  t.cv.forEach(([title, items]) => {
    const group = el("div");
    group.append(el("dt", null, title));
    const dd = el("dd");
    const list = el("ul");
    items.forEach((item) => list.append(el("li", null, item)));
    dd.append(list);
    group.append(dd);
    record.append(group);
  });
  wrap.append(record, el("p", "meta", t.more));
  return wrap;
}

function commandButton(command) {
  const button = el("button", "cmd-link", command);
  button.type = "button";
  button.addEventListener("click", () => execute(command));
  return button;
}

function renderHelp() {
  const t = copy();
  const wrap = el("div");
  const record = el("dl", "record");
  t.helpRows.forEach(([command, label]) => {
    const group = el("div");
    const term = el("dt");
    term.append(commandButton(command));
    group.append(term, el("dd", null, label));
    record.append(group);
  });
  wrap.append(record, el("p", "meta", t.helpNote));
  return wrap;
}

function renderLs(which) {
  const t = copy();
  const wrap = el("div");
  if (which === "work") {
    wrap.append(el("p", "prose", t.lsWork));
    return wrap;
  }
  wrap.append(el("p", "kicker", t.lsIntro));
  const record = el("dl", "record");
  t.commands.forEach(([command, label]) => {
    const group = el("div");
    const term = el("dt");
    term.append(commandButton(command));
    group.append(term, el("dd", null, label));
    record.append(group);
  });
  wrap.append(record);
  return wrap;
}

function catalog() {
  return [
    "whoami", "about", "work", "huawei", "skills", "contact", "cv", "help", "aide",
    "clear", "ls", "lang en", "lang fr", "stage", "work aiops", "work aws", "work aks",
  ];
}

function completionFor(value) {
  const typed = norm(value);
  if (!typed) return "";
  const hits = catalog().filter((item) => item.startsWith(typed) && item !== typed);
  if (hits.length === 1) return hits[0];
  const shared = catalog().filter((item) => item.startsWith(typed));
  if (shared.length > 1) {
    const rest = shared.slice(1).reduce((prefix, item) => {
      let i = 0;
      while (i < prefix.length && i < item.length && prefix[i] === item[i]) i += 1;
      return prefix.slice(0, i);
    }, shared[0]);
    return rest.length > typed.length ? rest : "";
  }
  return "";
}

function updateHint() {
  const t = copy();
  const next = completionFor(input.value);
  hint.textContent = next ? `${t.hintTab} ${next}` : t.hintIdle;
}

function resolve(raw) {
  const n = norm(raw);
  if (!n) return { id: "empty" };
  const parts = n.split(/\s+/);
  const head = parts[0];
  const rest = parts.slice(1).join(" ");

  const aliases = {
    whoami: ["whoami", "me", "hello", "hi", "bonjour", "salut"],
    about: ["about", "a-propos", "apropos", "propos", "story", "histoire"],
    work: ["work", "works", "projects", "project", "projets", "projet"],
    huawei: ["huawei", "ict", "shenzhen"],
    skills: ["skills", "skill", "competences", "competence", "stack", "tools", "outils"],
    contact: ["contact", "mail", "email"],
    cv: ["cv", "resume", "curriculum"],
    help: ["help", "aide", "?", "commands", "commandes"],
    clear: ["clear", "cls", "effacer", "reset"],
    ls: ["ls", "dir", "liste", "list"],
    stage: ["stage", "intern", "internship", "finops", "clever", "pfe"],
  };

  if (["lang", "langue", "language"].includes(head)) {
    if (!rest) return { id: "lang", toggle: true };
    if (["en", "english", "anglais"].includes(rest)) return { id: "lang", value: "en" };
    if (["fr", "french", "francais"].includes(rest)) return { id: "lang", value: "fr" };
    return { id: "lang-bad" };
  }

  if (head === "open") return { id: "work", arg: rest || "all" };
  if (["work", "works", "projects", "project", "projets", "projet"].includes(head) && rest) {
    return { id: "work", arg: rest };
  }
  if (head === "ls" && rest) return { id: "ls", arg: rest };
  if (head === "cat" && rest) return resolve(rest);

  const id = Object.keys(aliases).find((name) => aliases[name].includes(head));
  return id ? { id } : { id: "unknown", raw };
}

function show(command, id, node) {
  lastView = id;
  document.getElementById("console-title").textContent = `${copy().session} · ${id}`;
  rail.querySelectorAll("button").forEach((button) => {
    const name = button.querySelector("strong").textContent;
    if (name === id) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
  push(command, node);
}

async function run(raw, options = {}) {
  const command = raw.trim();
  const action = resolve(command);
  if (options.record && command) {
    history.push(command);
    historyAt = -1;
    draft = "";
  }

  if (action.id === "empty") {
    syslog(copy().empty);
    return;
  }
  if (action.id === "unknown") {
    push(command, el("p", "unknown", copy().unknown(command)));
    return;
  }
  if (action.id === "clear") {
    screen.replaceChildren();
    syslog(copy().cleared);
    lastView = "clear";
    renderChrome();
    return;
  }
  if (action.id === "lang" || action.id === "lang-bad") {
    if (action.id === "lang-bad") {
      push(command, el("p", "unknown", copy().langBad));
      return;
    }
    const next = action.toggle ? (lang === "en" ? "fr" : "en") : action.value;
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
    renderChrome();
    screen.replaceChildren();
    syslog(copy().langSet);
    await run(lastView === "clear" ? "whoami" : lastView, { record: false });
    return;
  }
  if (action.id === "work" && action.arg && action.arg !== "all") {
    const project = findProject(action.arg);
    if (!project) {
      push(command, el("p", "unknown", copy().unknown(command)));
      return;
    }
    show(command, "work", renderWork(project));
    return;
  }

  const views = {
    whoami: renderWhoami,
    about: renderAbout,
    stage: renderStage,
    work: () => renderWork(null),
    huawei: renderHuawei,
    skills: renderSkills,
    contact: renderContact,
    cv: renderCv,
    help: renderHelp,
    ls: () => renderLs(action.arg),
  };
  show(command, action.id === "ls" ? "ls" : action.id, views[action.id]());
}

async function execute(raw) {
  if (booting) {
    bootToken += 1;
    booting = false;
    input.readOnly = false;
    screen.replaceChildren();
  }
  input.value = "";
  updateHint();
  await run(raw, { record: true });
  if (window.matchMedia("(min-width: 861px)").matches) input.focus();
}

async function boot() {
  const token = ++bootToken;
  booting = true;
  input.readOnly = true;
  renderChrome();
  for (const line of copy().boot) {
    if (token !== bootToken) return;
    syslog(line);
    await wait(260);
  }
  if (token !== bootToken) return;
  await run("whoami", { record: false });
  booting = false;
  input.readOnly = false;
  if (window.matchMedia("(min-width: 861px)").matches) input.focus();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  execute(value);
});

input.addEventListener("input", updateHint);

input.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    const next = completionFor(input.value);
    if (next) {
      event.preventDefault();
      input.value = next;
      updateHint();
    }
    return;
  }
  if (event.key === "ArrowUp") {
    if (!history.length) return;
    event.preventDefault();
    if (historyAt === -1) {
      draft = input.value;
      historyAt = history.length - 1;
    } else if (historyAt > 0) historyAt -= 1;
    input.value = history[historyAt];
    updateHint();
  }
  if (event.key === "ArrowDown") {
    if (historyAt === -1) return;
    event.preventDefault();
    historyAt += 1;
    input.value = historyAt >= history.length ? draft : history[historyAt];
    if (historyAt >= history.length) historyAt = -1;
    updateHint();
  }
});

document.querySelectorAll(".lang button").forEach((button) => {
  button.addEventListener("click", () => execute(`lang ${button.dataset.lang}`));
});

document.getElementById("portrait-btn").addEventListener("click", () => execute("whoami"));

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== input) {
    event.preventDefault();
    input.focus();
  }
});

setInterval(tick, 30000);
boot();
