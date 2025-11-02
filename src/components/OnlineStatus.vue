<template>
	<AppCard>
		<template #body>
			<div class='text-h6'>
				Status
			</div>
			<section class='my-1'>
				See adsbdb <ExternalLink href='https://www.twitter.com/adsbdb' text='twitter page' /> for any status updates.
				<br>
				Please report any incorrect data to the
				<ExternalLink :href text='issues page' /> with the <span
					class='font-weight-bold'
				>Data</span> tag.
			</section>
			<v-row v-if='api_version' class='ma-0 pa-0' justify='center'>
				<v-col class='ma-0 pa-0 my-3' cols='12'>
					<GenericTable no-headers :rows />
				</v-col>
			</v-row>
			<v-skeleton-loader v-else type='table-row-divider, table-row' />
		</template>
	</AppCard>
</template>

<script setup lang="ts">
import { apiRequests } from '@/services/axios'
import { env } from '@/services/env'
import { secondsToText } from '@/services/text'

const href = `${env.github_homepage}/adsbdb/issues`

const onlineStore = onlineModule()
const api_version = computed((): string => onlineStore.api_version)
const online_time = computed({
	get (): string {
		return secondsToText(onlineStore.online_time)
	},
	set (b: number): void {
		onlineStore.set_online_time(b)
	},
})

const rows = computed(() => [
	{ key: 'api_version', value: [api_version.value] },
	{ key: 'online for', value: [online_time.value] },
	{ key: 'requests recieved', value: [onlineStore.stats?.response.total.aggregate.toLocaleString() ?? '0'] },
])

onMounted(async () => {
	const { api_version, uptime } = await (await apiRequests.online_get()).response
	online_time.value = uptime
	onlineStore.set_api_version(api_version)
	setInterval(() => {
		onlineStore.increase_online_time()
	}, 1000)
})

</script>
