/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // enable dark mode via class strategy
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",
        "background-light": "#F9F9F9",

        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
        "background-dark": "#202040",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [],
};
