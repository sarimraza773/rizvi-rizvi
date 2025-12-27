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

        navy: {
          900: '#041E42',
          800: '#0A2342',
          700: '#102A4C',
        },
        maroon: {
          900: '#4A0E13',
          800: '#561210',
          700: '#6B1A24',
        },
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
