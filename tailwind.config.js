import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: {
        DEFAULT: "#0054e9",
        rgb: "rgb(0,84,233)",
        contrast: "#ffffff",
        "contrast-rgb": "rgb(255,255,255)",
        shade: "#004acd",
        tint: "#1a65eb",
      },
    },
    extend: {},
  },
  plugins: [],
};
