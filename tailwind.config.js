const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      body: ['Lato', 'Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.indigo[700],
        'primary-hover': colors.indigo[500],
        secondary: colors.pink[500],
        cta: colors.teal[500],
        'cta-hover': colors.teal[400],
      },
    },
  },
  variants: {},
  plugins: [],
}
