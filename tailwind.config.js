/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
    },
    
    extend: {
      colors: {
        'sec': "#4B4F58",
        "fill": '#848296'
      },
    },
  },
  plugins: [],
}