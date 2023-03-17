

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "hsl(230, 17%, 14%)",
        "Blue-card-bg": "hsl(228, 28%, 20%)",
        "Blue-top-bg": "hsl(232, 19%, 15%)",
        "Blue-text" : "hsl(228, 34%, 66%)",
        "Ken" : "hsl(0, 0%, 100%)",
        "Pale-top-bg": "hsl(225, 100%, 98%)",
        "Pale-card-bg" : "hsl(227, 47%, 96%)",
        "Dark-text" : "hsl(228, 12%, 44%)",
        "Black-text" : "hsl(230, 17%, 14%)",
      },
      fontFamily: {
        Inter : ["Inter", "cursive"],

      },
    },
    
  },
  plugins: [],
}