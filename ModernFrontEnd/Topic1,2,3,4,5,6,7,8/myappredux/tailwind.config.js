/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js.ts.jsx.tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./shared/**/*.{js,ts,jsx,tsx}",
    // "./feature/**/*.{js,ts,jsx,tsx}",
    // "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple_ai: {
        200: "#8782ee",
        500: "#5333ed",
        600: "#b380ff",
      },
    },

    fontSize: {
      "6xl": "3rem", //48px
    },
    // borderRadius: {
    //   "4xl": "2rem", //36px
    // },
    // extend,
  },
  // plugins: [require("@tailwindcss/forms")],
};
