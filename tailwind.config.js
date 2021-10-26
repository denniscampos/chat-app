module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
    colors: {
      bgOne: "var(--background-primary)",
      bgTwo: "var(--background-secondary)",
      colorOne: "var(--color-primary)",
      colorTwo: "var(--color-secondary)",
      colorThree: "var(--color-tertiary)",
      colorFour: "var(--color-quatenary)",
      colorFive: "var(--color-quinary)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
