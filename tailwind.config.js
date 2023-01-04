/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      darkPrimary: '#252422',
      darkSecondary: '#403D39',
      textPrimary: '#FFFCF2',
      highlight: '#EB5E28'
    },
    extend: {},
  },
  plugins: [],
}
