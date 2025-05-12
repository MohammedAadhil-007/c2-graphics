/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        licorice: ['"Licorice"', ...defaultTheme.fontFamily.sans],
        lora: ['"Lora"', ...defaultTheme.fontFamily.sans],
        stylish: ['"Stylish"', ...defaultTheme.fontFamily.sans],
        lilita: ['"Lilita"', ...defaultTheme.fontFamily.sans],
        outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
