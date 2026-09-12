import { useState } from "react";
import SkillRing from "./SkillRing";
import { skills } from "../data/skills";

const PER_PAGE = 4;

export default function Skills() {
  const pages = Math.ceil(skills.length / PER_PAGE);
  const [page, setPage] = useState(0);

  const visible = skills.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const go = (dir) => {
    setPage((p) => (p + dir + pages) % pages);
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-wine-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <span className="text-xs font-mono text-wine-400 tracking-widest uppercase mb-3 block">
          Technical Expertise
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Front-End Skills
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-wine-500 to-gold-400 mx-auto mb-4" />
        <p className="text-white/50 text-sm max-w-md mx-auto mb-16">
          The front-end technologies I use to build modern, responsive web experiences.
        </p>

        <div className="flex items-center justify-center gap-6 md:gap-10">
          <button
            onClick={() => go(-1)}
            aria-label="Previous skills"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-wine-400 transition-all shrink-0"
          >
            <i className="fa-solid fa-chevron-left text-xs" />
          </button>

          <div className="flex flex-wrap justify-center gap-10 md:gap-14 min-h-[180px]">
            {visible.map((s) => (
              <SkillRing key={s.label} percent={s.percent} color={s.color} label={s.label} />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next skills"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-wine-400 transition-all shrink-0"
          >
            <i className="fa-solid fa-chevron-right text-xs" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to skills page ${i + 1}`}
              className={
                "h-2 rounded-full transition-all duration-300 " +
                (page === i ? "bg-wine-400 w-6" : "bg-white/20 w-2")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
