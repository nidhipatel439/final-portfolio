/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "800px",
        // => @media (min-width: 576px) { ... }
        md: "900px",
      },
      fontFamily: {
        sans: ["Jura", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "timesheet-tracker": "url('/src/assets/project/timesheet-tracker.png')",
        weather: "url('/src/assets/project/weather.gif')",
        makethingsup: "url('/src/assets/project/makethingsup.png')",
        portfolio: "url('/src/assets/project/portfolio.png')",
        chatroom: "url('/src/assets/project/chatroom.png')",
      },
    },
  },
  plugins: [],
};
