// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Existing colors
        brand: { DEFAULT: "#C8A24A", 600: "#B4892B", 700: "#8F6D21" },
        ink: "#0b1324",
        gold: {
          500: "#D4AF37",
          600: "#B4892B",
        },

        // ✅ Add your luxury palette
        "luxury-dark": "#0a0f1c",
        "luxury-darker": "#050913",
        "luxury-card": "#1a2238",
        "luxury-accent": "#2dd4bf",
        "luxury-gold": "#d4af37",
        "luxury-silver": "#e2e8f0",
        "luxury-emerald": "#10b981",
      },
      fontFamily: {
        display: ["ui-sans-serif", "Inter", "system-ui"],
      },
      borderRadius: { "2xl": "1.25rem" },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.10)" },
    },
  },
  plugins: [],
};

export default config;
