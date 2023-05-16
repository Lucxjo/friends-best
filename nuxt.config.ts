// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    nitro: {
        //plugins: ['~/server/index.ts'],
    },
    runtimeConfig: {
        dbUri: process.env.DATABASE_URL || '',
        discordClientId: process.env.DISCORD_CID || '',
        discordClientSecret: process.env.DISCORD_CS || '',
        discordRedirectUri: process.env.DISCORD_REDIRECT_URI || 'http://localhost:3000/auth/v1/callback',
        discordGuildId: process.env.DISCORD_GUILD || '',
        discordAdminRoleId: process.env.DISCORD_ADMIN_ROLE || '',
        discordStaffRoleId: process.env.DISCORD_STAFF_ROLE || '',
        jwtSecret: process.env.JWT_SECRET || 'not_so_secret',
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