/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAF7F2',
        ink: '#1A1A1A',
        forest: '#2A3A2E',
        'forest-deep': '#1d2a21',
        wood: '#A87B5D',
        cream: '#EFE8DC',
        stone: '#6B6258',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
