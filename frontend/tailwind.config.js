/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#60D394",
          50: "#353531",
          100: "#FFC759", 
          150: "#FFC759bf", 
          200: "#EDF7F6", 
          250: "#96BBA5",
          300: "#CFDBD5",
          350: "#1546294d"
        },
      },
    },
  },
  plugins: [],
};
