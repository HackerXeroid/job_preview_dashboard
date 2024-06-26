/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC4A2D",
        gray: "#E7E7E7",
        grayLight: "#B0B0B0",
        grayText: "#888888",
        graySeparator: "#D1D1D1",
        greenStatus: "#17B26A",
        grayBorderStatus: "#ABEFC6",
      },
      spacing: {
        25: "6.25rem",
        18: "4.5rem",
        19: "4.75rem",
        0.25: "0.0625rem",
        0.75: "0.1875rem",
        1.5: "0.375rem",
        2.5: "0.625rem",
        4.5: "1.125rem",
        6.5: "1.625rem",
        14.5: "3.625rem",
        46: "11.5rem",
        105: "26.25rem",
      },
    },
  },
  plugins: [],
};
