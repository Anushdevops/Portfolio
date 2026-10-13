import { useEffect, useState } from "react";
import { navItems, profile } from "../data/profile";
import Icon from "./Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const cls = ["nav", scrolled && "is-scrolled", open && "is-open"].filter(Boolean).join(" ");

  return (
    <header className={cls}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)} aria-label="Home">
          <span className="nav__mark" aria-hidden="true">AG</span>
          <span>Anush Goud</span>
        </a>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>

        <nav id="site-menu" className="nav__links" aria-label="Primary">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`nav__link${active === n.id ? " is-active" : ""}`}
              aria-current={active === n.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a className="nav__cta" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
