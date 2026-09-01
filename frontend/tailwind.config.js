/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Birana palette — parchment, deep Ethiopian green, warm gold
        parchment: "#FBF6EC",
        cream: "#F4EADB",
        ink: "#211C18",
        brand: { DEFAULT: "#1E5140", dark: "#153B2E", light: "#2E6B55" },
        gold: { DEFAULT: "#C08A2C", soft: "#E7C878", dark: "#9C6E1E" },
        muted: "#7A6F63",
        line: "#E7DCC9",
        // legacy tokens kept so existing pages (cart, checkout, login) don't break
        primary: "#C08A2C",
        secondary: "#1E5140",
        blackBg: "#F4EADB",
        favCol: "#FF5841",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        primary: ["Inter", "system-ui", "sans-serif"],
        secondary: ["Inter", "system-ui", "sans-serif"],
        ethiopic: ['"Noto Serif Ethiopic"', "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(33,28,24,0.05), 0 10px 30px rgba(33,28,24,0.07)",
        lift: "0 16px 40px rgba(33,28,24,0.14)",
      },
      maxWidth: {
        shell: "1200px",
      },
    },
  },
  plugins: [],
};
