/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        segoe: ["Segoe UI"],
      },
      colors: {
        darkBlue: "#05445E",
        fancyBlue: "#209AB4",
        yellow: "#FFCC29",
        lightGreen: "#42FF74",
        lightBlue: "#D4F1F4",
        fancyYellow: "#FEB421",
        beige: "#FFCC29",
      },
    },
  },
  plugins: [],
};
