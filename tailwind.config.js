/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),],
  darkMode: 'class',
}
