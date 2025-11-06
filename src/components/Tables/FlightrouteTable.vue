<template>
	<GenericTable :rows='flightroute_value' title='Flightroute' />
</template>

<script setup lang="ts">

const flightroute_value = [
	{ key: 'callsign', value: ['string'] },
	{ key: 'callsign_icao', value: ['string', 'null'] },
	{ key: 'callsign_iata', value: ['string', 'null'] },
]
</script>
