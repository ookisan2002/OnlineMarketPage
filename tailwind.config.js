/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: { max: "1133px" },
      lg: { min: "1133px", max: "1252px" },
      xl: { min: "1252px" },
    },
    extend: {},
  },
  plugins: [],
}