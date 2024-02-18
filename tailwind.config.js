/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    animation: {
      'faderight': 'right 0.5s ease forwards'
    },
    extend: {
      keyframes: {
        'right': {
          '0%': {
            opacity: '0',
            left: '60%'
          },
          '100%': {
            opacity: '1',
            left: '0'
          },
        }
      },
      top: {
        '40p': '40%'
      },
      transitionDuration: {
        '0.4s': '0.4s'
      },
      screens: {
        'sm': {
          'max': '767px'
        }
      }
    },
  },
  plugins: [],
};
