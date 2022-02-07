/* eslint-disable no-undef */
// const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{hbs, html}'],

  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
