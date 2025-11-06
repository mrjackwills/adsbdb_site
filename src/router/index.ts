import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: setupLayouts(routes),
	scrollBehavior (to) {
		if (to.hash) {
			return {
				top: 15,
				el: to.hash,
				behavior: 'smooth',
			}
		}
	},
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
	if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
		if (localStorage.getItem('vuetify:dynamic-reload')) {
			// eslint-disable-next-line no-console
			console.error('Dynamic import error, reloading page did not fix it', err)
		} else {
			// eslint-disable-next-line no-console
			console.log('Reloading page to fix dynamic import error')
			localStorage.setItem('vuetify:dynamic-reload', 'true')
			location.assign(to.fullPath)
		}
	} else {
		// eslint-disable-next-line no-console
		console.error(err)
	}
})

router.isReady().then(() => {
	localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
