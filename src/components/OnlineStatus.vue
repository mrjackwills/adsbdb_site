<template>
	<AppCard>
		<template #body>
			<div class='text-headline-small'>
				Status
			</div>
			<section ref='status_section'>
				See adsbdb <ExternalLink href='https://www.twitter.com/adsbdb' text='twitter page' /> for any status updates.
				<br>
				Please report any incorrect data to the
				<ExternalLink :href text='issues page' /> with the <span
					class='font-weight-bold'
				>Data</span> tag.
			</section>
			<v-row v-if='show_table' class='ma-0 pa-0 justify-center'>
				<v-col class='ma-0 pa-0 my-3' cols='12'>
					<GenericTable no-headers :rows />
				</v-col>
			</v-row>
			<v-skeleton-loader v-else type='table-row, table-row, table-row' />
		</template>
	</AppCard>
</template>

<script setup lang="ts">
import { env } from '@/services/env'
import { secondsToText } from '@/services/text'

const href = `${env.github_homepage}/adsbdb/issues`

const status_section = ref(null as null | HTMLElement)

onMounted(() => {
	window.addEventListener('resize', updateHeight)
	updateHeight()
})

/// Set the status height in pinia, so that the rate limit card has the same spacing
function updateHeight () {
	onlineStore.status_height = status_section.value?.offsetHeight ?? 0
	setTimeout(() => {
		onlineStore.status_height = status_section.value?.offsetHeight ?? 0
	}, 1)
}

const onlineStore = onlineModule()
const api_version = computed(() => onlineStore.api_version)
const online_time = computed(() => secondsToText(onlineStore.online_time))

const daily_requests = computed(() => onlineStore.stats?.response.daily.aggregate)
const total_requests = computed(() => onlineStore.stats?.response.total.aggregate)

const show_table = computed(() => api_version.value && total_requests.value)

const rows = computed(() => [
	{ key: 'api version', value: [api_version.value] },
	{ key: 'online for', value: [online_time.value] },
	{ key: 'daily requests received', value: [daily_requests.value?.toLocaleString() ?? '0'] },
	{ key: 'total requests received', value: [total_requests.value?.toLocaleString() ?? '0'] },
])

</script>
