module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#18ffb2",
        secondary: "#999",
        sub0bg: "#111111",
      },
      fontFamily: {
        body: ['Poppins', 'Helvetica', 'Arial']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
 