import useTypewriter from "../hooks/useTypewriter";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

const ROLES = ["Front-End Developer", "React Developer", "UI/UX Enthusiast"];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el && el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* decorative dot-grid background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-wine-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* left column */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-wine-500/10 border border-wine-500/20 rounded-full px-4 py-1.5 text-wine-200 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Hi! I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-wine-400 via-wine-300 to-gold-400">
                Marina
              </span>
              <br />
              Atif
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 min-h-[2.5rem] text-white">
              {typed}
              <span className="inline-block w-[2px] h-7 md:h-9 bg-wine-400 align-middle ml-1 animate-pulse" />
            </h2>

            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Crafting <strong className="text-white/80 font-medium">beautiful, responsive web applications</strong> with
              modern front-end technologies. Passionate about clean code, elegant UI, and delightful user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo("projects")}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-wine-500 to-wine-700 text-white font-semibold hover:from-wine-400 hover:to-wine-600 transition-all shadow-xl shadow-wine-500/25 text-sm"
              >
                View My Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-7 py-3.5 rounded-full border border-white/15 text-white/80 font-medium hover:border-wine-400 hover:text-white transition-all text-sm"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* right column - code panel */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-wine-500/20 to-gold-500/20 blur-2xl scale-110" />

              <span className="absolute -top-4 -right-6 px-3 py-1.5 rounded-full bg-[#170d11] border border-wine-400/30 text-xs text-white/70 shadow-lg shadow-wine-500/20 z-10 animate-breathe">
                ⚛️ React Dev
              </span>
              <span
                className="absolute -bottom-4 -left-6 px-3 py-1.5 rounded-full bg-[#170d11] border border-gold-400/30 text-xs text-white/70 shadow-lg shadow-gold-500/20 z-10 animate-breathe"
                style={{ animationDelay: "1.1s" }}
              >
                UI / UX
              </span>

              <div className="relative bg-[#170d11] border border-white/10 rounded-3xl p-6 w-80 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={`${import.meta.env.BASE_URL}images/marina-photo.png`}
                    alt="Marina Atif"
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0 ring-2 ring-wine-400/40"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">Marina Atif</p>
                    <p className="text-white/40 text-xs">Front-End Developer</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center border-r border-white/10">
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-wine-300 to-wine-500">
                      {projects.length}
                    </p>
                    <p className="text-white/40 text-[10px] mt-1">Projects</p>
                  </div>
                  <div className="text-center border-r border-white/10">
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold-300 to-gold-500">
                      {skills.length}
                    </p>
                    <p className="text-white/40 text-[10px] mt-1">Technologies</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-wine-300 to-gold-400">
                      100%
                    </p>
                    <p className="text-white/40 text-[10px] mt-1">Responsive</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {skills.map((s) => (
                    <span
                      key={s.label}
                      className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-wine-500/10 border border-wine-500/20 text-wine-300"
                    >
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[10px] tracking-[0.3em]">
        SCROLL
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
