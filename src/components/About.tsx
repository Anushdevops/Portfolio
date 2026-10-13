import { expertise, profile, skillGroups } from "../data/profile";
import { asset } from "../assets";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__aside">
          <figure className="portrait">
            <img
              className="portrait__img"
              src={asset("portrait.jpg")}
              alt="Portrait of Bhyri Anush Goud"
              width={1000}
              height={962}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="portrait__cap">
              <Icon name="pin" /> Hyderabad, India
            </figcaption>
          </figure>
        </Reveal>

        <div className="about__text">
          <Reveal>
            <span className="label">01 — About</span>
            <h2 id="about-title" className="h2">
              Infrastructure that <em>stays out of the way.</em>
            </h2>
          </Reveal>

          <Reveal delay={100} className="about__bio">
            <p>
              I’m a DevOps engineer based in Hyderabad with over five years of experience designing,
              testing and implementing infrastructure and applications.
            </p>
            <p>
              Since April 2022 I’ve been at Kyndryl, working on Google Cloud: Terraform-based
              infrastructure, CI/CD pipelines, GKE operations and monitoring. I enjoy collaborating
              across diverse teams, managing several priorities at once, and optimizing processes to
              improve operational performance.
            </p>
            <p>
              I hold four Google Cloud certifications and take part in 24×7 on-call rotations,
              where incident management and clear stakeholder coordination matter as much as the
              tooling.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ul className="expertise" aria-label="Areas of expertise">
              {expertise.map((e, i) => (
                <li className="expertise__item" key={e.title}>
                  <span className="expertise__num">0{i + 1}</span>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <dl className="skills" aria-label="Skills and technologies">
              {skillGroups.map((g) => (
                <div className="skills__row" key={g.group}>
                  <dt>{g.group}</dt>
                  <dd>
                    <ul className="tags">
                      {g.items.map((s) => (
                        <li className="tag" key={s}>{s}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <span className="sr-only">{profile.name}</span>
        </div>
      </div>
    </section>
  );
}
