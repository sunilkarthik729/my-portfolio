/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable dark mode via class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomOut: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '50%': { transform: 'scale(1.2)', opacity: '0.3' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
         unzip: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        zoomOut: 'zoomOut 2s ease-in-out infinite',
        unzip: 'unzip 0.5s forwards',
      },
    },
  },
  plugins: [],
};
