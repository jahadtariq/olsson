/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,jsx}',
    './sections/**/*.{html,jsx}',
  ],
  theme: {
    colors: {
      'black': '#090909',
      'purple': '#5C43D2',
      'light' : '#B5B5B5'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {}
  },
  plugins: [],
}