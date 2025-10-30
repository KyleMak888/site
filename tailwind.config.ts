import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 品牌主色 - 从原 Vue 项目继承的青绿色
        primary: {
          DEFAULT: '#18BC9C',
          50: '#E8F9F5',
          100: '#C3F0E6',
          200: '#9EE7D7',
          300: '#79DEC8',
          400: '#54D5B9',
          500: '#18BC9C',
          600: '#14A588',
          700: '#108E74',
          800: '#0C7760',
          900: '#08604C',
        },
        // 辅助色
        secondary: {
          DEFAULT: '#2C3E50',
          50: '#EFF1F3',
          100: '#D6DDE3',
          200: '#BDC9D3',
          300: '#A4B5C3',
          400: '#8BA1B3',
          500: '#728DA3',
          600: '#5A7993',
          700: '#496379',
          800: '#374D5F',
          900: '#2C3E50',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sans-sc)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-inter)', 'var(--font-noto-sans-sc)', 'system-ui', 'sans-serif'],
        chinese: ['var(--font-noto-sans-sc)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
