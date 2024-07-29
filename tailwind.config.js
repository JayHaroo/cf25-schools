const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '360px',
      // => @media (min-width: 576px) { ... }

      'md': '700px',
      // => @media (min-width: 960px) { ... }

      'lg': '900px',
      // => @media (min-width: 960px) { ... }
    },
  },
  plugins: [],
});