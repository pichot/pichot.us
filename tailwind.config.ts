import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts}',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        // Grays from Jekyll theme
        gray: {
          100: '#f9f9f9',
          200: '#e5e5e5',
          300: '#ccc',
          400: '#9a9a9a',
          500: '#767676',
          600: '#515151',
          700: '#313131',
          800: '#303030',
        },
        // Accent colors
        red: '#ac4142',
        orange: '#d28445',
        yellow: '#f4bf75',
        green: '#90a959',
        cyan: '#75b5aa',
        blue: {
          DEFAULT: '#268bd2',
          logo: '#0f5086',
        },
        pink: {
          logo: '#de2b5d',
        },
        brown: '#8f5536',
        code: '#bf616a',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        mono: [
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        logo: ['OpticianSans', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
        lg: '20px',
      },
      lineHeight: {
        normal: '1.5',
      },
      screens: {
        lg: '38em',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#515151',
            a: {
              color: '#268bd2',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            code: {
              color: '#bf616a',
            },
          },
        },
        dark: {
          css: {
            color: '#e5e5e5',
            a: {
              color: '#75b5aa',
            },
            h1: { color: '#f9f9f9' },
            h2: { color: '#f9f9f9' },
            h3: { color: '#f9f9f9' },
            h4: { color: '#f9f9f9' },
            strong: { color: '#f9f9f9' },
            code: { color: '#f4bf75' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config
