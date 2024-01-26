/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "my-Columns": ".9fr 1.1fr",
      },
    },
  },
  plugins: [],
};
