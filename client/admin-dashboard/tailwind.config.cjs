/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      primary: "#f5f5f5",
      dark:"#111"
    },
      fontFamily:{
        Roboto:['Roboto']
      }
    },
  },
  plugins: [],
}