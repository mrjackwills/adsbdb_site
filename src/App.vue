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

  onMounted(() => {
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
