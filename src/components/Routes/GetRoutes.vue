<template>
	<AppCard>
		<template #body>
			<div class='text-headline-small'>
				GET routes
			</div>
			Send a GET request to query the adsbdb database. Each request is returned in the format <code class='bg-black px-3'> { "response": T }</code>
			<v-table class='mt-3' density='compact' striped='even'>
				<tbody>
					<tr v-for='(i, dx) in links' :key='dx'>
						<td v-for='(item, index) in i' :key='index' class='font-weight-bold text-yellow cl'>
							<router-link :to='`#${item.id}`'>{{ item.text }}</router-link>
						</td>
					</tr>
				</tbody>
			</v-table>

		</template>
	</AppCard>
</template>

<script setup lang="ts">
import { ID_ROUTES } from '@/types'

const links = [
	[
		{ id: ID_ROUTES.Get.Aircraft, text: 'aircraft' },
		{ id: ID_ROUTES.Get.Callsign, text: 'callsign' },
		{ id: ID_ROUTES.Get.AircraftCallsign, text: 'aircraft?callsign' },
		{ id: ID_ROUTES.Get.Airline, text: 'airline' },
	],
	[
		{ id: ID_ROUTES.Get.NNumber, text: 'n-number' },
		{ id: ID_ROUTES.Get.ModeS, text: 'mode-s' },
		{ id: ID_ROUTES.Get.Online, text: 'online' },
		{ id: ID_ROUTES.Get.Stats, text: 'stats' },
	],

]
</script>

<style scoped>
a {
    color: inherit;
}
</style>
