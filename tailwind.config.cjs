/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Jura', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'hero-pattern': "url('http://placekitten.com/300')",
    },}
  },
  plugins: [],
}
