<template lang="pug">
#modal(:class="{ hide: !open }")
	.window
		.relative
			.close.absolute(@click="handleClose")
				icoClose.closer
		div.contents
			.spinner(v-if="isLoading")
				p Loading...
			component(v-else-if="currentComponent" :is="currentComponent")
	.overlay(@click="handleClose")
</template>

<style lang="stylus" scoped>
	.hide
		opacity 0 !important
		pointer-events none !important
		z-index -1 !important
	#modal
		pointer-events: all;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		padding: 1rem;
		transition: 0.3s;
		will-change: backdrop-filter;
		backdrop-filter: blur(8px);
	.window
		width: 100%;
		z-index: 1000;
		height: 100%;
		max-width: 720px;
		max-height: 720px;
		border-radius: 1.5rem .75rem 1.5rem 1.5rem;
		border: 1px solid #333;
		background-image: url(assets/img/stone-texture-01.webp);
		background-size: contain;
		box-shadow: 0px 8px 2rem 8px #000, 0px 4px 4px 4px #000;
		padding: 1rem;
		overflow: clip;

		// @media screen and (min-width: $md)
		// 	padding 1rem
		// 	border 1px solid #333
		// 	background-color: #070707
			
		.close
			display flex
			align-self: end
			top: -1rem
			right: -1rem
			cursor pointer
			height: 3rem
			width: 3rem
			padding: .75rem
			background-color: black
			border-left 1px solid #2a2a2a
			border-bottom 1px solid #2a2a2a
			border-radius: 0 0 0 .75rem
			box-shadow: 0px 0px 12px 0 #000;
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
				background-color: #1a1a1a
				svg
					opacity: .5

	.overlay
		z-index 900
		background-color #000000cc
		position absolute
		height 100%
		width 100%

	.window .relative
		margin-left auto
		z-index 1000

		.spinner
			display flex
			align-items center
			justify-content center
			height 100%
			width 100%
		p
			color #999
			font-size 1rem
			
	.contents
		overflow scroll
		height 100%
		border 1px solid #333
		border-radius .75rem
		box-shadow: inset 0px 1rem 1rem 0rem #000, inset 0px -1rem 1rem 0rem #000;
		
</style>

<script setup lang="ts">
import { defineAsyncComponent, watch, ref, onUnmounted, markRaw } from 'vue'
import icoClose from "@/assets/svg/ux-ico-close.svg"

// Import modal content components
import KravaPraskozorje from './krvavo-praskozorje.vue'
import AnalizaKamcevski from './analiza-kamcevski.vue'
import AnalzaPetkovic from './analiza-petkovic.vue'
import AnalizaStojanovic from './analiza-stojanovic.vue'
import PdfKamcevski from './pdf-kamcevski.vue'
import PdfStojanovic from './pdf-stojanovic.vue'

interface Props {
	open?: boolean
	contentType?: string | null
}

const props = withDefaults(defineProps<Props>(), {
	open: false,
	contentType: null
})

const emit = defineEmits<{
	close: []
}>()

const isLoading = ref(false)
const currentComponent = ref(null)
const componentProps = ref({})
let scrollY = 0

// Component registry mapping content keys to Vue components
// Use markRaw to prevent Vue from making components reactive
const registry = {
	'krvavo-praskozorje': markRaw(KravaPraskozorje),
	'analiza-kamcevski': markRaw(AnalizaKamcevski),
	'analiza-petkovic': markRaw(AnalzaPetkovic),
	'analiza-stojanovic': markRaw(AnalizaStojanovic),
	'pdf-kamcevski': markRaw(PdfKamcevski),
	'pdf-stojanovic': markRaw(PdfStojanovic),
}

// Watch for changes to contentType and load appropriate component
watch(() => props.contentType, async (newType) => {
	if (!newType) {
		currentComponent.value = null
		componentProps.value = {}
		return
	}

	isLoading.value = true
	
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
	
	isLoading.value = false
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
