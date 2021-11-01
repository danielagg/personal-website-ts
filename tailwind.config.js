module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.gray.700"),
              fontFamily: ["Heebo", "sans-serif"],
            },
            h2: {
              color: theme("colors.gray.700"),
              fontFamily: ["Heebo", "sans-serif"],
            },
            p: {
              color: theme("colors.gray.700"),
              fontFamily: ["Heebo", "sans-serif"],
            },
          },
        },
        lg: {
          css: {
            li: {
              padding: 0,
              margin: 0,
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
