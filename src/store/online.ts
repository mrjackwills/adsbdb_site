import { defineStore } from 'pinia'
import { ModuleName } from '@/types'

export const onlineModule = defineStore(ModuleName.Online, {
  state: () => ({
    api_version: '',
    online_time: 0,
  }),

  actions: {
    set_online_time (value: number) {
      this.online_time = value
    },
    set_api_version (value: string) {
      this.api_version = value
    },
    increase_online_time () {
      this.online_time++
    },
  },
})
