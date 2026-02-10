// // tailwind.config.ts
// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: "class",
//   content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         // Existing colors
//         brand: { DEFAULT: "#C8A24A", 600: "#B4892B", 700: "#8F6D21" },
//         ink: "#0b1324",
//         gold: {
//           500: "#D4AF37",
//           600: "#B4892B",
//         },

//         // ✅ Add your luxury palette
//         "luxury-dark": "#0a0f1c",
//         "luxury-darker": "#050913",
//         "luxury-card": "#1a2238",
//         "luxury-accent": "#2dd4bf",
//         "luxury-gold": "#d4af37",
//         "luxury-silver": "#e2e8f0",
//         "luxury-emerald": "#10b981",
//       },
//       fontFamily: {
//         display: ["ui-sans-serif", "Inter", "system-ui"],
//       },
//       borderRadius: { "2xl": "1.25rem" },
//       boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.10)" },
//     },
//   },
//   plugins: [],
// };

// export default config;



import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury color palette
        "luxury-dark": "#0a0f1c",
        "luxury-darker": "#050913",
        "luxury-card": "#1a2238",
        "luxury-accent": "#2dd4bf",
        "luxury-gold": "#d4af37",
        "luxury-silver": "#e2e8f0",
        "luxury-emerald": "#10b981",
        "luxury-crystal": "rgba(255, 255, 255, 0.1)",
        "luxury-blue": "#1d4ed8",
        "luxury-red": "#dc2626",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Playfair Display", "serif"],
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
      boxShadow: {
        "luxury": "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        "luxury-glow": "0 0 40px rgba(45, 212, 191, 0.3)",
        "luxury-gold": "0 0 40px rgba(212, 175, 55, 0.3)",
        "inner-luxury": "inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "gradient": "gradient 3s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      perspective: {
        "1000": "1000px",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
    },
  },
  plugins: [],
};

export default config;