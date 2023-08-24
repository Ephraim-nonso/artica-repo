/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" ,
    "./Components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: { 
      backgroundImage:{
        'cat': 'url(./Components/Image/Rectangle 34.png)'
      }

    },
  },
  plugins: [],
}

