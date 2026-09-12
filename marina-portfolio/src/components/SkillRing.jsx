export default function SkillRing({ percent, color, label }) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-28 h-28 md:w-32 md:h-32">
        <svg
          viewBox="0 0 110 110"
          className="w-full h-full -rotate-90"
          style={{ filter: `drop-shadow(0 0 8px ${color}55)` }}
        >
          <circle
            cx="55"
            cy="55"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
          />
          <circle
            cx="55"
            cy="55"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl md:text-2xl font-bold text-white">{percent}%</span>
        </div>
      </div>
      <span className="text-white font-semibold text-sm md:text-base">{label}</span>
    </div>
  );
}
