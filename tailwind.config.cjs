/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': "rgba(3, 29, 32, 1)",
        'secondary-color': "#ccc" 
      }
    },
  },
  plugins: [],
}
