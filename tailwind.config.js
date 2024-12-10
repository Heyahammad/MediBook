/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#68BBE3",
        offwhite: "#FFF6E9",
        yellow: "#FFF100"
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill,minmax(200px,1fr))",
      },
    },
    keyframes: {
      neon: {
        '0%, 100%': {
          color: 'white',
          textShadow: '0 0 5px #fff, 0 0 10px #ff0, 0 0 20px #ff0, 0 0 30px #ff0, 0 0 40px #ff0',
        },
        '50%': {
          color: '#ff0',
          textShadow: '0 0 2px #ff0, 0 0 4px #ff0, 0 0 10px #ff0, 0 0 15px #ff0, 0 0 25px #ff0',
        },
      },
    },
    animation: {
      neon: 'neon 1.5s infinite',
    },
  },
  plugins: [],
};
