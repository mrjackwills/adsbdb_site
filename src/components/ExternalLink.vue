<template>
	<a :href target='_blank'>{{ text }}<v-icon class='ml-1' :icon='mdiOpenInNew' size='x-small' /></a>
</template>

<script setup lang="ts">
import { mdiOpenInNew } from '@mdi/js'

defineProps<{
	text: string
	href: string
}>()
</script>
