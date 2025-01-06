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
        contrast: "#ffffff",
        shade: "#004acd",
        tint: "#1a65eb",
      },
      secondary: {
        DEFAULT: "#0163aa",
        contrast: "#ffffff",
        shade: "#015796",
        tint: "#1a73b3",
      },
    },
    extend: {},
  },
  plugins: [],
};
