/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Existing theme */
        peach: "#FFB703",
        lilac: "#C4B5FD",
        mint: "#A7F3D0",
        canvas: "#FFF7ED",
        textPrimary: "#374151",

        /* Centralized brand colors */
        brandLight: "#E1A7E1",
        brandMid: "#96A3CE",
        brandDark: "#646E91",
      },
    },
  },
  plugins: [],
};
