import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ['@/assets/styles/globals.scss'],
	buildModules: ['@intlify/nuxt3'],
	intlify: {
		vueI18n: {
			availableLocales: ['en', 'eo'],
		}
	}
});
