<template lang="pug">
	modal(
		:open="isModalOpen"
		:content-type="modalPayload"
		@close="closeModal"
		@open-modal="openModal"
	)
	hero(@open-modal="openModal")

	analize(@open-modal="openModal")
	hr
	uvod(@open-modal="openModal")
	hr
	about
	hr
	world
	hr
	testimonials
	hr
	order
	hr
	primitiveMan
	hr
	footah
	</template>
<!-- // -->
<style lang="stylus" scoped>
	</style>
<!-- // -->
<script setup>
	import { ref } from 'vue'
	import modal from './components/modal-content/modal.vue'
	import hero from './components/hero.vue'
	
	import analize from './components/analize.vue'
	import uvod from './components/uvod.vue'
	import about from './components/about.vue'
	import world from './components/world.vue'
	import testimonials from './components/testimonials.vue'
	import order from './components/order.vue'
	import primitiveMan from './components/primitiveMan.vue'
	import footah from './components/footer.vue'
	
	// Modal state management
	const isModalOpen = ref(false)
	const modalPayload = ref(null)
	
	function openModal(contentType) {
		modalPayload.value = contentType
		isModalOpen.value = true
	}
	
	function closeModal() {
		isModalOpen.value = false
		modalPayload.value = null
	}
	</script>

