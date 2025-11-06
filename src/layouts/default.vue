<template>
	<v-main>
		<router-view />
		<section v-if='show'>
			<SnackBar />
			<UpArrow />
			<AppFooter />
		</section>
	</v-main>

</template>

<script lang="ts" setup>

const route = useRoute()
const show = computed(() => route.path === '/')
</script>
