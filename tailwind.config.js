/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        // primary: '#8b5cf6',
        primary: '#ec4899',
        secondary: '#f9a8d4',
        dark: '#111827',
        light: '#4b5563',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

