/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        dimBlack:"rgba(0,0,0,0.7)",
        dimWhite:"rgba(255,255,255,0.7)",
        neonBlue : "rgba(30,175,237)",
        neonPink : "rgba(234,22,142)",
      }
    },
  },
  plugins: [],
}