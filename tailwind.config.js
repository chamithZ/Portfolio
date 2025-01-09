/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        rotateGlow: {
          '0%': { transform: 'rotate(0deg)', boxShadow: '0 0 20px 5px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 40px 10px rgba(59, 130, 246, 0.7)' },
          '100%': { transform: 'rotate(360deg)', boxShadow: '0 0 20px 5px rgba(59, 130, 246, 0.5)' },
        },
      },
      animation: {
        'blue-glow': 'rotateGlow 3s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}



