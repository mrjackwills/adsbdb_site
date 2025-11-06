<template>
	<GenericTable :rows='aircraft_value' :title />
</template>

<script setup lang="ts">
defineProps<{
	title?: string
}>()

const aircraft_value = [
	{ key: 'type', value: ['string'] },
	{ key: 'icao_type', value: ['string'] },
	{ key: 'manufacturer', value: ['string'] },
	{ key: 'mode_s', value: ['string'] },
	{ key: 'registration', value: ['string'] },
	{ key: 'registered_owner_country_iso_name', value: ['string'] },
	{ key: 'registered_owner_country_name', value: ['string'] },
	{ key: 'registered_owner_operator_flag_code', value: ['string', 'null'] },
	{ key: 'registered_owner', value: ['string'] },
	{ key: 'url_photo', value: ['string', 'null'] },
	{ key: 'url_photo_thumbnail', value: ['string', 'null'] },
]
</script>
