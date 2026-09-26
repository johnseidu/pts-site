import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pts-navy": "#0B192C",
        "pts-amber": "#F59E0B",
        "pts-amber-dark": "#D97706",
        "pts-whatsapp": "#25D366",
        "pts-whatsapp-dark": "#20BA5A",
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        "glow-amber": "0 0 0 1px rgba(245,158,11,0.4), 0 8px 24px -8px rgba(245,158,11,0.35)",
        "glow-green": "0 8px 24px -8px rgba(37,211,102,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
