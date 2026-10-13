// All content comes from resume.pdf. Edit here; "TODO" marks missing details.
export const profile = {
  name: 'Bhyri Anush Goud', // resume spelling; your brief said "Gooud" – change here if intended
  title: 'Multi Cloud DevOps Engineer',
  location: 'Hyderabad, Telangana, India',
  email: 'goudanush40@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anush-goud-222045225',
  github: '', // TODO: add your GitHub URL, e.g. https://github.com/your-handle
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
}
export const stats = [
  { v: '5+', l: 'Years in DevOps' },
  { v: 'Hyderabad', l: 'India' },
  { v: 'GCP', l: 'Primary focus' },
]
export const expertise = [
  'GCP infrastructure with Terraform',
  'CI/CD on Jenkins, Cloud Build, GitHub Actions and GitLab CI',
  'GKE and Docker-based microservices',
  'IAM, load balancing and Cloud Armor',
  'Monitoring, incident response and 24×7 on-call',
]
export const skills = ['Linux','GCP','Terraform','Kubernetes / GKE','Docker','Jenkins','GitHub Actions','GitLab CI','Cloud Build','Chef','Cloud Monitoring','Artifact Registry','Cloud Functions','Cloud Scheduler','Cloud Armor','IAM']
export const experience = [
  { company: 'Kyndryl Solutions Pvt. Ltd', role: 'GCP DevOps Engineer', dates: 'Apr 2022 – Present', place: 'Hyderabad, India',
    text: 'Designed and deployed GCP infrastructure with Terraform, set up CI/CD with Cloud Build and GitHub, containerized microservices, and led zero-downtime GKE rollouts. Built Stackdriver dashboards, automated IAM provisioning and provided 24/7 on-call support.',
    tags: ['GCP','Terraform','GKE','Cloud Build','GitHub','Stackdriver','IAM'] },
  { company: 'Artech Infosystems', role: 'DevOps Engineer', dates: 'Jun 2021 – Mar 2022', place: 'Hyderabad, India',
    text: 'Built CI/CD pipelines with GitLab CI and GCP Cloud Build, automated infrastructure provisioning with Terraform, deployed workloads on GKE with ingress through Cloud Load Balancers, and provided 24/7 on-call support.',
    tags: ['GitLab CI','Cloud Build','Terraform','GKE','Load Balancing'] },
]
export const projects = [
  { id: 'phonepe', title: 'ICICI – PhonePe banking application', meta: 'On-premise / GCP · from Apr 2024',
    text: 'DevOps and production infrastructure support for a banking application: Jenkins CI/CD, GKE operations, IAM, load balancers with Cloud Armor, monitoring dashboards, and incident and change management.',
    tags: ['Jenkins','GKE','Docker','Artifact Registry','Chef','Cloud Armor','IAM'], link: '', github: '' },
  { id: 'gpay', title: 'ICICI – Google Pay application', meta: 'GCP · from Jun 2021',
    text: 'Managed GCP infrastructure for a payments application: Jenkins administration, Dockerized microservices, GKE clusters, IAM, Chef configuration, and migration of workloads between GCP projects.',
    tags: ['GCP','Jenkins','Docker','GKE','Chef','Cloud Functions'], link: '', github: '' },
]
export const education = [
  { s: 'Vaagdevi College of Engineering', d: 'B.Tech, Electrical, Electronics and Communications Engineering', y: '2017', g: 'Distinction, 65%' },
  { s: 'VMR Polytechnic', d: 'Diploma, Electrical, Electronics and Communications Engineering', y: '2014', g: 'Distinction, 70%' },
]
export const certs = ['Professional Cloud Architect','Associate Cloud Engineer','Professional Cloud Developer','Professional DevOps Engineer'] // all Google Cloud, Apr 2022
