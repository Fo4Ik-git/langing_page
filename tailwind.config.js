/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  content: ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#1D4ED8',
        black: '#1E1E1E',
        white: '#FEE9E7',
        white2: '#FFFFFF',
        red: '#F33B0D',
        orange: {
          100: '#F33B0B',
          200: '#F36B0C',
        },
        pink: {
          100: '#fff3ed',
          200: '#FFCBB1',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
