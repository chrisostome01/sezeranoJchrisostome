// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Sezerano Jean Chrysostome -  Full stack developer",
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: "/og.png",
        },
        {
          name: "description",
          content:
            "Hey there! 👋 I'm Sezerano Jean Chrysostome, a software enthusiast. I'm all about crafting innovative solutions, and I've got a special for rockets and space exploration.",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/motion/nuxt"],
});
``;
