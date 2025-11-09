<template lang="pug">

	.flex.cc.col
		h1 GET HARD
		//- IMG TEST
		img(src="@/assets/img/imgTest.jpg" alt="test").no-click
		icoBot.ico

	</template> <!-- // -->

<style lang="stylus" scoped>

	.flex
		width 100vw
		height 100vh
		gap 1rem
	h1
		font-weight bold
		font-size 2rem
	img
		height 240px
	.ico
		height 4rem
		fill red
		
	</style> <!-- // -->
	
<script setup>

	// IMG TEST
	import IcoBot from '@/assets/svg/bot.svg'

	</script>
