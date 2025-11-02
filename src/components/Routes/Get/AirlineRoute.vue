<template>

	<AppCard>
		<template #body>

			<RouteDescription
				:description
				random
				:route
				:title='route'
				variable='ICAO || IATA'
				@click='get_random_airline'
			/>

			<TableResponse>

				<template #table>
					<AirlineTable :hide-title='true' />
				</template>

				<template #response>
					<CodeBlock v-if='random_airline' :code='random_airline' :url />
					<v-skeleton-loader v-else type='paragraph, paragraph, paragraph' />
				</template>

			</TableResponse>

		</template>
	</AppCard>
</template>

<script setup lang="ts">

import type { AirlineResponse, ApiResponse } from '@/types'
import { apiRequests } from '@/services/axios'

const route = 'airline'

const description = 'Query for an Airline based on an Airlines ICAO or IATA short code, if found, this will return an array of one or more Airlines. Random airline endpoint also available, but will always return an array containing only one airline.'

const random_airline = computed({
	get (): undefined | ApiResponse<Array<AirlineResponse>> {
		return randomModule().airline
	},
	set (b: ApiResponse<Array<AirlineResponse>>): void {
		randomModule().set_airline(b)
	},
})

const url = computed(() => `${route}/${random_airline?.value?.response[0]?.icao}`)

onMounted(async () => {
	await get_random_airline()
})

async function get_random_airline (): Promise<void> {
	random_airline.value = await apiRequests.airline_random_get()
}

</script>
