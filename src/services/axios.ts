import type { AxiosInstance } from 'axios'
import type { AircraftResponse, AirlineResponse, ApiResponse, CallsignResponse, OnlineResponse, StatsResponse } from '@/types'
import Axios from 'axios'
import { env } from '@/services/env'
import { snackError } from '@/services/snack'

function wrap (value: any, _context: ClassMethodDecoratorContext) {
  const original = value
  async function wrapped (this: any, ...args: any[]) {
    try {
      return await original.apply(this, args)
    } catch (error) {
      //   const e = error as AxiosError
      snackError({ message: `Unable to access api.adsbdb.com` })
      throw error
    }
  }
  return wrapped
}
class ApiRequests {
  #api!: AxiosInstance

  constructor () {
    this.#api = Axios.create({
      baseURL: `${env.domain_api}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-control': 'no-cache',
      },
      timeout: 10_000,
    })

    this.#api.interceptors.response.use(config => Promise.resolve(config), error => error.response ? Promise.reject(error) : Promise.reject(new Error('offline')))
  }

  @wrap
  async online_get (): Promise<ApiResponse<OnlineResponse>> {
    const { data } = await this.#api.get('online')
    return data
  }

  @wrap
  async aircraft_random_get (): Promise<ApiResponse<AircraftResponse>> {
    const { data } = await this.#api.get('aircraft/random')
    return data
  }

  @wrap
  async callsign_random_get (): Promise<ApiResponse<CallsignResponse>> {
    const { data } = await this.#api.get('callsign/random')
    return data
  }

  @wrap
  async airline_random_get (): Promise<ApiResponse<Array<AirlineResponse>>> {
    const { data } = await this.#api.get('airline/random')
    return data
  }

  @wrap
  async stats_get (): Promise<ApiResponse<StatsResponse>> {
    const { data } = await this.#api.get('stats')
    return data
  }
}

export const apiRequests = new ApiRequests()
