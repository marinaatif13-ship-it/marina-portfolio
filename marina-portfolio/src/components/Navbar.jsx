import { useEffect, useState } from "react";
import { navLinks, socials } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (link) => {
    setActive(link);
    const section = document.getElementById(link.toLowerCase());
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-[#120a10]/95 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/30"
          : "bg-transparent")
      }
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Marina Atif logo" className="w-9 h-9 rounded-lg" />
          <span className="font-bold text-white text-lg tracking-tight">
            Portfolio
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => goTo(link)}
                className={
                  "text-sm font-medium transition-colors " +
                  (active === link ? "text-white" : "text-white/55 hover:text-white")
                }
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-wine-400 transition-all"
              >
                <i className={s.icon + " text-xs"} />
              </a>
            ))}
          </div>
          <button
            onClick={() => goTo("Contact")}
            className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-wine-500 to-wine-600 text-white text-sm font-semibold hover:from-wine-400 hover:to-gold-500 transition-all shadow-lg shadow-wine-500/20"
          >
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </nav>
  );
}
