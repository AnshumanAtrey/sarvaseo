/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'geist': ['Geist', 'sans-serif'],
        'instrument-serif': ['Instrument Serif', 'serif'],
      },
      colors: {
        yellow: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        gold: {
          50: '#fefdf8',
          100: '#fdf8e8',
          200: '#faefc5',
          300: '#f5e29e',
          400: '#edd06b',
          500: '#d4a843',
          600: '#b8892e',
          700: '#9a6e24',
          800: '#7d5620',
          900: '#66441c',
        }
      }
    },
  },
  plugins: [],
}