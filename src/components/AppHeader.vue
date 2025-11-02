<template>

	<v-row align='center' justify='center'>
		<v-col class='text-center ma-0 pa-0' cols='auto'>
			<v-img
				class=''
				:eager='true'
				:max-height='logo_size'
				src='@/assets/logo.svg'
				:width='logo_size'
			/>
		</v-col>
		<v-col class='text-center ma-0 pa-0 mx-4' cols='auto'>
			<span class='font-weight-bold' :class='font_size'>adsbdb.com</span>
		</v-col>
		<v-col class='text-center ma-0 pa-0' :class='github_margin' cols='12' sm='auto'>

			<v-btn
				color='yellow'
				:href
				rounded='pill'
				target='_blank'
				variant='tonal'
			>
				<v-icon :icon='mdiGithub' />
				<span class='mx-2'>GitHub</span>
				<v-icon :icon='mdiOpenInNew' />
			</v-btn>
		</v-col>
		<v-col class='ma-0 pa-0 text-center mt-3' cols='12'>
			<span :class='desc_size'> Public api for aircraft, airlines, & flightroutes     </span>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { mdiGithub, mdiOpenInNew } from '@mdi/js'
import { useDisplay } from 'vuetify'
import { env } from '@/services/env'

const { mdAndUp, smAndUp } = useDisplay()
const href = `${env.github_homepage}adsbdb`

const github_margin = computed(() => smAndUp.value ? '' : 'mt-4')

const logo_size = computed(() => mdAndUp.value ? '5rem' : '3rem')
const font_size = computed(() => mdAndUp.value ? 'text-h2' : 'text-h4')
const desc_size = computed(() => mdAndUp.value ? 'text-h5' : 'text-h6')

</script>
