/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '800px',
        // => @media (min-width: 576px) { ... }
        'md' : '900px'
      },
      fontFamily: {
        'sans': ['Jura', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'hero-pattern': "url('https://apod.nasa.gov/apod/image/2202/AuroraPillars_Correia_4898.jpg')",
    },}
  },
  plugins: [],
}
