/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
      },
      colors: {
        beige: '#F4ECD8',
        dark: '#1a1a1a',
      }
    },
  },
  plugins: [],
}
