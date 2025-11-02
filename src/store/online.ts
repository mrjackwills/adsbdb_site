import { defineStore } from 'pinia'
import { type ApiResponse, ModuleName, type StatsResponse } from '@/types'

export const onlineModule = defineStore(ModuleName.Online, {
	state: () => ({
		api_version: '',
		online_time: 0,
		stats: undefined as undefined | ApiResponse<StatsResponse>,
	}),

	actions: {
		set_online_time (value: number) {
			this.online_time = value
		},
		set_api_version (value: string) {
			this.api_version = value
		},
		set_stats (value: ApiResponse<StatsResponse>) {
			this.stats = value
		},
		increase_online_time () {
			this.online_time++
		},
	},
})
