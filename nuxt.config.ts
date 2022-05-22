import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
			title: 'Vänner Bästa | Friends Best',
			meta: [
				{
					property: 'og:image',
					content: 'https://www.vannerba.st/yr.jpg',
				},
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:site', content: '@Ludoviko_' },
				{
					name: 'twitter:creator',
					content: '@Ludoviko_',
				},
				{
					property: 'og:title',
					content: 'Vänner Bästa | Friends Best',
				},
				{
					property: 'og:description',
					content:
						'A Young Royals fan website with links to different discussion spaces.',
				},
				{ name: 'og:type', content: 'website' },
				{
					name: 'description',
					content:
						'A Young Royals fan website with links to different discussion spaces.',
				},
			],
		},
	},
	css: ['@/assets/styles/globals.scss'],
});
