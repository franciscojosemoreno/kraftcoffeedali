import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kraft: {
          50:  '#EEF1FD',
          100: '#D5DCFA',
          200: '#A9B8F5',
          300: '#7592EF',
          400: '#4A6AE8',
          500: '#2B44C8',
          600: '#2035A8',
          700: '#162888',
          800: '#0F1C65',
          900: '#0A1245',
        },
        cream: {
          50:  '#FDFCFA',
          100: '#FAF8F4',
          200: '#F4F0E8',
          300: '#EBE5D8',
          400: '#DDD5C4',
        },
      },
      fontFamily: {
        sans:    ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif:   ['var(--font-cormorant)', 'Georgia', 'serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
