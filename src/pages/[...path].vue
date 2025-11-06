<template>
	<span v-if='show_me'>redirecting</span>
</template>

<script setup lang="ts">
import router from '@/router'

const show_me = false

onBeforeMount(() => {
	router.push('/')
})
</script>
