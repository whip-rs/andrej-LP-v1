<template lang="pug">
	.ribbons
		.bit
			shipping.ico
			.copy
				p Бесплатна достава
				p.micro на територији Србије
		.bit#guarantee
			//- guarantee01.ico
			img(src="/assets/img/seal.webp").mapa
			.copy
				p Гаранција задовољствa
				p.micro у супротном пун повраћај новца и бесплатна повратна поштарина до 30 дана од куповине
		.bit#clock
			clock.ico
			.copy
				p Брза испорука
				p.micro 24-48ч током радних дана
		.bit
			img(src="/assets/img/adena-mapa.webp").mapa
			.copy
				p Долази с мапом континента
				p.micro мапа Адене укључена уз прву књигу
	</template>
<!--  -->
<style lang="stylus" scoped>
	.ribbons
		padding-left 1rem
		padding-right 1rem
		padding-top .75rem
		padding-bottom .25rem
		display flex
		flex-direction column
		flex-wrap: wrap
		gap .25rem
	.bit
		display flex
		align-items center
		gap 1rem
	.copy
		display flex
		flex-direction column
		justify-content: center
		p
			margin-bottom 0
			line-height 1
			padding-bottom .125rem
		p.micro
			line-height 1.25
			padding-bottom 0
	.micro
		margin-bottom 0
	.ico, .mapa
		height 100%
		width 100%
		max-width 4rem
		fill #a7885b
	.mapa
		display flex
	#guarantee
		margin-top -.25rem
		img
			padding .25rem
	.bit#clock
		margin-top -.25rem
		.ico
			padding 0.675rem
	</style>
<!--  -->
<script setup lang="ts">
	import shipping from '/assets/svg/shipping.svg'
	import guarantee01 from '/assets/svg/guarantee-01.svg'
	import clock from '/assets/svg/time.svg'
	</script>
