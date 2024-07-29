const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xsm': '300px',

      'sm': '360px',
  

      'md': '700px',


      'lg': '900px',

    },
  },
  plugins: [],
});