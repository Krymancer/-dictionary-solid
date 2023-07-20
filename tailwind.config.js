/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
      colors: {
        gray: {
          900: '#050505',
          700: '#1F1F1F',
          600: '#2D2D2D',
          500: '#3A3A3A',
          400: '#757575',
          300: '#E9E9E9',
          200: '#F4F4F4',
        },
        purple: '#A445ED',
        red: '#FF5252',
        white: '#FFFFFF',
        transparent: 'rgba(0,0,0,0)'
      },
      fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Lora', 'serif'],
      mono: ['Inconsolata', 'monospace'],
    },
    fontSize: {
      sm: ['14px', '17px'],
      base: ['18px', '24px'],
      lg: ['20px', '24px'],
      xl: ['24px', '29px'],
      '2xl' : ['64px', '77px'],
    }
  },
  plugins: [],
}

