import { certifications, education, roles } from "../data/profile";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="exp-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="label">02 — Experience</span>
          <h2 id="exp-title" className="h2">
            Where I’ve <em>shipped</em> and kept things running.
          </h2>
        </Reveal>

        <ol className="timeline">
          {roles.map((r, i) => (
            <li key={r.company} className={`role${r.current ? " role--current" : ""}`}>
              <span className="role__marker" aria-hidden="true" />
              <p className="role__when">
                <strong>
                  {r.start} — {r.end}
                </strong>
                {r.current ? "Current role" : ""}
              </p>
              <Reveal delay={i * 80}>
                <article className="role__card">
                  <p className="role__company">{r.company}</p>
                  <h3 className="role__title">{r.title}</h3>
                  <span className="role__loc">
                    <Icon name="pin" /> {r.location}
                  </span>
                  <p className="role__summary">{r.summary}</p>
                  <ul className="role__list">
                    {r.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <ul className="tags" aria-label="Technologies">
                    {r.tags.map((t) => (
                      <li className="tag" key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="creds">
          <Reveal>
            <h3>Education</h3>
            {education.map((e) => (
              <div className="cred" key={e.school}>
                <div>
                  <p className="cred__name">{e.school}</p>
                  <p className="cred__sub">
                    {e.credential} · {e.note}
                  </p>
                </div>
                <span className="cred__date">{e.year}</span>
              </div>
            ))}
          </Reveal>
          <Reveal delay={100}>
            <h3>Certifications</h3>
            {certifications.map((c) => (
              <div className="cred" key={c.name}>
                <p className="cred__name">{c.name}</p>
                <span className="cred__date">{c.date}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
