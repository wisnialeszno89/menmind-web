import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0e1628",
        navy: "#132241",
        navySoft: "#182a4d",
        accent: "#3b82f6",
        accentSoft: "#60a5fa",
        textPrimary: "#f1f5f9",
        textMuted: "#94a3b8",
        borderSoft: "#1f2a44",
      },
    },
  },
  plugins: [],
};

export default config;