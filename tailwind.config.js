/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3CB3AB',
        primarydark: '#147A73',
        dark: '#2F2F2F',
        gray: {
          0: '#707070',
          1: '#7A7A7A',
          2: '#979797',
          3: '#B1B1B1',
          4: '#2F2F2F',
          42: 'rgba(47, 47, 47, 0.05)',
          DEFAULT: '#6F6F6F'
        },
      },

      fontSize: {
        13: ['13px', { lineHeight: '16px' }],
      },
      fontFamily: {
        commissioner: ['Commissioner']
      },
    },
  },
  plugins: [],
}