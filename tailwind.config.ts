import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0f',
        'dark-card': '#141419',
        'dark-border': '#1e1e26',
        'dark-surface': '#111116',
        purple: {
          DEFAULT: '#6d75e3',
          dark: '#5560d4',
          light: '#1a1b2e',
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
