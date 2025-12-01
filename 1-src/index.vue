<template lang="pug">
	modal(
		:open="isModalOpen"
		:content-type="modalPayload"
		:modal-data="modalData"
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
	hr.spec
	satisfactionGuarantee
	hr.spec
	primitiveMan
	
	//- hr.spec
	//- uPripremi
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
	const about = defineAsyncComponent(() => import('./components/about.vue'))
	const world = defineAsyncComponent(() => import('./components/world.vue'))
	import { defineAsyncComponent } from 'vue'
	const testimonials = defineAsyncComponent(() => import('./components/testimonials.vue'))
	const order = defineAsyncComponent(() => import('./components/order.vue'))
	const primitiveMan = defineAsyncComponent(() => import('./components/primitiveMan.vue'))
	const satisfactionGuarantee = defineAsyncComponent(() => import('./components/satisfactionGuarantee.vue'))
	import footah from './components/footer.vue'
	
	// Modal state management
	const isModalOpen = ref(false)
	const modalPayload = ref(null)
	const modalData = ref(null)
	
	function openModal(contentType, data) {
		modalPayload.value = contentType
		modalData.value = data
		isModalOpen.value = true
	}
	
	function closeModal() {
		isModalOpen.value = false
		modalPayload.value = null
		modalData.value = null
	}
	</script>

