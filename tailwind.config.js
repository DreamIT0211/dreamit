/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textStroke: {
        black: "1.5px black",
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke-black": {
          "-webkit-text-stroke": "1.5px black",
          "text-stroke": "1.5px black",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
});
