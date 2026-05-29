/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        gray: {
          300: '#D1D5DB',
          500: '#6B7280',
        }
      }
    },
  },
  plugins: [],
}
