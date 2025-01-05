/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0054e9",
      "primary-rgb": "rgb(0,84,233)",
      "primary-contrast": "#ffffff",
      "primary-contrast-rgb": "rgb(255,255,255)",
      "primary-shade": "#004acd",
      "primary-tint": "#1a65eb",
    },
    extend: {},
  },
  plugins: [],
};
