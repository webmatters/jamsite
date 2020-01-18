const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.gray[800],
        secondary: colors.gray[500],
        cta: colors.gray[500],
        'cta-hover': colors.gray[400],
      },
    },
  },
  variants: {},
  plugins: [],
}
