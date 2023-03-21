// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  // Allow switching of color mode between dark/black
  colorMode: {
    classSuffix: ""
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
