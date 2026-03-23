import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fdf8f4',
        'cream-mid': '#f0e8df',
        'cream-dark': '#e5d8cc',
        purple: {
          DEFAULT: '#6d75e3',
          dark: '#5560d4',
          light: '#eef0fd',
        },
      },
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
