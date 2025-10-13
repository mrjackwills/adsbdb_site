// Types
import type { App } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import router from '../router'
// Plugins
import vuetify from './vuetify'
const head = createHead()

const pinia = createPinia()

export function registerPlugins (app: App) {
  app
    .use(head)
    .use(vuetify)
    .use(router)
    .use(pinia)
}
