<template>
	<AppCard>
		<template #body>
			<RouteDescription
				:description
				random
				:route
				:title='route'
				variable='MODE_S || REGISTRATION'
				@click='get_random_aircraft'
			/>

			<TableResponse>
				<template #table>
					<AircraftTable />
				</template>

				<template #response>
					<CodeBlock v-if='random_aircraft' :code='random_aircraft' :url />
					<v-skeleton-loader v-else type='paragraph, paragraph, paragraph' />
				</template>
			</TableResponse>
		</template>
	</AppCard>
</template>

<script setup lang="ts">
const randomStore = randomModule()
const random_aircraft = computed(() => randomStore.aircraft)

const url = computed(() => `${route}/${random_aircraft.value?.response.aircraft.mode_s}`)
const route = 'aircraft'

const description = 'Query for an aircraft by its Mode S transponder code or registration number. Random aircraft endpoint also available.'

async function get_random_aircraft (): Promise<void> {
	await randomStore.get_new_aircraft()
}

</script>
