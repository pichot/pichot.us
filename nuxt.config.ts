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

  // App configuration
  app: {
    head: {
      title: 'Jonathan Pichot',
      meta: [
        { name: 'description', content: 'Personal website of Jonathan Pichot - urbanist, technologist, and endlessly curious person.' },
      ],
    },
  },
})