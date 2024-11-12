/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCE1A",
        secondary: "#0D0842",
        blackBg: "#F3F3F3",
        favCol: "#FF5841",
      },
      fontFamily: {
        primary: ["Roboto", "ROpen+Sans"],
        secondary: ["Nunito Sans", "san-serif"],
      },
    },
  },
  plugins: [],
};
