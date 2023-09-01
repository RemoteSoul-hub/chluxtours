/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e5b863',
        'secondary': '#8d5c25',
        'ternary': '#272727',
        'theme-white': '#f9f9f9',
      },
    },
  },
  plugins: [],
}
