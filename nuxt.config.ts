// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    nitro: {
        //plugins: ['~/server/index.ts'],
    },
    runtimeConfig: {
        mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/friends-best',
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
    colorMode: {
        preference: 'system'
    },
    app: {
        head: {
            title: 'Vanner Basta',
            meta: [
                {name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#1E293B"}
            ]
        }
    }
})