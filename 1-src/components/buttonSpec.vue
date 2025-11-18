<template lang="pug">
	.gradient-border
		.gradient-border__content
			<span>Gradient Border</span>
	</template>
<!--  -->
<style lang="stylus" scoped>
	.gradient-border
		position relative
		// width 300px
		height 4rem
		border-radius 15px
		overflow hidden
	    &::before
			content ''
			position absolute
			inset -100%
			// width 200%
			// height 200%
			background linear-gradient(rgba(167,136,91,0) 33.33%, rgba(167, 136, 91, 1) 50%, rgba(167,136,91,0) 66.66%)
			animation rotate 12s linear infinite
	.gradient-border__content
		position absolute
		inset 4px
		border-radius 10px
		z-index 2
		display flex
		align-items center
		justify-content center
		color black
	@keyframes rotate
		0%
			transform rotate(0deg)
		100%
			transform rotate(360deg)
	</style>

<script setup lang="ts">
	</script>
