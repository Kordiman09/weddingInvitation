/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'wedding':{
        white: "#FFFFFF",
        darkBrown: "#544D31",
        lightBrown: "#887A60",
        darkGreen: "#7A7E5D",
        lightGreen: "#A3A194",
        light: "#C1C5C4",
      }
    },
    extend: {
      fontFamily:{
        parisienne:['Parisienne'],
        andada:['Andada Pro'],
      },
    },
  },
  plugins: [],
}

