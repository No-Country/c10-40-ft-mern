/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        xxl: '0 0 0 1000px rgba(0,0,0,0.3)'
      },
      backgroundImage: {
        hero: "url('https://hips.hearstapps.com/hmg-prod/images/young-strong-sweaty-focused-fit-muscular-man-with-royalty-free-image-1594652842.jpg?resize=1200:*')"
      }
    }
  },
  plugins: []
}
