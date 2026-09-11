// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/fonts', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  // Color mode configuration
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  // Cloudflare Workers deployment
  nitro: {
    preset: 'cloudflare-pages',
  },

  // Global CSS
  css: ['~/assets/css/main.css'],

  // Self-hosted fonts via the Bunny provider (no Google requests)
  fonts: {
    provider: 'bunny',
    families: [
      { name: 'Spectral', weights: [400, 500, 600, 700], styles: ['normal', 'italic'] },
      { name: 'IBM Plex Mono', weights: [400, 500] },
    ],
  },

  // App configuration
  app: {
    head: {
      title: 'Jonathan Pichot',
      meta: [
        { name: 'description', content: 'Personal website of Jonathan Pichot - urbanist, technologist, and endlessly curious person.' },
        { name: 'theme-color', content: '#f6f3ee', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#15130e', media: '(prefers-color-scheme: dark)' },
      ],
    },
  },
})
