import { useState } from "react";
import { filters, projects } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState("All Projects");

  const visible =
    active === "All Projects" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-wine-400 tracking-widest uppercase mb-3 block">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Featured Projects</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-wine-500 to-gold-400 mx-auto mb-4" />
          <p className="text-white/50 text-sm max-w-md mx-auto">
            Real-world applications built with modern technologies and best practices.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 bg-[#170d11] border border-white/10 rounded-full p-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={
                  "px-5 py-2 rounded-full text-sm font-medium transition-all " +
                  (active === f
                    ? "bg-gradient-to-r from-wine-500 to-wine-600 text-white"
                    : "text-white/50 hover:text-white")
                }
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-2xl overflow-hidden bg-[#170d11] border border-white/10 hover:border-wine-400/40 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(34, 197, 94, 0.145)",
                    border: "1px solid rgba(34, 197, 94, 0.376)",
                    color: "rgb(34, 197, 94)",
                  }}
                >
                  Completed
                </span>

                {p.href !== "#" && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-wine-500 to-wine-600 text-white text-sm font-semibold shadow-lg">
                      View Project
                    </span>
                  </a>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white text-base mb-2 group-hover:text-wine-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed mb-4 line-clamp-3">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] bg-wine-500/10 border border-wine-500/20 text-wine-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
