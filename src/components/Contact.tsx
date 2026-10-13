import { profile } from "../data/profile";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <>
      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <div className="container">
          <Reveal>
            <span className="label label--light">04 — Contact</span>
            <h2 id="contact-title" className="h2 h2--light contact__big">
              Let’s build something <em>reliable.</em>
            </h2>
            <p className="contact__lead">
              Open to conversations about cloud, DevOps and platform engineering work. The quickest
              way to reach me is email.
            </p>
            <a className="contact__mail" href={`mailto:${profile.email}`}>
              {profile.email}
              <Icon name="arrowUpRight" />
            </a>
          </Reveal>

          <Reveal delay={120} className="contact__links">
            <a className="btn btn--solid" href={`mailto:${profile.email}`}>
              <Icon name="mail" /> Email me
            </a>
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" /> LinkedIn <Icon name="arrowUpRight" className="arrow" />
            </a>
            {profile.github ? (
              <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
                <Icon name="github" /> GitHub <Icon name="arrowUpRight" className="arrow" />
              </a>
            ) : (
              <span className="btn btn--placeholder" title="Placeholder: set `github` in src/data/profile.ts">
                <Icon name="github" /> GitHub — add link
              </span>
            )}
            <a className="btn btn--ghost" href={profile.cloudId} target="_blank" rel="noopener noreferrer">
              <Icon name="badge" /> Verified Cloud-ID <Icon name="arrowUpRight" className="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span>
            {profile.location} · <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </span>
        </div>
      </footer>
    </>
  );
}
