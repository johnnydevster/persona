module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        200: "2",
      },
    },
  },
  variants: {
    extend: {
      fontSize: ["hover", "focus"],
      textColor: ["hover"],
    },
  },
  plugins: [],
};
