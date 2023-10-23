import { defineNuxtConfig } from "nuxt";
import svgLoader from "vite-svg-loader";
import graphql from "@rollup/plugin-graphql";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: [
      "@apollo/client",
      "ts-invariant/process",
      "graphql",
      "@vue/apollo-composable",
      "@pinia/nuxt",
      "@heroicons/vue",
    ],
  },

  ssr: true,

  buildModules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],

  vite: {
    plugins: [graphql(), svgLoader({})],
  },

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    xRapidEndpoint: "",
    xRapidApiKey: "",
    xRapidApiHost: "",
    adminEmail: "",
    public: {
      apiEndpoint: "",
      accessToken: "",
    },
  },
});
