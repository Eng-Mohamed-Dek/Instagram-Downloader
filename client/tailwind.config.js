/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Orange': `#F58529`,
        'Purple': `#D9008E`
      }
    },
  },
  plugins: [],
}

