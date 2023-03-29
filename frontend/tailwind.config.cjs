/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        xxl: '0 0 0 1000px rgba(0,0,0,0.3)'
      }
    }
  },
  plugins: []
}
