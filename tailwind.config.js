/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#027ef8",
      },
      fontFamily: {
        monoton: ["Monoton"],
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};

