export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'app',
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: ''
			},
			{
				name: 'format-detection',
				content: 'telephone=no'
			}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/node_modules/papercss/dist/paper.min.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,
	router: {
		base: '/',
		mode: 'hash'
	  },
	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],
	serverMiddleware: ['~/server-middleware/api.js'],
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		icon: {
			source: '@/static/icon.png'
		},
		manifest: {
			name: 'Экономический кликер',
			lang: 'ru',
			short_name: 'Кликер',
			description: 'Экономический симулятор. Покупай, продавай недвижимость и развивай свою империю',
			icons: [],
			start_url: '.',
			display: 'standalone',
			background_color: '#e6e7e9',

		},
		workbox: {
			importScripts: [
				'custom-sw.js'
			],
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		// https://github.com/primefaces/primevue/issues/844
		transpile: ['primevue'],
	}
}
