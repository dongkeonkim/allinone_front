/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        KB: ['KB', 'sans-serif'],
        KEB: ['KEB', 'sans-serif'],
        KR: ['KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
