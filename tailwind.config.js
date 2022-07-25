/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      signature: ['Allura'],
    },
    screens: {
      '2xl': '1536px',
      xl: '1280px',
      lx: { max: '1200px' },
      lg: '1024px',

      dm: { max: '768px' },
      md: '768px',
      sm: '640px',
    },
  },
  plugins: [],
};
