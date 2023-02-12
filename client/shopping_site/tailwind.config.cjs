/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      primary: "#f5f5f5",
      secondary:"#d3d0cf",
      dark:"#111"
    },
      fontFamily:{
        Roboto:['Roboto'],
        Anton:['Anton']
      }
    },
  },
  plugins: [],
}