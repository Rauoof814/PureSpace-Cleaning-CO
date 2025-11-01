import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#C8A24A", 600:"#B4892B", 700:"#8F6D21" }, ink: "#0b1324" },
      fontFamily: { display: ['ui-sans-serif','Inter','system-ui'] },
      borderRadius: { '2xl':'1.25rem' },
      boxShadow: { soft:"0 10px 30px rgba(0,0,0,0.10)" }
    }
  },
  plugins: [],
};
export default config;