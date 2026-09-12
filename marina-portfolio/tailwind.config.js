/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        wine: {
          50: "#fbf1f3",
          100: "#f5dfe4",
          200: "#e9bac6",
          300: "#d78ca0",
          400: "#c05d78",
          500: "#a13a58",
          600: "#832945",
          700: "#661f37",
          800: "#4a1729",
          900: "#33101d",
          950: "#1f0a13",
        },
        gold: {
          300: "#f2d38a",
          400: "#e6bd63",
          500: "#d1a34a",
        },
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "translateY(0px) scale(1)", opacity: "1" },
          "50%": { transform: "translateY(-6px) scale(1.04)", opacity: "0.85" },
        },
      },
      animation: {
        breathe: "breathe 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
