export default {
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Milon',
      meta: [
          { name: 'юрист', content: 'онлайн юрист' }
      ],
      link: [
      ]
    }
  },
  srcDir: "src/",
  css: ["@/assets/style/scss/index.scss"],
  devServerHandlers: [],
  plugins: ['~/plugins/element-plus.js'],
  publicRuntimeConfig: {
    $fetch: {
      browserBaseURL: process.env.VITE_API_DEV
    }
  },
  privateRuntimeConfig: {
    $fetch: {
      baseURL: process.env.VITE_API_PROD
    }
  },

  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
}
