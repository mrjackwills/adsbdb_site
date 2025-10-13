import { defineStore } from 'pinia'
import { type AircraftResponse, type AirlineResponse, type ApiResponse, type CallsignResponse, ModuleName } from '@/types'

export const randomModule = defineStore(ModuleName.RandomResponses, {
  state: () => ({
    aircraft: undefined as ApiResponse<AircraftResponse> | undefined,
    airline: undefined as undefined | ApiResponse<Array<AirlineResponse>>,
    callsign: undefined as undefined | ApiResponse<CallsignResponse>,
  }),

  actions: {
    set_aircraft (value: ApiResponse<AircraftResponse>) {
      this.aircraft = value
    },
    set_airline (value: ApiResponse<Array<AirlineResponse>>) {
      this.airline = value
    },
    set_callsign (value: ApiResponse<CallsignResponse>) {
      this.callsign = value
    },
  },
})
