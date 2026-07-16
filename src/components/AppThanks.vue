<template>

	<AppCard>
		<template #body>

			With thanks to;

			<v-row density='compact'>
				<v-col v-for='(item,index) in rows' :key='index' class='ma-0 pa-0' cols='12'>
					<v-icon
						:icon='mdiCircleSmall'
					/>

					<ExternalLink v-if='item.link' :href='item.link.href' :text='item.link.text' />
					{{ item.text }}
				</v-col>
			</v-row>

		</template>
	</AppCard>
</template>
<script setup lang="ts">
import { mdiCircleSmall } from '@mdi/js'

const rows = [
	{ link: undefined, text: 'The flight route data is the work of David Taylor, Edinburgh and Jim Mason, Glasgow, and may not be copied, published, or incorporated into other databases without the explicit permission of David J Taylor, Edinburgh.' },

	{ link: { href: 'https://planebase.biz/', text: 'Planebase' }, text: 'for the aircraft data' },

	{ link: { href: 'https://airport-data.com/', text: 'airport-data' }, text: 'for aircraft photographs.' },
]
</script>
