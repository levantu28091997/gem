/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'dark': 'inset 0px 4px 15px rgba(0, 0, 0, 0.15)',
        'light': 'inset 0px 4px 15px rgba(116, 110, 196, 0.15)',
      },
      backgroundImage: {
        'dark': 'linear-gradient(180deg, #C91C5B -184.03%, #C91C5B -183.99%, rgba(201, 28, 91, 0) 143.05%)',
        'light': 'linear-gradient(180deg, #901848 -101.64%, #36132B 100%)',
      }
    },
  },
  plugins: [],
};
