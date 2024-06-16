/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 12))' },
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        scroll: 'scroll 60s linear infinite'
      }
    },
  },
  plugins: [],
}

