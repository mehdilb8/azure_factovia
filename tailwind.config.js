
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './elements/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Lato', 'system-ui', 'sans-serif'],
      sans: ['Lato', 'system-ui', 'sans-serif'],
      display: ['Lato', 'system-ui', 'sans-serif'],
      body: ['Lato', 'system-ui', 'sans-serif']
    },
    extend: {
      colors: {
        facebook: '#3b5999',
        linkedin: '#0077B5',
        twitter: '#55acee',
        pinterest: '#bd081c',
        primaryLight: '#BF40BF',
        primary: '#742774',
        primaryDark: '#3C3C41',
        primaryGray: '#75757A',
        primaryWhite: '#EBEBEB',
        primaryYellow: '#F2C810',
        primaryBlue: '#0077FF',
        secondary: "#44AA47",
        secondaryLight: "#64A866"
      },
      height: {
        'screen-10': '10vh',
        'screen-20': '20vh',
        'screen-30': '30vh',
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh'
      },
      minHeight: {
        'screen-10': '10vh',
        'screen-20': '20vh',
        'screen-30': '30vh',
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh'
      }
    }
  },
  variants: {

  },
  plugins: [],
}
