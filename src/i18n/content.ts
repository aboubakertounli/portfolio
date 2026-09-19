import type { Locale } from "./index";

export const meta = {
  fr: {
    title: "TOUNLI Aboubaker — Cloud & DevOps",
    description:
      "Élève ingénieur INPT en systèmes distribués. Stagiaire Cloud & DevOps chez Clever Cloud Morocco. 3e mondial, Huawei ICT Competition 2026, Cloud Track.",
  },
  en: {
    title: "TOUNLI Aboubaker — Cloud & DevOps",
    description:
      "Final-year engineering student at INPT specializing in Distributed Systems. Cloud & DevOps intern at Clever Cloud Morocco. 3rd worldwide, Huawei ICT Competition 2026, Cloud Track.",
  },
} as const;

export const nav = {
  fr: {
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
  },
  en: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
} as const;

export const home = {
  fr: {
    available: "Ouvert au PFE",
    role: "Cloud & DevOps",
    location: "Rabat, Maroc",
    about:
      "Élève ingénieur en dernière année à l’INPT, spécialisé en systèmes distribués. Stagiaire ingénieur Cloud & DevOps chez Clever Cloud Morocco, 3e mondial à la Huawei ICT Competition 2026, Cloud Track. À la recherche d’un stage de fin d’études.",
    cv: "Télécharger le CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    viewCode: "Code source",
    highlights: [
      { value: "3e", label: "mondial Huawei ICT 2026 · Cloud Track" },
      { value: "~10%", label: "économies FinOps, premier test" },
      { value: "INPT", label: "Cloud, IoT & systèmes distribués" },
    ],
  },
  en: {
    available: "Open to PFE internships",
    role: "Cloud & DevOps",
    location: "Rabat, Morocco",
    about:
      "Final-year engineering student at INPT specializing in Distributed Systems. Cloud & DevOps engineer intern at Clever Cloud Morocco, 3rd worldwide at the Huawei ICT Competition 2026, Cloud Track. Looking for a graduation end-of-studies internship.",
    cv: "Download resume",
    github: "GitHub",
    linkedin: "LinkedIn",
    viewCode: "Source code",
    highlights: [
      { value: "3rd", label: "worldwide Huawei ICT 2026 · Cloud Track" },
      { value: "~10%", label: "FinOps savings on first test" },
      { value: "INPT", label: "Cloud, IoT & distributed systems" },
    ],
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
      tags: ["GitHub Actions", "Trivy", "Argo CD", "Kubernetes", "Docker"],
      points: [
        "CI : tests, scan d’image, publication Docker — sans déployer directement sur le cluster.",
        "GitOps : manifests comme source de vérité, synchronisés par Argo CD.",
      ],
      repos: [
        { label: "App + CI", href: "https://github.com/aboubakertounli/DevSecOps-x-GitOps" },
        { label: "GitOps", href: "https://github.com/aboubakertounli/DevSecOps-x-GitOps-gitops" },
      ],
    },
    {
      slug: "aws-microservices",
      title: "Microservices & CI/CD sur AWS",
      tags: ["ECS", "ECR", "ALB", "CodePipeline", "Docker", "Node.js"],
      points: [
        "Monolithe découpé en services sur ECS, images dans ECR, trafic via ALB.",
        "Pipeline CodeCommit / CodeDeploy / CodePipeline, déploiements blue/green.",
      ],
      repos: [],
    },
    {
      slug: "openstack",
      title: "Cloud privé OpenStack",
      tags: ["OpenStack", "Terraform", "Réseaux"],
      points: [
        "All-in-One : virtualisation, ressources, réseaux, groupes de sécurité, puis Terraform.",
      ],
      repos: [],
    },
  ],
  en: [
    {
      slug: "devsecops-gitops",
      title: "DevSecOps × GitOps pipeline",
      tags: ["GitHub Actions", "Trivy", "Argo CD", "Kubernetes", "Docker"],
      points: [
        "CI: tests, image scanning, Docker publish — never deploys straight to the cluster.",
        "GitOps: manifests as source of truth, synced by Argo CD.",
      ],
      repos: [
        { label: "App + CI", href: "https://github.com/aboubakertounli/DevSecOps-x-GitOps" },
        { label: "GitOps", href: "https://github.com/aboubakertounli/DevSecOps-x-GitOps-gitops" },
      ],
    },
    {
      slug: "aws-microservices",
      title: "Microservices & CI/CD on AWS",
      tags: ["ECS", "ECR", "ALB", "CodePipeline", "Docker", "Node.js"],
      points: [
        "Split a monolith into ECS services, images in ECR, traffic through an ALB.",
        "CodeCommit / CodeDeploy / CodePipeline with blue/green deployments.",
      ],
      repos: [],
    },
    {
      slug: "openstack",
      title: "OpenStack private cloud",
      tags: ["OpenStack", "Terraform", "Networking"],
      points: [
        "All-in-one: virtualization, resources, networks, security groups, then Terraform.",
      ],
      repos: [],
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
    lead: "Ouvert aux stages PFE, au Maroc ou à distance.",
    email: "Email",
    phone: "Téléphone",
  },
  en: {
    lead: "Open to PFE internships, in Morocco or remote.",
    email: "Email",
    phone: "Phone",
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
  cvFr: "cv/CV_PFE_Aboubaker_TOUNLI_FR.pdf",
  cvEn: "cv/CV_PFE_Aboubaker_TOUNLI_EN.pdf",
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
    links,
  };
}
