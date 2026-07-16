<template>

	<AppCard>
		<template #body>

			<RouteDescription
				:description
				random
				:route
				:title='route'
				variable='CALLSIGN_ICAO || CALLSIGN_ICAO'
				@click='get_random_callsign'
			/>

			<TableResponse>

				<template #table>
					<GenericTable :rows='flightroute_value'>
						<template #tr_end>
							<tr>
								<td class='font-weight-bold'>airline</td>
								<GotoTD :id='ID_TABLES.Callsign.Airline' text='Airline' />
							</tr>

							<tr>
								<td class='font-weight-bold'>origin</td>
								<GotoTD :id='ID_TABLES.Callsign.Airport' text='Airport' />
							</tr>

							<tr>
								<td class='font-weight-bold'>midpoint?</td>
								<GotoTD :id='ID_TABLES.Callsign.Airport' text='Airport*' />
							</tr>

							<tr>
								<td class='font-weight-bold'>destination</td>
								<GotoTD :id='ID_TABLES.Callsign.Airport' text='Airport' />
							</tr>

						</template>
					</GenericTable>

					<MidPoint />

					<AirlineTable :id='ID_TABLES.Callsign.Airline' />

					<GenericTable :id='ID_TABLES.Callsign.Airport' :rows='airport_value' title='Airport' />
				</template>

				<template #response>
					<CodeBlock v-if='random_callsign' :code='random_callsign' :url />
					<v-skeleton-loader v-else type='paragraph, paragraph, paragraph, paragraph, paragraph, paragraph' />
				</template>

			</TableResponse>

		</template>
	</AppCard>
</template>

<script setup lang="ts">

import { ID_TABLES } from '@/types'

const randomStore = randomModule()
const random_callsign = computed(() => randomStore.callsign)
const url = computed(() => `${route}/${random_callsign.value?.response.flightroute.callsign}`)
const route = 'callsign'

const description = 'Query for a flightroute by either an IATA or IACO callsign. Random callsign endpoint also available.'

async function get_random_callsign (): Promise<void> {
	await randomStore.get_new_callsign()
}

const flightroute_value = [
	{ key: 'callsign', value: ['string'] },
	{ key: 'callsign_icao', value: ['string', 'null'] },
	{ key: 'callsign_iata', value: ['string', 'null'] },
]

const airport_value = [
	{ key: 'country_iso_name', value: ['string'] },
	{ key: 'country_name', value: ['string'] },
	{ key: 'elevation', value: ['number'] },
	{ key: 'iata_code', value: ['string'] },
	{ key: 'icao_code', value: ['string'] },
	{ key: 'latitude', value: ['number'] },
	{ key: 'longitude', value: ['number'] },
	{ key: 'municipality', value: ['string'] },
	{ key: 'name', value: ['string'] },
]

</script>
