/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        darkGray: 'hsl(0, 0%, 48%)',
        moderateCyan: 'hsl(176, 50%, 47%)',
        darkCyan: 'hsl(176, 72%, 28%)',
        body: 'hsla(0, 0%, 98%, 1)',
        gray: {
          0: 'hsl(0, 0%, 44%)',
          1: 'hsl(0, 0%, 48%)',
          2: 'hsla(0, 0%, 18%, 0.05)',
          3: 'hsla(0, 0%, 18%, 1)',
          4: 'hsl(0, 0%, 69%)',
          5: '#2F2F2F',
          42: 'rgba(47, 47, 47, 0.05)',
          DEFAULT: '#6F6F6F'
        },
      },
    },
    fontFamily: {
      commissioner: ['Commissioner']
    },
  },
  plugins: [],
}