/**
 * Single source of truth for all site content.
 * Everything below comes from the résumé unless marked PLACEHOLDER / TODO.
 */

export const profile = {
  name: "Bhyri Anush Goud",
  title: "Multi Cloud DevOps Engineer",
  tagline:
    "I build reliable, automated cloud infrastructure on Google Cloud — from Terraform to zero-downtime GKE rollouts.",
  location: "Hyderabad, Telangana, India",
  email: "Goudanush40@gmail.com",
  linkedin: "https://www.linkedin.com/in/anush-goud-222045225",
  // PLACEHOLDER: add your GitHub profile URL, e.g. "https://github.com/your-username".
  // While empty, the site shows a clearly marked "add link" chip instead of a dead link.
  github: "",
  // From the résumé header ("Verified Cloud-ID").
  cloudId: "https://s.cloudhire.ai/Ork5AJT",
};

export const stats = [
  { value: "5+", label: "Years in DevOps" },
  { value: "4×", label: "Google Cloud certifications" },
  { value: "GCP", label: "Primary focus · GKE & Terraform" },
];

export const expertise = [
  {
    title: "Infrastructure as Code",
    text: "Designing and deploying GCP infrastructure with Terraform, including automated IAM provisioning.",
  },
  {
    title: "CI/CD & delivery",
    text: "Pipelines on Cloud Build, GitHub, GitLab CI and Jenkins that make deployments faster and repeatable.",
  },
  {
    title: "Kubernetes & GKE",
    text: "Operating and optimizing GKE clusters, containerized microservices and zero-downtime rollouts.",
  },
  {
    title: "Reliability & response",
    text: "Monitoring dashboards, incident and change management, RCA and 24×7 on-call support.",
  },
];

export const skillGroups = [
  { group: "Cloud & platform", items: ["Google Cloud (GCP)", "GKE", "Cloud Load Balancing", "Cloud Armor", "Cloud Functions", "Cloud Scheduler", "Artifact Registry", "IAM"] },
  { group: "Automation & IaC", items: ["Terraform", "Chef", "Scripting", "Configuration management"] },
  { group: "CI/CD & source control", items: ["Cloud Build", "GitHub Actions", "GitLab CI", "Jenkins", "Version control"] },
  { group: "Containers", items: ["Kubernetes", "Docker", "Docker Compose"] },
  { group: "Operations", items: ["Linux", "Cloud Monitoring", "Stackdriver", "Incident management", "RCA"] },
];

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
  current?: boolean;
};

// Reverse-chronological, exactly as on the résumé.
export const roles: Role[] = [
  {
    company: "Kyndryl Solutions Pvt. Ltd",
    title: "GCP DevOps Engineer",
    start: "Apr 2022",
    end: "Present",
    location: "Hyderabad, India",
    current: true,
    summary: "Owning GCP infrastructure, delivery pipelines and GKE operations.",
    highlights: [
      "Designed and deployed GCP infrastructure using Terraform, and automated IAM provisioning.",
      "Implemented CI/CD with Cloud Build and GitHub to improve code deployment efficiency.",
      "Optimized GKE clusters to reduce operational costs, and led zero-downtime GKE rollouts.",
      "Containerized microservices and developed Stackdriver dashboards for monitoring.",
      "Maintained version control systems and provided 24/7 on-call support.",
    ],
    tags: ["GCP", "Terraform", "GKE", "Cloud Build", "GitHub", "CI/CD", "Stackdriver", "IAM", "Containers"],
  },
  {
    company: "Artech Infosystems",
    title: "DevOps Engineer",
    start: "Jun 2021",
    end: "Mar 2022",
    location: "Hyderabad, India",
    summary: "A DevOps role centered on CI/CD pipelines, containers and Terraform on GCP.",
    highlights: [
      "Built CI/CD pipelines using GitLab CI and GCP Cloud Build, and monitored automated build processes.",
      "Designed containerization strategies and deployed workloads on GKE.",
      "Automated infrastructure provisioning with Terraform, and routine tasks through scripting.",
      "Implemented ingress with Cloud Load Balancers and provided 24/7 on-call support.",
    ],
    tags: ["GitLab CI", "Cloud Build", "Terraform", "GKE", "Cloud Load Balancing", "Scripting"],
  },
];

export const education = [
  {
    school: "Vaagdevi College of Engineering",
    credential: "B.Tech, Electrical, Electronics and Communications Engineering",
    year: "2017",
    note: "Final grade: 65%",
  },
  {
    school: "VMR Polytechnic",
    credential: "Diploma, Electrical, Electronics and Communications Engineering",
    year: "2014",
    note: "Final grade: 70%",
  },
];

export const certifications = [
  { name: "Google Cloud Professional Cloud Architect", date: "Apr 2022" },
  { name: "Google Cloud Professional DevOps Engineer", date: "Apr 2022" },
  { name: "Google Cloud Professional Cloud Developer", date: "Apr 2022" },
  { name: "Google Cloud Associate Cloud Engineer", date: "Apr 2022" },
];

export type Project = {
  id: string;
  kicker: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  cover: "traffic" | "migration";
  // Add real URLs here ONLY when they exist. Both are empty for these client engagements.
  links?: { live?: string; github?: string };
};

export const projects: Project[] = [
  {
    id: "phonepe",
    kicker: "ICICI-Phonepe-Project · On-premise / GCP",
    title: "PhonePe Banking Application",
    // TODO(confirm): résumé header says "Mar 2024", body says "April 2024 - Present".
    period: "Apr 2024 — Present",
    description:
      "DevOps and production infrastructure support for a banking application, keeping services available, reliable and smoothly deployed.",
    highlights: [
      "Managed Jenkins CI/CD: build and deployment jobs, agents, plugins and pipeline troubleshooting.",
      "Supported Docker microservices with images and artifacts in Google Artifact Registry.",
      "Operated GKE environments and managed IAM, HTTP/HTTPS load balancers and Cloud Armor policies.",
      "Took part in incident, problem and change management, and the 24×7 on-call rotation.",
    ],
    tags: ["Jenkins", "Docker", "GKE", "Artifact Registry", "IAM", "Cloud Armor", "Chef", "Cloud Functions"],
    cover: "traffic",
  },
  {
    id: "gpay",
    kicker: "ICICI-GPAY-Project · GCP",
    title: "Google Pay Application",
    // TODO(confirm): résumé gives only "Jun 2021" with no end date.
    period: "Jun 2021 — [end date TBC]",
    description:
      "Managed and supported GCP infrastructure for the Google Pay application across compute, Kubernetes, IAM, networking, load balancing and security.",
    highlights: [
      "Administered Jenkins nodes, plugins, scheduled builds and pipeline execution.",
      "Containerized services with Docker and Docker Compose; maintained GKE clusters and workloads.",
      "Migrated data and workloads between GCP projects and validated services afterwards.",
      "Built monitoring dashboards to client requirements and handled 24×7 production support.",
    ],
    tags: ["GCP", "GKE", "Jenkins", "Docker Compose", "Chef", "IAM", "Cloud Armor", "Cloud Functions"],
    cover: "migration",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
