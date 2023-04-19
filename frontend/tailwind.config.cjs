/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Barlow: ['Barlow Condensed', 'sans-serif'],
      WS: ['Work Sans', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          50: '#F5FDFC',
          100: '#EBFAF8',
          200: '#CDF3EE',
          300: '#AEECE3',
          400: '#72DECF',
          500: '#35D0BA',
          600: '#30BBA7',
          700: '#207D70',
          800: '#185E54',
          900: '#103E38',
          bg: '#121418'
        },
        secondary: {
          50: '#FDF5F6',
          100: '#FAEBED',
          200: '#F3CDD2',
          300: '#ECAEB7',
          400: '#DE7281',
          500: '#D0354B',
          600: '#BB3044',
          700: '#7D202D',
          800: '#5E1822',
          900: '#3E1017'
        }
      },
      backgroundImage: {
        hero: "url('https://hips.hearstapps.com/hmg-prod/images/young-strong-sweaty-focused-fit-muscular-man-with-royalty-free-image-1594652842.jpg?resize=1200:*')"
      }
    }
  },
  plugins: []
}
