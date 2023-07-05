/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '375px',
      'lg': '425px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1440px',
      '4xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
