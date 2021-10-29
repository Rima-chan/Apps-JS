module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'body-pattern': "url('/images/bg-wood.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
