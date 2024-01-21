/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        display: ["Etrusco-italic", ...defaultTheme.fontFamily.sans],
        body: ["Etrusco-black", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        /* primary: {
            // Turquoise
            coderight: {
              lighter: '#91E7E7',
              DEFAULT: '#0CCCCC',
              darker: '#2EA1A4'
            }
          }, */
        primary: {
          punchPeach: {
            lighter: "#ffcfcc",
            DEFAULT: "#ffa299",
          },
          punchGrey: {
            DEFAULT: "#ebebeb",
            darker: "#232323",
          },
          punchYellow: {
            DEFAULT: "#f9d56e",
          },
        },
      },
    },
  },
  plugins: [],
};
