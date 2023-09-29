/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "rgb(2, 6, 23)",
        "regal-blue1": "#111827",
      },
    },
  },
  plugins: ["/node_modules/aspectratio/index.js"],
};
