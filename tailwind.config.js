/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4163E7",
        secondary: {
          DEFAULT: "#F49C56",
          100: "#FFF5ED",
          200: "#FFDDC1",
          300: "#814D25",
        },
        base: {
          black: "#272E38",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        areguler: ["Alliance-Regular", "sans-serif"],
        abold: ["Alliance-Bold", "sans-serif"],
        asb: ["Alliance-SemiBold", "sans-serif"],
        am: ["Alliance-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
