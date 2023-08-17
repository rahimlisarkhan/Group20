/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "102px",
      },
      fontFamily: {
        mono: "Popins",
      },
    },
  },
  plugins: [],
};
