<template lang="pug">
h2 {{ component?.name }}
p  {{ component?.description }}
	</template>

<style lang="stylus" scoped>
	</style>

<script setup lang="ts">
const props = defineProps< {
	component?: {
		name?: string
		description?: string
	} }>()
	</script>
