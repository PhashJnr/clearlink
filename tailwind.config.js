/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        InterRegular: ["Inter-Regular", "sans-serif"],
        InterMedium: ["Inter-Medium", "sans-serif"],
        InterSemiBold: ["Inter-SemiBold", "sans-serif"],
      },
      backgroundImage: {
        heroBg: "url('/src/assets/img/Hero Img.svg')",
      },
    },
  },
  plugins: [],
};
