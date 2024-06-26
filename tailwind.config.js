/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        major: ["Major Mono Display", "monospace"],
        staatliches: ["Staatliches", 'sans-serif'],
        urbanist: ["Urbanist", 'sans-serif']
      },
      height: {
        section: "80vh"
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

