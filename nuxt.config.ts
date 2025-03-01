import { resolve } from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {},
  $development: {
    vite: {
      optimizeDeps: {
        noDiscovery: true,
        include: []
      },
      server: {
        hmr: false
      },
      warmupEntry: false,
      build: {
        minify: false,
        cssMinify: false,
        cssCodeSplit: false,
        modulePreload: false,
        rollupOptions: {
          treeshake: false,
        },
      },
    },
  },
  // content: {
  //   // api: {
  //   //   baseURL: '/api/_data',
  //   // },
  //   sources: {
  //     content: {
  //       driver: 'fs',
  //       base: resolve(__dirname, 'data'),
  //     },
  //   },
  // },
  devtools: {
    enabled: false,
  },
  // modules: ['@nuxt/content'],
  nitro: {

  },
  postcss: {},
  runtimeConfig: {
    public: {},
  },
  webpack: {},
});