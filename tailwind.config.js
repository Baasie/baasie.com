module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Lineto Circular Pro"', '"Helvetica"', '"Arial"', 'sans-serif'],
      sans: ['"Lineto Circular Pro"', '"Helvetica"', '"Arial"', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'one': "url('./../images/background.png')",
      }),
      colors: {
        primary: "#e1c495"
      },
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require('tailwindcss-textshadow'),
  ],
}
