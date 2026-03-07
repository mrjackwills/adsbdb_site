<template>

	<v-row class='align-center justify-center' density='compact'>
		<v-col class='text-center ' cols='auto'>
			<v-img
				alt='adsbdb logo'
				:eager='true'
				:max-height='logo_size'
				src='@/assets/logo.svg'
				:width='logo_size'
			/>
		</v-col>
		<v-col class='text-center' cols='auto'>
			<span class='font-weight-bold' :class='font_size'>adsbdb.com</span>
		</v-col>
		<v-col class='text-center' cols='12' sm='auto'>

			<v-btn
				color='yellow'
				:href
				rounded='pill'
				target='_blank'
				variant='tonal'
			>
				<v-icon :icon='mdiGithub' />
				<span class='mx-2 text-body-large'>GitHub</span>
				<v-icon :icon='mdiOpenInNew' />
			</v-btn>
		</v-col>
		<v-col class=' text-center' cols='12'>
			<span :class='desc_size'> Public api for aircraft, airlines, & flightroutes</span>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { mdiGithub, mdiOpenInNew } from '@mdi/js'
import { useDisplay } from 'vuetify'
import { env } from '@/services/env'

const { mdAndUp } = useDisplay()
const href = `${env.github_homepage}adsbdb`

const logo_size = computed(() => mdAndUp.value ? '5rem' : '5rem')
const font_size = computed(() => mdAndUp.value ? 'text-display-large' : 'text-display-medium')
const desc_size = computed(() => mdAndUp.value ? 'text-headline-medium' : 'text-headline-small')

</script>
