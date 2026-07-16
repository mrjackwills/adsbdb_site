import type { AircraftResponse, AirlineResponse, ApiResponse, CallsignResponse, OnlineResponse, StatsResponse } from '@/types'
import { env } from '@/services/env'
import { snackError } from '@/services/snack'

function wrap (value: any, _context: ClassMethodDecoratorContext) {
	const original = value
	async function wrapped (this: any, ...args: any[]) {
		try {
			// eslint-disable-next-line unicorn/no-this-outside-of-class
			return await original.apply(this, args)
		} catch (error) {
			snackError({ message: `Unable to access api.adsbdb.com` })
			throw error
		}
	}
	return wrapped
}

class ApiRequests {
	#headers: Record<string, string>
	#timeout: number

	constructor () {
		this.#headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-control': 'no-cache',
		}
		this.#timeout = 20_000
	}

	@wrap
	async online_get (): Promise<ApiResponse<OnlineResponse>> {
		return this.#get('online')
	}

	@wrap
	async aircraft_random_get (): Promise<ApiResponse<AircraftResponse>> {
		return this.#get('aircraft/random')
	}

	@wrap
	async callsign_random_get (): Promise<ApiResponse<CallsignResponse>> {
		return this.#get('callsign/random')
	}

	@wrap
	async airline_random_get (): Promise<ApiResponse<Array<AirlineResponse>>> {
		return this.#get('airline/random')
	}

	@wrap
	async stats_get (): Promise<ApiResponse<StatsResponse>> {
		return this.#get('stats')
	}

	async #get<T>(path: string): Promise<T> {
		const url = new URL(path.startsWith('/') ? path.slice(1) : path, env.domain_api.endsWith('/') ? env.domain_api : `${env.domain_api}/`).href
		const controller = new AbortController()
		const timer = setTimeout(() => controller.abort(), this.#timeout)

		let response: Response
		try {
			response = await fetch(url, {
				method: 'GET',
				headers: this.#headers,
				signal: controller.signal,
			})
		} catch (error) {
			const isAbort = error instanceof DOMException && error.name === 'AbortError'
			throw new Error(isAbort ? 'timeout' : 'offline', { cause: error })
		} finally {
			clearTimeout(timer)
		}

		if (!response.ok) {
			throw new Error(`HTTP ${response.status}: ${response.statusText}`)
		}

		return response.json() as Promise<T>
	}
}

export const apiRequests = new ApiRequests()
