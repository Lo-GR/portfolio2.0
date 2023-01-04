/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      "dark": {
        500: '#252422',
        400: '#403D39',
      },
      "light": {
        500: '#FFFCF2',
      },
      "highlight": '#EB5E28'
    },
    extend: {},
  },
  plugins: [],
}
