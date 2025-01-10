import tokens from "design-tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/ui/dist/**/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: tokens.colors.black,
      white: tokens.colors.white,
      primary: tokens.colors.primary,
      secondary: tokens.colors.secondary,
    },
    extend: {},
  },
  plugins: [],
};
