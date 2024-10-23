/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
     "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "background-2": "#F7F8FA",
        "border": "#F0F2F5"
      }
    },
  },
  plugins: [],
}