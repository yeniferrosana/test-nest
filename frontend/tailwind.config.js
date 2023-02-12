/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#353531",
        "primary-color-100": "#60D394",
        "primary-color-200": "#FFC759",
        "secondary-color": "#EDF7F6",
        "secondary-color-100": "#CFDBD5",
      },
    },
  },
  plugins: [],
};
