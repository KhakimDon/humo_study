/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue": "#1697FA",
        "gray": "#1F1F1F",
        "green": "#22EDC4",
        "mont": "'Montserrat', sans-serif"
      }
    },
  },
  plugins: [],
}

