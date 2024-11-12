/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1E1F6F',
        'skyblue': '#CCE4FF',
      },
      borderRadius: {
        '5xl': '3rem', // Adjust the value as needed
      },
    },
  },
  plugins: [],
}