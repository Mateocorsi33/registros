/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        bebasneue: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        primary: {
          1: "#17452B",
        },
        secondary: {
          1: "#E4C853",
          2: "#434438",
          3: "#F58220", // botones
          4: "#f4780d", // botones-hover
        },
      },
    },
  },
  darkMode: "class",
});
