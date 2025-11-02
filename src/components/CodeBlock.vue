<template>
	<UrlBox v-if='url' link :url />
	<pre class='language-js' v-html='highlighted_code' />
</template>

<script setup lang="ts">
import type { Aircraft, AircraftCallsignResponse, AircraftResponse, AirlineResponse, ApiResponse, CallsignResponse, OnlineResponse, StatsResponse, StatusBox } from '@/types'

import prism from 'prismjs'
import 'prismjs/components/prism-json'
import '@/styles/vscode.css'

const highlighted_code = computed(() => {
	if (props.code) {
		return prism.languages.json ? prism.highlight(JSON.stringify(props.code, null, 4), prism.languages.json, 'json').trim() : ''
	} else if (props.string) {
		return prism.languages.js ? prism.highlight(props.string, prism.languages.js, 'js').trim() : 'unknown'
	}
})

const props = defineProps<{
	code?: ApiResponse<AircraftResponse | OnlineResponse | CallsignResponse | Array<AirlineResponse> | StatsResponse | AircraftCallsignResponse> | Aircraft | StatusBox
	string?: string
	url?: string
}>()

</script>
