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
        // All colors are CSS custom properties so light/dark mode swap in
        // one place (main.css) and utilities work in both modes.
        canvas: 'var(--color-canvas)',
        surface: 'var(--color-surface)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        subtle: 'var(--color-subtle)',
        edge: {
          DEFAULT: 'var(--color-edge)',
          strong: 'var(--color-edge-strong)',
        },
        figure: {
          DEFAULT: 'var(--color-figure)',
          hover: 'var(--color-figure-hover)',
        },
      },
      fontFamily: {
        serif: ['Spectral', 'Georgia', 'Times New Roman', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
    },
  },
} satisfies Config
