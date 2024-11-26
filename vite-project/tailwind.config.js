const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust based on your project structure
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans], // Set Poppins as a custom font
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #FBD0DE 0px, #FFFFFF 236px, #FFFFFF 100%)',
      }
    },
  },
  plugins: [],
};
