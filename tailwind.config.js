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
        'one': "url('./../images/background1.png')",
      })
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
}
