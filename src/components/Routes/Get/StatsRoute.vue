<template>

	<AppCard>
		<template #body>

			<RouteDescription
				:description
				:random='false'
				:route
				:title='route'
			/>

			<TableResponse>
				<template #table>
					<GenericTable>

						<template #tr_end>
							<tr>
								<td class='font-weight-bold'>daily</td>
								<td class='cl text-decoration-underline'><span @click='goto(ID_TABLES.Stats.Stats)'>Stats</span></td>
							</tr>

							<tr>
								<td class='font-weight-bold'>total</td>
								<td class='cl text-decoration-underline'><span @click='goto(ID_TABLES.Stats.Stats)'>Stats</span></td>
							</tr>
						</template>
					</GenericTable>

					<GenericTable :id='ID_TABLES.Stats.Stats' :rows='request_value' title='Stats'>
						<template #tr_start>
							<tr v-for='(item, index) in keys' :key='index'>
								<td class='font-weight-bold'>{{ item }}</td>
								<td class=''><span class='text-purple-lighten-3'>Array</span><span class='cl text-decoration-underline' @click='goto(ID_TABLES.Stats.Count)'>&lt;Count&gt;</span></td>
							</tr>

						</template>
					</GenericTable>

					<GenericTable :id='ID_TABLES.Stats.Count' :rows='entry_values' title='Count' />
				</template>

				<template #response>
					<CodeBlock v-if='stats' :code='stats' />
					<v-skeleton-loader v-else type='paragraph,paragraph,paragraph,paragraph,paragraph,' />
				</template>
			</TableResponse>

		</template>
	</AppCard>

</template>

<script setup lang="ts">
import { goto } from '@/services/goto'
import { ID_TABLES } from '@/types'
const route = 'stats'
const description = `Get statistics for the top 10 most requested urls at each endpoint, as well as the total number of requests, over both the previous 24 hours and all time. The statistics are re-calculated every 60 seconds.`

const onlineStore = onlineModule()

const stats = computed(() => onlineStore.stats)

const keys = ['aircraft', 'airline', 'callsign', 'mode_s', 'n_number', 'online', 'stats']

const request_value = [{ key: 'aggregate', value: ['number'] }]
const entry_values = [{ key: 'url', value: ['string'] }, { key: 'count', value: ['number'] }]

</script>
