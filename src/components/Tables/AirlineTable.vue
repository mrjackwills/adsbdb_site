<template>
	<GenericTable :id :rows='airline_value' :title />
</template>

<script setup lang="ts">

const title = computed(() => props.hideTitle ? '' : 'Airline')

const airline_value = [
	{ key: 'name', value: ['string'] },
	{ key: 'icao', value: ['string'] },
	{ key: 'iata', value: ['string', 'null'] },
	{ key: 'country', value: ['string'] },
	{ key: 'country_iso', value: ['string'] },
	{ key: 'callsign', value: ['string', 'null'] },
]

const props = defineProps<{
	hideTitle?: boolean
	id?: string
}>()
</script>
