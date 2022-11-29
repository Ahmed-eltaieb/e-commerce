// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#333333",
        lighted: "#f6f6f6",
        darked: "#e5e5e5",
        footer: "#262639",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
