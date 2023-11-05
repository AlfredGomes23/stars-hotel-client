/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        charis: 'Charis SIL',
        inter: 'Inter'
      }
    },
  },
  plugins: [require("daisyui")],
}