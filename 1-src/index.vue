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
	about(@open-modal="openModal")
	hr
	world(@open-modal="openModal")
	hr
	testimonials
	hr
	order(@open-modal="openModal")
	hr
	primitiveMan
	hr.incoming
	uPripremi
	hr.incoming
	footah
	</template>
<!-- // -->
<style lang="stylus" scoped>
	hr.incoming
		background-color: #a7885b;
		height: .75px;
		background: linear-gradient(90deg, rgba(167, 136, 91, 0) 0%, #a7885b80 50%, rgba(167, 136, 91, 0) 100%);
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
	import uPripremi from './components/uPripremi.vue'
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

