import type { VitePWAOptions } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'
// Plugins
import AutoImport from 'unplugin-auto-import/vite'
import Unfonts from 'unplugin-fonts/vite'
import Components from 'unplugin-vue-components/vite'
// Utilities
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

import { VitePWA } from 'vite-plugin-pwa'

import Layouts from 'vite-plugin-vue-layouts-next'

import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import VueRouter from 'vue-router/vite'

const pwaOptions: Partial<VitePWAOptions> = {
	base: '/',
	registerType: 'prompt',
	includeAssets: ['favicon.ico'],
	workbox: { cleanupOutdatedCaches: true },
	manifest: {
		display: 'standalone',
		name: 'adsbdb',
		description: 'Public api for aircraft, airlines, & flightroutes',
		short_name: 'adsbdb',
		theme_color: '#7488e5',
		background_color: '#121212',
		icons: [
			{
				src: 'img/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: 'img/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	},
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		VueRouter({
			dts: 'src/typed-router.d.ts',
		}),
		Layouts(),
		AutoImport({
			include: [
				/\.[tj]sx?$/,
				/\.vue$/,
				/\.vue\?vue/,
				/\.md$/,
			],
			imports: [
				'vue',
				'vue-router',
			],
			dts: 'src/auto-imports.d.ts',
			eslintrc: { enabled: true },
			dirs: ['src/store'],
			vueTemplate: false,
		}),

		Unfonts({
			custom: {
				families: [
					{
						name: 'Fira Mono',
						local: 'Fira Mono',
						src: './src/assets/fonts/*.woff2',
					},
				],
				display: 'auto',
				preload: true,
				injectTo: 'head-prepend',
			},

		}),

		Components({
			dts: 'src/components.d.ts',
		}),
		Vue({
			template: { transformAssetUrls },
		}),
		VitePWA(pwaOptions),
		Vuetify({
			autoImport: true,
			styles: {
				configFile: 'src/styles/settings.scss',
			},
		}),
		viteCompression({ algorithm: 'brotliCompress', filter: /\.(js|mjs|json|css)$/i }),
		viteCompression({ algorithm: 'gzip', filter: /\.(js|mjs|json|css)$/i }),
	],
	optimizeDeps: {
		exclude: [
			'vuetify',
			'vue-router',
			'unplugin-vue-router/runtime',
			'unplugin-vue-router/data-loaders',
			'unplugin-vue-router/data-loaders/basic',
		],
	},
	define: {
		'process.env': {},
		'import.meta.env.BUILD_DATE': Date.now(),
		'import.meta.env.VERSION': JSON.stringify(process.env.npm_package_version),
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('src', import.meta.url)),
		},
		extensions: [
			'.js',
			'.json',
			'.jsx',
			'.mjs',
			'.ts',
			'.tsx',
			'.vue',
		],
	},
	server: {
		port: 8002,
		host: '127.0.0.1',
	},
})
