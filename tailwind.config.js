/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'body': ['Poppins'],
        'title': ['Rajdhani'],
        'heading': ['Druk Wide Web']
      },
      colors: {
        'primary': '#651e38'
      }
    },
  },
  plugins: [],
}
