<template lang="pug">
section
	.wrp
		.image
			img(src="/assets/img/seal.webp")
		.text
			h3 О гаранцији задовољства
			p.micro У случају да нисте задовољни својом куповином, унутар првих 30 дана од тренутка уручења <a href="mailto:porudzbine@adena.rs">путем мејла</a> можете да затражите повраћај новца, и добићете га у целини, без препирке, истим путем на који сте примили књигу, уз бесплатну (о нашем трошку) повратну поштарину. <br><br>То се неће десити, али желимо да осећате да су Ваши интереси у потпуности заштићени.
	</template>

<style lang="stylus" scoped>

	section
		background: linear-gradient(90deg, rgba(167, 136, 91, 0) 0%, #a7885b20 50%, rgba(167, 136, 91, 0) 100%);
		display flex
		
	.wrp
		display flex
		max-width 920px
		margin-left auto
		margin-right auto
		gap 1.5rem		
		
	p:last-of-type
		margin-bottom 0
		
	h3, p
		text-shadow 0 3px 3px black
		text-wrap pretty
		
	a
		color #e4c79d
		transition: .3s
		text-decoration none
		border-bottom 1px solid #e4c79d
		&:hover
			color white
			border-bottom-color white

	.image

	img
		max-width: 128px;
		margin: auto;
		margin-right: 0;
		filter:	drop-shadow(0 0px 12px #392915)
	
	.micro
		font-size 1rem
			
	@media screen and (min-width: 320px)
		.wrp
			flex-direction column
			padding-left 1rem
			padding-right 1rem
			justify-content: center
			align-items center
			text-align center
		h3
			margin-bottom .5rem

	@media screen and (min-width: 768px)
		section
			padding-top 1.5rem
			padding-bottom 1.5rem
		br
			display none
		h3
			margin-bottom .5rem
		.wrp
			flex-direction row
			justify-content: start
			align-items start
			text-align left


	</style>

<script setup lang="ts">
	</script>
