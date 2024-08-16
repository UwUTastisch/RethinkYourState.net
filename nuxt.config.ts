// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss"
  ],
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  content: {
    markdown: {
      // Object syntax can be used to override default options
      remarkPlugins: ["remark-math", "remark-emoji", "remark-parse"],
      rehypePlugins: ["rehype-mathjax" /*"rehype-stringify"*/],
    },
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "laserwave",
        // Theme used if `html.dark`
        dark: "laserwave",
        // Theme used if `html.sepia`
        sepia: "monokai",
      },
      langs: [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "shell",
        "mdc",
        "md",
        "yaml",
      ],
    },
  },
  css: [
    // CSS file in the project
    "@/assets/css/tailwind.css",
  ],
  ssr: true,
  icon: {
    provider: 'iconify'
  },
});