import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Mail,
  MapPin,
  Volume2,
  VolumeX,
} from 'lucide-react'
import {
  profile,
  stats,
  expertise,
  skills,
  experience,
  projects,
  education,
  certs,
} from './data'

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
]

const Tag = ({ children }: { children: string }) => (
  <li className="tag">{children}</li>
)

function Cover({ id }: { id: string }) {
  // Original abstract art: no fake screenshots.
  return id === 'phonepe' ? (
    <svg
      viewBox="0 0 400 220"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="220" fill="#2a2420" />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle
          key={i}
          cx="200"
          cy="110"
          r={30 + i * 26}
          fill="none"
          stroke="#C65D32"
          strokeOpacity={1 - i * 0.18}
          strokeWidth="1.5"
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1="200"
          y1="110"
          x2={200 + 150 * Math.cos(i * 1.047)}
          y2={110 + 150 * Math.sin(i * 1.047)}
          stroke="#E8D8C3"
          strokeOpacity=".25"
        />
      ))}
      <circle cx="200" cy="110" r="14" fill="#C65D32" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 400 220"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="220" fill="#2a2420" />
      {[0, 1, 2, 3, 4, 5].map((r) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((c) => (
          <rect
            key={r + '-' + c}
            x={30 + c * 44}
            y={24 + r * 30}
            width="34"
            height="20"
            rx="3"
            fill={
              (r * 3 + c * 5) % 7 < 2 ? '#C65D32' : '#E8D8C3'
            }
            fillOpacity={
              (r * 3 + c * 5) % 7 < 2 ? 0.95 : 0.12
            }
          />
        )),
      )}
      <path
        d="M30 190 C120 120 220 210 370 90"
        stroke="#C65D32"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const video = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  const toggleSound = () => {
    const v = video.current
    if (!v) return

    if (v.muted) {
      v.muted = false
      v.volume = 1

      v.play()
        .then(() => setMuted(false))
        .catch(() => {
          v.muted = true
          setMuted(true)
        })
    } else {
      v.muted = true
      setMuted(true)
    }
  }

  // Keep the navigation behavior unchanged.
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)

    on()
    window.addEventListener('scroll', on, { passive: true })

    return () => window.removeEventListener('scroll', on)
  }, [])

  // Preserve the existing reduced-motion preference.
  useEffect(() => {
    const v = video.current

    if (
      v &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      v.pause()
    }
  }, [])

  // Enable sound after the visitor's first interaction.
  useEffect(() => {
    const enableSound = () => {
      const v = video.current

      if (!v || !v.muted) return

      v.muted = false
      v.volume = 1

      v.play()
        .then(() => {
          setMuted(false)
          cleanup()
        })
        .catch(() => {
          // Keep the existing sound button available if blocked.
          v.muted = true
          setMuted(true)
        })
    }

    const cleanup = () => {
      document.removeEventListener('click', enableSound)
      document.removeEventListener('touchstart', enableSound)
      document.removeEventListener('keydown', enableSound)
    }

    document.addEventListener('click', enableSound)
    document.addEventListener('touchstart', enableSound, {
      passive: true,
    })
    document.addEventListener('keydown', enableSound)

    return cleanup
  }, [])

  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>

      <header className={'nav' + (solid || open ? ' solid' : '')}>
        <a className="brand" href="#top">
          {profile.name}
        </a>

        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? 'open' : ''} aria-label="Primary">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={'#' + id}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <video
            ref={video}
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={`${import.meta.env.BASE_URL}hero-poster.jpg`}
            aria-label="Intro video of Bhyri Anush Goud"
          >
            <source
              src={`${import.meta.env.BASE_URL}hero.mp4`}
              type="video/mp4"
            />
          </video>

          <button
            className="sound"
            onClick={toggleSound}
            aria-pressed={!muted}
          >
            {muted ? (
              <VolumeX size={18} />
            ) : (
              <Volume2 size={18} />
            )}
            {muted ? 'Play with sound' : 'Mute'}
          </button>

          <div className="hero-overlay" />

          <div className="hero-inner">
            <p className="eyebrow">Portfolio / 2026</p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-tag">
              I build and run cloud infrastructure that stays up: GCP,
              Kubernetes, Terraform and CI/CD.
            </p>

            <dl className="stats">
              {stats.map((s) => (
                <div key={s.l}>
                  <dt>{s.l}</dt>
                  <dd>{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <a
            className="scroll"
            href="#about"
            aria-label="Scroll to About"
          >
            <span>Scroll</span>
            <ArrowDown size={18} />
          </a>
        </section>

        <section id="about" className="sec cream">
          <div className="wrap about">
            <figure className="portrait">
              <img
                src={`${import.meta.env.BASE_URL}portrait.jpg`}
                alt={`Portrait of ${profile.name}`}
                width="1000"
                height="962"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div>
              <p className="label">About</p>
              <h2>
                Keeping critical systems reliable, one pipeline at a time.
              </h2>
              <p className="lead">
                I'm a bilingual DevOps engineer based in Hyderabad with
                over five years of experience designing, testing and
                implementing infrastructure and applications. I rely on
                source control and automation to ship high-quality
                software, and I enjoy working across development,
                network, security and database teams to get production
                issues resolved.
              </p>

              <h3>Where I focus</h3>
              <ul className="plain">
                {expertise.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>

              <h3>Skills and tools</h3>
              <ul className="tags">
                {skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </ul>

              <div className="edu">
                <div>
                  <h3>Education</h3>
                  {education.map((e) => (
                    <p key={e.s}>
                      <strong>{e.s}</strong> ({e.y})
                      <br />
                      {e.d}
                      <br />
                      <span className="muted">{e.g}</span>
                    </p>
                  ))}
                </div>

                <div>
                  <h3>Google Cloud certifications</h3>
                  <ul className="plain">
                    {certs.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <p className="muted">All earned Apr 2022</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="sec sand">
          <div className="wrap">
            <p className="label">Experience</p>
            <h2>Where I've worked</h2>

            <ol className="timeline">
              {experience.map((x, i) => (
                <li key={x.company}>
                  <span
                    className={'dot' + (i === 0 ? ' now' : '')}
                    aria-hidden="true"
                  />
                  <p className="dates">{x.dates}</p>
                  <h3>{x.role}</h3>
                  <p className="co">
                    {x.company} · {x.place}
                  </p>
                  <p>{x.text}</p>
                  <ul className="tags">
                    {x.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projects" className="sec dark">
          <div className="wrap">
            <p className="label">Projects</p>
            <h2>Production systems I've supported</h2>

            <div className="cards">
              {projects.map((p) => (
                <article className="card" key={p.id}>
                  <div className="cover">
                    <Cover id={p.id} />
                  </div>

                  <div className="body">
                    <p className="meta">{p.meta}</p>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>

                    <ul className="tags">
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </ul>

                    <p className="note">
                      Client system: no public link or repository.{' '}
                      {/* Add p.link / p.github in data.ts if available */}
                    </p>

                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live project <ArrowUpRight size={16} />
                      </a>
                    )}

                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="sec dark contact">
          <div className="wrap">
            <p className="label">Contact</p>
            <h2>
              Have a platform to build or keep running? Let's talk.
            </h2>

            <a className="mail" href={`mailto:${profile.email}`}>
              <Mail size={28} aria-hidden="true" />
              {profile.email}
            </a>

            <ul className="plain row">
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight size={16} />
                </a>
              </li>

              <li>
                {profile.github ? (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="muted">
                    GitHub: add your URL in data.ts
                  </span>
                )}
              </li>

              <li>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume (PDF) <ArrowUpRight size={16} />
                </a>
              </li>

              <li className="muted">
                <MapPin size={15} aria-hidden="true" /> {profile.location}
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.title}</span>
        </div>
      </footer>
    </>
  )
}
