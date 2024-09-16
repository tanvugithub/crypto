/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      //custom class
      fontSize: {
        "80": "80px"
      }

    },
  },
  plugins: [],
}