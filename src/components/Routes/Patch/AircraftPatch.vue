<template>

	<AppCard>
		<template #body>

			<RouteDescription
				:description
				patch
				:random='false'
				:route
				:title='route'
				variable='MODE_S'
			/>

			<TableResponse>

				<template #table>
					<GenericTable :rows />
				</template>

				<template #response>
					<CodeBlock v-if='aircraft' :code='aircraft' :url />
					<v-skeleton-loader v-else type='paragraph, paragraph, paragraph, paragraph, paragraph, paragraph' />
				</template>

			</TableResponse>

		</template>
	</AppCard>
</template>

<script setup lang="ts">
const route = 'aircraft'

const description = `Update a single aircraft entry, using a JSON as described below. The "mode_s", "url_photo", and "url_photo_thumbnail" values cannot be modified.`

const aircraft = computed(() => randomModule().aircraft?.response.aircraft)

const mode_s = computed(() => aircraft.value?.mode_s ?? 'UA14')
const url = computed(() => `${route}/${mode_s.value}`)

const rows = [
	{ key: 'type', value: ['string'] },
	{ key: 'icao_type', value: ['string'] },
	{ key: 'manufacturer', value: ['string'] },
	{ key: 'mode_s *', value: ['string'] },
	{ key: 'registration', value: ['string'] },
	{ key: 'registered_owner_country_iso_name', value: ['string'] },
	{ key: 'registered_owner_country_name', value: ['string'] },
	{ key: 'registered_owner_operator_flag_code', value: ['string', 'null'] },
	{ key: 'registered_owner', value: ['string'] },
	{ key: 'url_photo *', value: ['string', 'null'] },
	{ key: 'url_photo_thumbnail *', value: ['string', 'null'] },
]

</script>
