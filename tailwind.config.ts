import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#0c1117",
          raised: "#141b24",
          border: "#243044",
        },
        accent: {
          DEFAULT: "#3dd6c6",
          muted: "#2a9d8f",
          glow: "#5eead4",
        },
        ink: {
          DEFAULT: "#e8edf4",
          muted: "#94a3b8",
          faint: "#64748b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
