import { defineStore } from 'pinia'
import { apiRequests } from '@/services/axios'
import { type AircraftResponse, type AirlineResponse, type ApiResponse, type CallsignResponse, ModuleName } from '@/types'

export const randomModule = defineStore(ModuleName.RandomResponses, {
	state: () => ({
		aircraft: undefined as ApiResponse<AircraftResponse> | undefined,
		airline: undefined as undefined | ApiResponse<Array<AirlineResponse>>,
		callsign: undefined as undefined | ApiResponse<CallsignResponse>,
	}),

	actions: {

		async get_new_aircraft () {
			this.aircraft = await apiRequests.aircraft_random_get()
		},

		async get_new_airline () {
			this.airline = await apiRequests.airline_random_get()
		},

		async get_new_callsign () {
			this.callsign = await apiRequests.callsign_random_get()
		},
	},
})
