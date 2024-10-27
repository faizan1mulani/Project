/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-range': { 'min': '768px', 'max': '810px' },
      }
    },
  },
  plugins: [],
}

