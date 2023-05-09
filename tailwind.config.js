/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#1e1e1e',
      },
    },
  },
  plugins: [],
}

