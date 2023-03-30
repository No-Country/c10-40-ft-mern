/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        xxl: '0 0 0 1000px rgba(0,0,0,0.3)'
      },
      backgroundImage: {
        hero: "url('https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }
    }
  },
  plugins: []
}
