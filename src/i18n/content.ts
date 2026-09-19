import type { Locale } from "./index";

export const meta = {
  fr: {
    title: "TOUNLI Aboubaker — Cloud & DevOps",
    description:
      "Élève ingénieur INPT, stage PFE Cloud / DevOps / SRE. 3e prix mondial Huawei ICT (Cloud). Stage FinOps chez Clever Cloud Morocco.",
  },
  en: {
    title: "TOUNLI Aboubaker — Cloud & DevOps",
    description:
      "INPT engineering student seeking a Cloud / DevOps / SRE PFE internship. 3rd worldwide, Huawei ICT Competition (Cloud). FinOps intern at Clever Cloud Morocco.",
  },
} as const;

export const nav = {
  fr: {
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    caseStudy: "Étude de cas",
  },
  en: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    caseStudy: "Case study",
  },
} as const;

export const home = {
  fr: {
    role: "Élève ingénieur Cloud & DevOps — stage PFE",
    location: "Rabat, Maroc",
    about:
      "Dernière année à l’INPT, filière Systèmes ubiquitaires et distribués, Cloud et IoT. Je cherche un stage de fin d’études en Cloud, DevOps, SRE ou platform engineering. J’aime les systèmes que l’on peut expliquer de bout en bout : du commit jusqu’au contrôleur d’admission.",
    cv: "CV (PDF)",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  en: {
    role: "Cloud & DevOps engineering student — seeking a PFE internship",
    location: "Rabat, Morocco",
    about:
      "Final-year student at INPT, specializing in Ubiquitous and Distributed Systems, Cloud and IoT. I am looking for a graduation internship in Cloud, DevOps, SRE, or platform engineering. I care about systems you can explain end to end: from a commit to the admission controller.",
    cv: "Resume (PDF)",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
} as const;

export const experience = {
  fr: [
    {
      title: "Ingénieur Cloud — Stage",
      org: "Clever Cloud Morocco × AGEL Partners",
      dates: "Juillet 2026 — Août 2026",
      place: "Casablanca, Maroc",
      points: [
        "Conception d’un agent FinOps : inventaire automatique des applications et add-ons, chiffrage déterministe des coûts, recommandations de rightsizing, d’instances dormantes et de ressources orphelines.",
        "Conteneurisation avec Docker et exécution sur Clever Kubernetes Engine (CKE) via un CronJob hebdomadaire ; état in-cluster reproductible provisionné avec Terraform.",
        "Mise en service sur l’organisation interne : le premier test a établi de l’ordre de 10 % d’économies sur les coûts.",
        "Deux ateliers internes pour l’équipe technique : Terraform, puis Kubernetes / CKE.",
      ],
    },
    {
      title: "Compétiteur Huawei ICT — Cloud Track",
      org: "Huawei",
      dates: "Mars 2026 — Juin 2026",
      place: "Shenzhen, Chine",
      points: [
        "3e prix mondial après la 1re place nationale et la 2e place en Afrique du Nord ; représentation du Maroc à la finale mondiale à Shenzhen.",
        "Architecture cloud complète : VPC, sous-réseaux, IAM, migration vers des services managés, Docker, Kubernetes, observabilité, journaux centralisés et analyse de vulnérabilités.",
      ],
    },
  ],
  en: [
    {
      title: "Cloud Engineer Intern",
      org: "Clever Cloud Morocco × AGEL Partners",
      dates: "July 2026 — August 2026",
      place: "Casablanca, Morocco",
      points: [
        "Designed a FinOps agent: automated inventory of applications and add-ons, deterministic cost calculation, and recommendations for rightsizing, idle instances, and orphaned resources.",
        "Containerized the agent with Docker and ran it on Clever Kubernetes Engine (CKE) as a weekly CronJob, with reproducible in-cluster state provisioned by Terraform.",
        "Rolled it out on the internal organization; the first test delivered around 10% savings on costs.",
        "Delivered two internal workshops for the engineering team: Terraform, and Kubernetes / CKE.",
      ],
    },
    {
      title: "Huawei ICT Competitor — Cloud Track",
      org: "Huawei",
      dates: "March 2026 — June 2026",
      place: "Shenzhen, China",
      points: [
        "Awarded 3rd prize worldwide after ranking 1st nationally and 2nd in Northern Africa; represented Morocco at the world finals in Shenzhen.",
        "Deployed a full cloud architecture: secure virtual networks (VPC, subnets, IAM), migration to managed services, Docker, Kubernetes, observability, centralized logging, and vulnerability analysis.",
      ],
    },
  ],
} as const;

export const projects = {
  fr: [
    {
      slug: "devsecops-gitops",
      title: "Pipeline DevSecOps × GitOps",
      stack: "GitHub Actions, SonarCloud, Trivy, Argo CD, Kubernetes, Docker",
      href: "/fr/projects/devsecops-gitops/",
      points: [
        "Pipeline CI qui automatise tests, analyse statique, scan d’image et publication Docker, sans déployer directement sur le cluster.",
        "Livraison continue par GitOps : un dépôt de manifests comme source de vérité, synchronisé par Argo CD, avec contrôles d’admission et observabilité.",
      ],
    },
    {
      slug: "aws-microservices",
      title: "Architecture microservices et CI/CD sur AWS",
      stack: "ECS, ECR, ALB, CodePipeline, Docker, Node.js",
      href: null,
      points: [
        "Découpage d’un monolithe en microservices conteneurisés sur Amazon ECS, images dans ECR, trafic via un Application Load Balancer.",
        "Pipeline CodeCommit / CodeDeploy / CodePipeline avec déploiements blue/green pour éviter les interruptions.",
      ],
    },
    {
      slug: "openstack",
      title: "Cloud privé avec OpenStack",
      stack: "OpenStack, Terraform, virtualisation, réseaux",
      href: null,
      points: [
        "Déploiement All-in-One couvrant virtualisation, gestion des ressources, réseaux et groupes de sécurité, puis automatisation de la configuration avec Terraform.",
      ],
    },
  ],
  en: [
    {
      slug: "devsecops-gitops",
      title: "DevSecOps × GitOps pipeline",
      stack: "GitHub Actions, SonarCloud, Trivy, Argo CD, Kubernetes, Docker",
      href: "/en/projects/devsecops-gitops/",
      points: [
        "CI pipeline that automates tests, static analysis, image scanning, and Docker publishing — and never deploys straight to the cluster.",
        "Continuous delivery through GitOps: a manifests repo as source of truth, synced by Argo CD, with admission control and observability.",
      ],
    },
    {
      slug: "aws-microservices",
      title: "Microservices architecture and CI/CD on AWS",
      stack: "ECS, ECR, ALB, CodePipeline, Docker, Node.js",
      href: null,
      points: [
        "Split a monolith into containerized microservices on Amazon ECS, storing images in ECR and routing traffic through an Application Load Balancer.",
        "Automated pipeline with CodeCommit, CodeDeploy, and CodePipeline, using blue/green deployments to avoid downtime.",
      ],
    },
    {
      slug: "openstack",
      title: "Private cloud with OpenStack",
      stack: "OpenStack, Terraform, virtualization, networking",
      href: null,
      points: [
        "All-in-one OpenStack private cloud covering virtualization, resource management, networking, and security groups, then automated configuration with Terraform.",
      ],
    },
  ],
} as const;

export const skills = {
  fr: [
    {
      label: "Plateformes cloud",
      items: "Clever Cloud (PaaS, CKE), AWS (ECS, ECR, EC2, RDS, CodePipeline), Huawei Cloud, OpenStack",
    },
    {
      label: "Automatisation et IaC",
      items: "Python, Shell, Terraform, Ansible",
    },
    {
      label: "CI/CD et DevOps",
      items: "GitHub Actions, GitLab CI, Jenkins, Docker, Kubernetes, Argo CD",
    },
    {
      label: "Sécurité et qualité",
      items: "SonarQube / SonarCloud, Trivy, IAM, security groups",
    },
    {
      label: "Observabilité",
      items: "Prometheus, Grafana",
    },
    {
      label: "Développement",
      items: "Express.js, Spring Boot, design patterns, architectures",
    },
  ],
  en: [
    {
      label: "Cloud platforms",
      items: "Clever Cloud (PaaS, CKE), AWS (ECS, ECR, EC2, RDS, CodePipeline), Huawei Cloud, OpenStack",
    },
    {
      label: "Automation and IaC",
      items: "Python, Shell, Terraform, Ansible",
    },
    {
      label: "CI/CD and DevOps",
      items: "GitHub Actions, GitLab CI, Jenkins, Docker, Kubernetes, Argo CD",
    },
    {
      label: "Security and quality",
      items: "SonarQube / SonarCloud, Trivy, IAM, security groups",
    },
    {
      label: "Observability",
      items: "Prometheus, Grafana",
    },
    {
      label: "Software development",
      items: "Express.js, Spring Boot, design patterns, architectures",
    },
  ],
} as const;

export const languages = {
  fr: "Arabe (langue maternelle) · Français (courant) · Anglais (courant)",
  en: "Arabic (native) · French (fluent) · English (fluent)",
} as const;

export const education = {
  fr: [
    {
      school: "INPT — Institut national des postes et télécommunications",
      detail: "Cycle d’ingénieur — Systèmes ubiquitaires et distribués, Cloud et IoT",
      dates: "2024 — 2027",
      place: "Rabat",
    },
    {
      school: "Lycée Technique Mohammedia",
      detail: "Classes préparatoires aux grandes écoles (CPGE)",
      dates: "2022 — 2024",
      place: "Mohammedia",
    },
  ],
  en: [
    {
      school: "INPT — National Institute of Posts and Telecommunications",
      detail: "Engineering degree — Ubiquitous and Distributed Systems, Cloud and IoT",
      dates: "2024 — 2027",
      place: "Rabat",
    },
    {
      school: "Lycée Technique Mohammedia",
      detail: "Preparatory classes for grandes écoles (CPGE)",
      dates: "2022 — 2024",
      place: "Mohammedia",
    },
  ],
} as const;

export const contact = {
  fr: {
    lead: "Ouvert aux stages PFE à partir de 2027, au Maroc ou à distance.",
    email: "Email",
    phone: "Téléphone",
  },
  en: {
    lead: "Open to PFE internships from 2027, in Morocco or remote.",
    email: "Email",
    phone: "Phone",
  },
} as const;

export const caseStudy = {
  fr: {
    kicker: "Projet",
    title: "Pipeline DevSecOps × GitOps, appliqué à une API Node.js",
    stack: "GitHub Actions · SonarCloud · Trivy · GHCR · Kustomize · Argo CD · Kyverno · Prometheus / Grafana",
    intro:
      "Une API CRUD volontairement simple (Express) sert de charge utile. Le travail réel est le chemin d’un commit jusqu’à un cluster kind local : tests, SAST, scan d’image, publication, bump de tag GitOps, synchronisation Argo CD, politiques d’admission, métriques.",
    reposLabel: "Dépôts",
    sections: [
      {
        title: "Séparation des responsabilités",
        body: "Le dépôt applicatif construit et pousse une image. Le dépôt GitOps est la source de vérité des manifests. CI n’a pas de kubeconfig. Argo CD est le seul reconcilier.",
      },
      {
        title: "Contrôles dans CI",
        body: "GitHub Actions enchaîne tests unitaires, SonarCloud, Trivy (filesystem puis image). Un finding HIGH non corrigé fait échouer le job. L’image part sur GHCR avec un tag immuable (SHA), jamais latest.",
      },
      {
        title: "Livraison GitOps",
        body: "Le dernier job CI exécute kustomize edit set image dans le dépôt de config et commit. Argo CD détecte le drift, se synchronise, Kyverno admet ou refuse le Pod.",
      },
      {
        title: "Preuves visuelles",
        body: "Les captures (run Actions, sync Argo, dashboard Grafana, refus Kyverno) seront ajoutées ici au fil des jalons — pas comme vitrine, comme journal de ce qui a réellement tourné.",
      },
    ],
    back: "Retour au profil",
  },
  en: {
    kicker: "Project",
    title: "DevSecOps × GitOps pipeline, applied to a Node.js API",
    stack: "GitHub Actions · SonarCloud · Trivy · GHCR · Kustomize · Argo CD · Kyverno · Prometheus / Grafana",
    intro:
      "An intentionally boring Express CRUD API is the payload. The actual work is the path from a commit to a local kind cluster: tests, SAST, image scan, publish, GitOps tag bump, Argo CD sync, admission policy, metrics.",
    reposLabel: "Repositories",
    sections: [
      {
        title: "Split of responsibility",
        body: "The app repo builds and pushes an image. The GitOps repo is the source of truth for manifests. CI has no kubeconfig. Argo CD is the only reconciler.",
      },
      {
        title: "Controls in CI",
        body: "GitHub Actions runs unit tests, SonarCloud, then Trivy (filesystem and image). An unfixed HIGH finding fails the job. The image is published to GHCR with an immutable SHA tag, never latest.",
      },
      {
        title: "GitOps delivery",
        body: "The last CI job runs kustomize edit set image in the config repo and commits. Argo CD sees the drift, syncs, and Kyverno admits or denies the Pod.",
      },
      {
        title: "Visual evidence",
        body: "Screenshots (Actions run, Argo sync, Grafana dashboard, Kyverno deny) land here as milestones complete — a log of what actually ran, not a marketing page.",
      },
    ],
    back: "Back to profile",
  },
} as const;

export const links = {
  email: "mailto:aboubakertounli@gmail.com",
  emailLabel: "aboubakertounli@gmail.com",
  phone: "tel:+212781487896",
  phoneLabel: "+212 781 487 896",
  linkedin: "https://www.linkedin.com/in/aboubaker-tounli/",
  github: "https://github.com/aboubakertounli",
  appRepo: "https://github.com/aboubakertounli/DevSecOps-x-GitOps",
  gitopsRepo: "https://github.com/aboubakertounli/DevSecOps-x-GitOps-gitops",
  cvFr: "/cv/CV_PFE_Aboubaker_TOUNLI_FR.pdf",
  cvEn: "/cv/CV_PFE_Aboubaker_TOUNLI_EN.pdf",
} as const;

export function copy(locale: Locale) {
  return {
    meta: meta[locale],
    nav: nav[locale],
    home: home[locale],
    experience: experience[locale],
    projects: projects[locale],
    skills: skills[locale],
    languages: languages[locale],
    education: education[locale],
    contact: contact[locale],
    caseStudy: caseStudy[locale],
    links,
  };
}
