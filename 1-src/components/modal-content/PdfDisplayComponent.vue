<template lang="pug">
.pdf-display
	iframe(
		:src="pdfUrl"
		:key="pdfUrl"
		frameborder="0"
		allowfullscreen=""
		@load="onIframeLoad"
	)
</template>

<style lang="stylus" scoped>
.pdf-display
	width 100%
	height 100%
	display flex
	z-index 0
	
	iframe
		width 100%
		height 100%
		border none
		position relative
		z-index 0
</style>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	filename?: string
}

const props = withDefaults(defineProps<Props>(), {
	filename: ''
})

const pdfUrl = computed(() => {
	if (!props.filename) return ''
	return new URL(`../../assets/pdf/${props.filename}`, import.meta.url).href
})

const onIframeLoad = () => {
	// Optional: add loading state management here if needed
}
</script>
