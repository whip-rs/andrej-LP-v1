<template lang="pug">
	.ribbons
		.bit
			shipping.ico
			.copy
				p Бесплатна достава
				p.micro на територији Србије
		.bit#guarantee
			//- guarantee01.ico
			img(src="/assets/img/seal.webp" alt="Жиг гаранције" loading="lazy").garancija
			.copy
				p Гаранција задовољствa
				p.micro у супротном пун повраћај новца и бесплатна повратна поштарина до 30 дана од куповине
		.bit#clock
			clock.ico
			.copy
				p Брза испорука
				p.micro 24-48ч током радних дана
		.bit#map
			img(src="/assets/img/adena-mapa.webp" alt="Мапа Адене" loading="lazy").mapa
			.copy
				p Мапа континента
				p.micro у средњем формату долази са првом књигом
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
	img
		height auto !important
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
	.ico, .mapa, .garancija
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
			
	@media screen and (min-width: 1024px)
		.ribbons
			width 100%
			flex-wrap wrap
			display flex
			flex-direction row
		.bit
			width calc(33.33% - 1rem)
		#guarantee, #map
			width calc(66.66% - 1rem)


	@media screen and (min-width: 1025px)
		.bit
			flex 3
		.bit#guarantee
			flex 4
		.ribbons
			padding-bottom 0
			max-width 1440px
		.copy p:not(.micro)
			font-size 1.25rem
			margin-bottom .125rem
			
	@media screen and (min-width: 1366px)
		.bit
			flex-direction column
			height 100%
			gap .5rem
			.copy
				text-align center
		.bit#clock
			margin-top 0
		.bit
			flex 2
		.bit#guarantee
			flex 2
		.ico, .mapa, .garancija
			min-height 5rem
			max-width 5rem
			image-rendering: -webkit-optimize-contrast;	
		.mapa
			max-width 6.5rem


	</style>
<!--  -->
<script setup lang="ts">
	import shipping from '/assets/svg/shipping.svg'
	import guarantee01 from '/assets/svg/guarantee-01.svg'
	import clock from '/assets/svg/time.svg'
	</script>
