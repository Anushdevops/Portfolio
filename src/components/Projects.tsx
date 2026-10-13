import { projects } from "../data/profile";
import Icon from "./Icon";
import ProjectCover from "./ProjectCover";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="proj-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="label label--light">03 — Projects</span>
          <h2 id="proj-title" className="h2 h2--light">
            Selected <em>engagements.</em>
          </h2>
          <p>
            Client production environments, described at a high level. Illustrations are original
            artwork, not screenshots.
          </p>
        </Reveal>

        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <article className="pcard">
                <div className="pcard__cover">
                  <ProjectCover variant={p.cover} />
                  <span className="pcard__period">{p.period}</span>
                </div>
                <div className="pcard__body">
                  <p className="pcard__kicker">{p.kicker}</p>
                  <h3 className="pcard__title">{p.title}</h3>
                  <p className="pcard__desc">{p.description}</p>
                  <ul className="pcard__list">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <ul className="tags" aria-label="Technologies">
                    {p.tags.map((t) => (
                      <li className="tag tag--dark" key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="pcard__foot">
                    {p.links?.live && (
                      <a className="pcard__link" href={p.links.live} target="_blank" rel="noopener noreferrer">
                        Live project <Icon name="arrowUpRight" />
                      </a>
                    )}
                    {p.links?.github && (
                      <a className="pcard__link" href={p.links.github} target="_blank" rel="noopener noreferrer">
                        <Icon name="github" /> Source
                      </a>
                    )}
                    {!p.links?.live && !p.links?.github && (
                      <span className="pcard__note">
                        <Icon name="lock" /> Private client work — no public link or repository
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
