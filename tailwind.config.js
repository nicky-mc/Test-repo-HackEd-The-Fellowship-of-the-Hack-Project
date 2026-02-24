/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sbs-dark': '#064789',
        'sbs-mid': '#427AA1',
        'sbs-light': '#EBF2FA',
      },
      // THIS MAKES LEXEND THE DEFAULT FONT EVERYWHERE
      fontFamily: {
        sans: ['Lexend', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}