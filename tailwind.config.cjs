const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--off-white)",
        primary: "var(--color-primary)",
      },
    },
    screens: {
      xs: { max: "895px" },
      ...defaultTheme.screens,
    },
    plugins: [],
  },
};
