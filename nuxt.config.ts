import tailwindTypograhpy from "@tailwindcss/typography"

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
  tailwindcss: {
    config: {
      plugins: [tailwindTypograhpy],
    },
  },
  // https://content.nuxtjs.org/api/configuration
  content: {
   highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'nord',
      }
    }
  },
})
