const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    "./*.html",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        cyan: colors.cyan,
        lime: colors.lime,
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}