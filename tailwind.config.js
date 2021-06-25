module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Lineto Circular Pro"', '"Helvetica"', '"Arial"', 'sans-serif'],
      sans: ['"Lineto Circular Pro"', '"Helvetica"', '"Arial"', 'sans-serif'],
    },
    extend: {
      typography: (theme) => ({
        sm: {
          css: {
            h1: {
              fontSize: theme('text-base')
            },
            h2: {
              fontSize: theme('text-sm')
            },
            h3: {
              fontSize: theme('text-xs')
            },
          },
        },
        md: {
          css: {
            h1: {
              fontSize: theme('text-lg')
            },
            h2: {
              fontSize: theme('text-base')
            },
            h3: {
              fontSize: theme('text-sm')
            },
          },
        },
        lg: {
          css: {
            h1: {
              fontSize: theme('text-2xl')
            },
            h2: {
              fontSize: theme('text-xl')
            },
            h3: {
              fontSize: theme('text-lg')
            },
          },
        },
        xl: {
          css: {
            h1: {
              fontSize: theme('text-3xl')
            },
            h2: {
              fontSize: theme('text-2xl')
            },
            h3: {
              fontSize: theme('text-xl')
            },
          },
        },
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
