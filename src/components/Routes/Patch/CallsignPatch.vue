<template>

	<AppCard>
		<template #body>

			<RouteDescription
				:description
				patch
				:random='false'
				:route
				:title='route'
				variable='CALLSIGN'
			/>

			<TableResponse>

				<template #table>
					<GenericTable :rows />
				</template>

				<template #response>
					<CodeBlock v-if='flightroute' :string='response' :url />
					<v-skeleton-loader v-else type='paragraph' />
				</template>

			</TableResponse>

		</template>
	</AppCard>
</template>

<script setup lang="ts">
const route = 'callsign'

const description = `Update a single callsign entry, using a JSON as described below. Both "origin" and "destination" need to be valid ICAO airport codes.`

const flightroute = computed(() => randomModule().callsign)
const url = computed(() => `${route}/${callsign.value}`)
const callsign = computed(() => flightroute.value?.response.flightroute.callsign_icao ?? 'UA14')
const origin = computed(() => flightroute.value?.response.flightroute ? flightroute.value.response.flightroute.origin.icao_code : 'KEWR')
const destination = computed(() => flightroute.value?.response.flightroute ? flightroute.value.response.flightroute.destination.icao_code : 'EGLL')
const response = computed(() => {
	return `{
    "origin": "${origin.value}",
    "destination": "${destination.value}"
}`
})

const rows = [
	{ key: 'origin', value: ['string'] },
	{ key: 'destination', value: ['string'] },
]

</script>
