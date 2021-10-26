module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
    colors: {
      backgroundPrimary: "var(--background-primary)",
      backgroundSecondary: "var(--background-secondary)",
      colorPrimary: "var(--color-primary)",
      colorSecondary: "var(--color-secondary)",
      textPrimary: "var(--text-primary)",
      textSecondary: "var(--text-secondary)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
