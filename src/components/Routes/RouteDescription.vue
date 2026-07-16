<template>

	<v-row class='align-start justify-space-between'>
		<v-col class='' cols='12' md='auto'>
			<span class='text-capitalize text-headline-medium'>{{ prefix }}: {{ title }}</span>
		</v-col>

		<v-col class='align-end' cols='12' md='7'>
			<v-row class='mt-1 align-center justify-end' density='compact'>
				<v-col class='ma-0 pa-0' cols='12'>
					<UrlBox bg :link='show_link' rounded :url />
				</v-col>
			</v-row>

			<v-row v-if='random' class='align-center' density='compact'>
				<v-col class='ma-0 pa-0' cols='12'>
					<UrlBox bg link rounded :url='random_url' />
				</v-col>
			</v-row>
		</v-col>
	</v-row>

	<v-row class='align-center justify-space-between mt-1'>
		<v-col class='' cols='12' :md='random?"9":"12"'>
			{{ description }}
		</v-col>

		<v-col
			v-if='random'
			class=''
			:class='button_alignment'
			cols='12'
			md='3'
		>
			<v-btn
				color='yellow'
				rounded
				@click='emitClick'
			>
				<v-icon :icon='mdiSync' />
				randomize {{ route }}
			</v-btn>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { mdiSync } from '@mdi/js'
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay()

const prefix = computed(() => patch ? 'PATCH' : 'GET')

const button_alignment = computed(() => mdAndUp.value ? 'text-right' : 'text-center')
const emits = defineEmits(['click'])

const show_link = computed(() => {
	return route === 'stats' || route === 'online'
})

function emitClick () {
	emits('click')
}

const random_url = computed(() => `${route}/random`)

const url = computed(() => `${route}${variable ? `/{ ${variable} }` : ''}`)

const { description, route, variable, random, title, patch } = defineProps<{
	description: string
	patch?: boolean
	random: boolean
	route: string
	title: string
	variable?: string
}>()

</script>

<style>
.v-btn {
text-transform: none !important;
}
</style>
