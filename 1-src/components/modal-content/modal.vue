<template lang="pug">
#modal(:class="{ hide: !open }")
	.window(:class="{ clipped: applyClip }")
		.relative
			.close.absolute(@click="handleClose" :class="{ hide: hideClose }")
				icoClose.closer
		.relative
			.absolute.seal(:class="{ hide: !showSeal }")
				img(src="/assets/img/seal.webp")
		div.contents
			component(v-if="currentComponent" :is="currentComponent" :modal-data="modalData")
	.overlay(@click="handleClose")
</template>

<style lang="stylus" scoped>

	.seal
		pointer-events none
		margin-left auto
		filter drop-shadow(0 0 24px black)
		right: -2rem;
		top: -2rem;
		img
			height 6rem
			width 6rem

	.hide
		opacity 0 !important
		pointer-events none !important
		z-index -1 !important
	#modal
		pointer-events: all;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: inherit;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		padding: 1rem
		transition: 0.3s;
		will-change: backdrop-filter;
		backdrop-filter: blur(8px);
		z-index: 1000;
	.relative
		z-index: 1000;
		pointer-events: all;
		user-select: none;
	.window
		width: fit-content
		max-width: 720px;
		max-height: 720px;
		border-radius: .75rem;
		border: 1px solid #222;
		box-shadow: 0px 8px 2rem 8px #000, 0px 4px 4px 4px #000;
		// overflow: clip;
		z-index: 1000;
		pointer-events: none;

	.window.clipped
		overflow: clip
				
		// padding: 1rem;
		// @media screen and (min-width: $md)
		// 	padding 1rem
		// 	border 1px solid #333
		// 	background-color: #070707
			
		.close
			display flex
			align-self: end
			// top: -1rem
			// right: -1rem
			z-index: 1000;
			top 0
			right 0
			cursor pointer
			height: 3rem
			width: 3rem
			padding: .75rem
			background-color: black
			border-left 1px solid #2a2a2a
			border-bottom 1px solid #2a2a2a
			border-radius: 0 .75rem 0 .75rem
			box-shadow: 0px 8px 16px 0 #00000040;
			@media screen and (min-width: $xs)
				top 1px
				right 1px
			@media screen and (min-width: $md)
				// background-color: #070707
				top: -1rem
				right: -1rem
			// ———
			svg
				opacity: 0.25
				transition .2s
			&:hover
				background-color: #0a0a0a
				svg
					opacity: 1
			&:active
				background-color: #000
				svg
					opacity: .75

	.overlay
		z-index 900
		background-color #000000cc
		position absolute
		height 100%
		width 100%

	.window .relative
		margin-left auto
		z-index 1000

		p
			color #999
			font-size 1rem
			
	.contents
		height 100%
		border-radius .75rem
		box-shadow: inset 0px 1rem 1rem 0rem #000, inset 0px -1rem 1rem 0rem #000;
		scrollbar-color: #ffffff40 transparent;
		scrollbar-width: thin;
		overflow-x: hidden;
		overflow-y: auto;

		::selection
			background-color: #99999980
			color white
			
	.block, .pdf-display
		pointer-events: all
	
	.pdf-display
		width: 720px
		max-width: 720px
		height: 720px
		max-height: 100%

	@media screen and (max-width: 720px)
		.window
			width: 100%
			max-width: 100%
		.pdf-display
			max-width: 100%
			max-height: calc(100vh - 6rem)

	@media screen and (max-height: 768px)
		.window
			max-height 100%
		.pdf-display
			max-height: calc(100vh - 2rem)

</style>

<script setup lang="ts">
import { defineAsyncComponent, watch, ref, onUnmounted, markRaw, computed } from 'vue'
import icoClose from "@/assets/svg/close.svg"

// Import modal content components
import KravaPraskozorje from './krvavo-praskozorje.vue'
import AnalizaKamcevski from './analiza-kamcevski.vue'
import AnalzaPetkovic from './analiza-petkovic.vue'
import AnalizaStojanovic from './analiza-stojanovic.vue'
import PdfKamcevski from './pdf-kamcevski.vue'
import PdfStojanovic from './pdf-stojanovic.vue'
import OrderingForm from './ordering.vue'

interface Props {
	open?: boolean
	contentType?: string | null
	modalData?: any
}

const props = withDefaults(defineProps<Props>(), {
	open: false,
	contentType: null,
	modalData: null
})

const emit = defineEmits<{
	close: []
}>()

const currentComponent = ref(null)
const componentProps = ref({})
let scrollY = 0

// Computed properties for conditional visibility
const hideClose = computed(() => {
	return props.contentType === 'ordering-form' || props.contentType === 'krvavo-praskozorje'
})

const showSeal = computed(() => {
	return props.contentType === 'ordering-form' || props.contentType === 'krvavo-praskozorje'
})

// Clip overflow for all windows except ordering form and krvavo-praskozorje
const applyClip = computed(() => {
	if (!props.contentType) return false
	return props.contentType !== 'ordering-form' && props.contentType !== 'krvavo-praskozorje'
})

// Component registry mapping content keys to Vue components
// Use markRaw to prevent Vue from making components reactive
const registry = {
	'krvavo-praskozorje': markRaw(KravaPraskozorje),
	'analiza-kamcevski': markRaw(AnalizaKamcevski),
	'analiza-petkovic': markRaw(AnalzaPetkovic),
	'analiza-stojanovic': markRaw(AnalizaStojanovic),
	'pdf-kamcevski': markRaw(PdfKamcevski),
	'pdf-stojanovic': markRaw(PdfStojanovic),
	'ordering-form': markRaw(OrderingForm),
}

// Watch for changes to contentType and load appropriate component
watch(() => props.contentType, async (newType) => {
	if (!newType) {
		currentComponent.value = null
		componentProps.value = {}
		return
	}
	
	try {
		const comp = registry[newType]
		if (!comp) {
			console.warn(`Modal component not found: ${newType}`)
			currentComponent.value = null
		} else if (typeof comp === 'function' || comp?.__asyncLoader) {
			currentComponent.value = comp
		} else {
			currentComponent.value = markRaw(comp)
		}
	} catch (error) {
		console.error(`Failed to load modal component: ${newType}`, error)
		currentComponent.value = null
	}
}, { immediate: true })

// Scroll lock implementation
watch(() => props.open, (isOpen) => {
	if (isOpen) {
		// Record current scroll position
		scrollY = window.scrollY
		
		// Lock scroll
		document.body.style.position = 'fixed'
		document.body.style.top = `-${scrollY}px`
		document.body.style.width = '100%'
	} else {
		// Restore scroll position
		document.body.style.position = ''
		document.body.style.top = ''
		document.body.style.width = ''
		window.scrollTo(0, scrollY)
	}
})

const handleClose = () => {
	emit('close')
}

// Cleanup on component unmount
onUnmounted(() => {
	if (document.body.style.position === 'fixed') {
		document.body.style.position = ''
		document.body.style.top = ''
		document.body.style.width = ''
		window.scrollTo(0, scrollY)
	}
})
</script>
