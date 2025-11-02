export type ConstT<T> = T[keyof T]

export type TSnack = {
	message?: string
	icon?: string
	timeout?: number
	loading?: boolean
}

export type ApiResponse<T> = {
	response: T
}

export type KV = {
	key: string
	value: Array<string>
}

export type Aircraft = {
	type: string
	icao_type: string
	manufacturer: string
	mode_s: string
	registration: string
	registered_owner_country_iso_name: string
	registered_owner_country_name: string
	registered_owner_operator_flag_code: string
	registered_owner: string
	url_photo: string | null
	url_photo_thumbnail: string | null
}

export type AircraftResponse = {
	aircraft: Aircraft
}

export type AircraftCallsignResponse = {
	aircraft: Aircraft
	flightroute: FlightRoute
}
export type AirlineResponse = {
	name: string
	icao: string
	iata: string
	country: string
	country_iso: string
	callsign: string
}

export type AirportDetails = {
	country_iso_name: string
	country_name: string
	elevation: number
	iata_code: string
	icao_code: string
	latitude: number
	longitude: number
	municipality: string
	name: string
}

export type FlightRoute = {
	callsign: string
	callsign_icao: string
	callsign_iata: string
	airline: AirlineResponse
	origin: AirportDetails
	midpoint?: AirportDetails
	destination: AirportDetails
}

export type CallsignResponse = {
	flightroute: FlightRoute
}

export type OnlineResponse = {
	uptime: number
	api_version: string
}

export type StatusBox = OnlineResponse & { total: number }

export const ModuleName = {
	Online: 'online',
	RandomResponses: 'random_responses',
	Snackbar: 'snackbar',
} as const

export const ID_ROUTES = {
	Get: {
		Aircraft: 'get_route_aircraft',
		AircraftCallsign: 'get_route_aircraft_callsign',
		Airline: 'get_route_airline',
		Callsign: 'get_route_callsign',
		ModeS: 'get_route_mode-s',
		NNumber: 'get_route_n-number',
		Online: 'get_route_online',
		Stats: 'get_route_stats',
	},
	Patch: {
		Aircraft: 'patch_route_aircraft',
		Callsign: 'patch_route_callsign',
	},
} as const

export const ID_TABLES = {
	AircraftCallsign: {
		Aircraft: 'ac_aircraft_table',
		Flightroute: 'ac_flightroute_table',
		Airline: 'ac_airline_table',
		Airport: 'ac_airport_table',
	},
	Aircraft: {
		Aircraft: 'a_aircraft_table',
		Flightroute: 'a_flightroute_table',
		Airline: 'a_airline_table',
		Airport: 'a_airport_table',
	},
	Callsign: {
		Airline: 'c_airline_table',
		Airport: 'c_airport_table',
	},
	Stats: {
		Stats: 's_stats_table',
		Count: 's_count_table',
	},
} as const

export type CountEntry = {
	icao: string
	count: number
}

export type CategoryData = {
	aircraft: CountEntry[]
	airline: CountEntry[]
	callsign: CountEntry[]
	mode_s: CountEntry[]
	n_number: CountEntry[]
	online: CountEntry[]
	stats: CountEntry[]
	aggregate: number
}

export type StatsResponse = {
	daily: CategoryData
	total: CategoryData
}
