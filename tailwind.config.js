/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.orange,
      },
      animation: {
        slide_down: 'slide_down 0.44s ease-in-out',
        slide_in_right: 'slide_in_right 0.25s ease-in-out',
        slide_in_left: 'slide_in_left 0.25s ease-in-out',
        rotateIn: 'rotateIn 0.25s ease-in-out',
        zoom_out: 'zoom_out 0.25s ease-in-out',
      },
      keyframes: {
        zoom_out: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        
        },
        slide_down: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(0deg)' }, 
          '100%': { transform: 'rotate(-180deg)' },
        },
        slide_in_right: {
          '0%': { transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(0)' },
        },
        slide_in_left: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}


