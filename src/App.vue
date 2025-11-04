<template>
	<v-app>
		<router-view />
	</v-app>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import { registerSW } from 'virtual:pwa-register'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { snackSuccess } from '@/services/snack'

const { updateServiceWorker } = useRegisterSW()

function check_service () {
	if ('serviceWorker' in navigator) {
		registerSW({
			onNeedRefresh () {
				appUpdate()
			},
		})
	}
}

const service_interval = ref(0)

const randomStore = randomModule()
const onlineStore = onlineModule()

onBeforeMount(async () => {
	Promise.all([
		onlineStore.get_stats(),
		onlineStore.get_time_version(),
		randomStore.get_new_aircraft(),
		randomStore.get_new_airline(),
		randomStore.get_new_callsign(),
	])
})

onMounted(async () => {
	window.addEventListener('beforeinstallprompt', e => {
		e.preventDefault()
	})
	check_service()
	service_interval.value = setInterval(check_service, 1000 * 60 * 60)
})

useHead({
	title: () => 'adsbdb.com',

	meta: [
		{
			name: `description`,
			content: `adsbdb.com - Public api for aircraft, airlines, & flightroutes`,
		},
	],
	link: [
		{
			rel: 'canonical',
			href: `https://www.adsbdb.com`,
		},
	],
})

function appUpdate (): void {
	snackSuccess({
		message: 'Downloading Updates',
		loading: true,
		timeout: 4500,
	})
	window.setTimeout(() => updateServiceWorker(), 5000)
}
</script>
