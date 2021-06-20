module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "blue-500": "#090E39",
      "purple-500": "#100015",
      purple: "#CE1068",
      "purple-200": "#F830F8",
      white: "#FFF",
      gray: "#BFBFBF",
      "gray-500": "#636363",
      indigo: "#2E2A54",
      "indigo-200": "#6B79A7",
      transparent: "transparent",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
