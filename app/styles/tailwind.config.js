const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{hbs}'],

  theme: {
    extend: {
      colors: {
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
