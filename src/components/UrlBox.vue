<template>
	<v-alert
		class='text-yellow text-left text-body-2'
		color='black'
		density='compact'
		:rounded='rounded?"lg":"0"'
	>
		<ExternalLink v-if='link' :href :text='href' />
		<span v-else>{{ href }}</span>
	</v-alert>
</template>

<script lang="ts" setup>
import { env } from '@/services/env'

const href = computed(() => `${env.domain_api}${props.url}`)
const props = defineProps<{
	url: string
	link?: boolean
	rounded?: boolean
}>()
</script>

<style scoped>
a {
    color: inherit;
}
</style>
