/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkmode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1380px",
      },
    },
  },
  plugins: [],
};
