/* eslint-disable unicorn/no-this-outside-of-class */
import { defineStore } from 'pinia'
import { apiRequests } from '@/services/fetch'
import { type ApiResponse, ModuleName, type StatsResponse } from '@/types'

export const onlineModule = defineStore(ModuleName.Online, {
	state: () => ({
		api_version: '',
		online_time: 0,
		status_height: 0,
		stats: undefined as undefined | ApiResponse<StatsResponse>,
	}),

	actions: {

		async get_time_version () {
			const response = await apiRequests.online_get()
			this.api_version = response.response.api_version
			this.online_time = response.response.uptime
			setInterval(async () => {
				this.online_time++
				if (this.online_time % 60 === 0) {
					await this.get_stats()
				}
			}, 1000)
		},

		async get_stats () {
			this.stats = await apiRequests.stats_get()
		},
	},
})
