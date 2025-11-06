<template>
	<transition
		mode='out-in'
		name='fade'
	>
		<v-btn
			v-if='scrolled'
			class='mr-1 cl up_arrow'
			color='yellow'
			dark
			:icon='mdiArrowCollapseUp'
			position='fixed'
			size='small'
			@click='goToTop'
		/>
	</transition>
</template>

<script setup lang='ts'>
import { mdiArrowCollapseUp } from '@mdi/js'

const router = useRouter()
const route = useRoute()

onMounted(() => {
	window.addEventListener('scroll', scrollEvent)
})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', scrollEvent)
})

const scrolled = ref(false)

function scrollEvent (): void {
	scrolled.value = window.scrollY > 200 ? true : false
}

function goToTop (): void {
	removeHashFromUrl()
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

function removeHashFromUrl () {
	router.push({
		path: route.path,
		hash: '',
	})
}
</script>

<style scoped>
.up_arrow{
   bottom: 1rem;
   right: 1rem;
   z-index: 1234;
}
</style>
