<template>
	<AppCard>
		<template #body>
			<div class='text-headline-small'>
				Rate limits
			</div>
			<section class='' :style='{ minHeight }'>
				Rate limits are calculated over a rolling 60 second time period.
			</section>
			<v-row class='ma-0 pa-0 justify-center'>
				<v-col class='ma-0 pa-0 my-3' cols='12'>
					<v-table class='' density='compact' striped='odd'>
						<thead>
							<tr>
								<th class='text-left'>
									# requests
								</th>
								<th class='text-left'>
									block time in seconds
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>512 +</td>
								<td class='font-weight-bold text-purple-lighten-3'>60</td>
							</tr>
							<tr>
								<td>1024 +</td>
								<td class='font-weight-bold text-purple-lighten-3'>300</td>
							</tr>
						</tbody>
					</v-table>

				</v-col>
			</v-row>
		</template>
	</AppCard>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay()

const minHeight = computed(() => mdAndUp.value ? `${onlineModule().status_height}px` : '')

</script>
