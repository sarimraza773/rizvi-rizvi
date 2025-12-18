/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
        ],
        serif: [
          'ui-serif',
          'Georgia',
          'Times New Roman',
          'Times',
        ],
      },
      colors: {
        ink: {
          950: '#05070b',
          900: '#0b1020',
          800: '#111b33',
          700: '#1a2646',
          200: '#c9d2ea',
          100: '#e8ecf7',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.25)',
      },
      letterSpacing: {
        tightish: '-0.02em',
      },
    },
  },
  plugins: [],
};
