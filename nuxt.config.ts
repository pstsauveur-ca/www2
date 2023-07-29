import { resolve } from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {},
  $development: {},
  content: {
    // api: {
    //   baseURL: '/api/_data',
    // },
    sources: {
      content: {
        driver: 'fs',
        base: resolve(__dirname, 'data'),
      },
    },
  },
  devtools: {
    enabled: false,
  },
  modules: [
    '@nuxt/content',
  ],
  nitro: {

  },
  postcss: {},
  runtimeConfig: {
    public: {},
  },
  vite: {
    build: {
      rollupOptions: {
        treeshake: false,
      },
    },
  },
  webpack: {},
});
