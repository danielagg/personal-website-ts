module.exports = {
  theme: {
    fontFamily: {
      display: ['"Farro"', "Helvetica", "Arial", "sans-serif"],
      body: ['"Farro"', "Helvetica", "Arial", "sans-serif"],
      robotoMono: ['"Roboto Mono"', "Helvetica", "Arial", "sans-serif"]
    },
    container: {
      center: true,
      sizes: {}
    },
    extend: {
      colors: {
        primary: {
          default: "#6D69DB"
        },
        gray: {
          lighter: "#dedede",
          default: "#707070",
          dark: "#3b3b3b"
        }
      },
      margin: {
        "18": "4.5rem",
        "-18": "-4.5rem"
      },
      padding: {
        "18": "4.5rem",
        "-18": "-4.5rem"
      }
    }
  },
  variants: {},
  plugins: []
};
