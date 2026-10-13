import { useEffect, useRef, useState, type CSSProperties } from "react";
import { profile, stats } from "../data/profile";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { asset } from "../assets";
import Icon from "./Icon";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const [failed, setFailed] = useState(false);
  const [paused, setPaused] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const showVideo = !reduced && !failed;

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    v.muted = true; // never play audio
    if (paused) v.pause();
    else v.play().catch(() => setPaused(true)); // autoplay blocked → show Play button
  }, [paused, showVideo]);

  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="hero__media" style={{ "--poster": `url(${asset("hero-poster.jpg")})` } as CSSProperties}>
        {showVideo && (
          <video
            ref={video}
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={asset("hero-poster.jpg")}
            aria-hidden="true"
            tabIndex={-1}
            onError={() => setFailed(true)}
          >
            <source src={asset("hero.webm")} type="video/webm" />
            <source src={asset("hero.mp4")} type="video/mp4" onError={() => setFailed(true)} />
          </video>
        )}
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__inner">
        <p className="hero__eyebrow" data-in style={d(100)}>
          <span>Portfolio / 2026</span>
          <span className="dot">
            <Icon name="pin" /> Hyderabad, India
          </span>
        </p>

        <h1 className="hero__name" data-in style={d(200)}>
          <span>Bhyri</span>
          <span>
            <em>Anush</em> Goud
          </span>
        </h1>

        <div className="hero__sub" data-in style={d(380)}>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__tagline">{profile.tagline}</p>
        </div>

        <div className="hero__foot" data-in style={d(560)}>
          <dl className="hero__stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
          <div className="hero__tools">
            {showVideo && (
              <button
                type="button"
                className="hero__pause"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play background video" : "Pause background video"}
              >
                <Icon name={paused ? "play" : "pause"} />
                {paused ? "Play" : "Pause"} video
              </button>
            )}
            <a className="scroll-cue" href="#about" aria-label="Scroll to About">
              <span className="scroll-cue__bar" aria-hidden="true" />
              <span>Scroll</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
