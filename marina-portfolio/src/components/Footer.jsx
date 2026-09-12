import { useState } from "react";
import { navLinks, socials } from "../data/site";

const whatIDo = [
  "Front-End Development",
  "Responsive Web Design",
  "React & Tailwind Projects",
  "UI / UX Implementation",
  "Component Architecture",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const goTo = (link) => {
    const section = document.getElementById(link.toLowerCase());
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      <div className="border-t border-white/6 bg-[#170d11]/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <h3 className="text-white font-semibold text-base mb-1">Stay Updated</h3>
              <p className="text-white/40 text-sm">Subscribe to see my latest projects &amp; articles.</p>
            </div>
            <form onSubmit={onSubscribe} className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-64 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-wine-400/50 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-wine-500 to-wine-600 text-white text-sm font-semibold hover:from-wine-400 hover:to-gold-500 transition-all whitespace-nowrap"
              >
                {subscribed ? "Subscribed ✓" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="bg-[#0d070a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-wine-400 to-gold-400" />
                <span className="font-bold text-white text-lg">Portfolio</span>
              </div>
              <p className="text-white/35 text-sm leading-relaxed max-w-xs">
                Full-Stack Developer building beautiful, responsive web experiences with modern
                front-end technologies.
              </p>
              <div className="flex gap-2 mt-5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-wine-400 transition-all"
                  >
                    <i className={s.icon + " text-xs"} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white/70 font-semibold text-sm mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => goTo(link)}
                      className="text-white/40 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white/70 font-semibold text-sm mb-4">What I Do</h4>
              <ul className="space-y-2 text-white/40 text-sm">
                {whatIDo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 mt-8 pt-6 flex items-center justify-center">
            <p className="text-white/25 text-xs">© 2026 Marina Atif - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
