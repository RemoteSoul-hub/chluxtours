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
      backgroundImage: {
        banner: 'url("/images/banner.png")'
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'p': ['1rem', { lineHeight: '1.5', letterSpacing: 'normal' }],
      },
      screens: {
        // Custom breakpoints 
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
