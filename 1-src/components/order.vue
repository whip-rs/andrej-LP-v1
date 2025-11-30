<template lang="pug">
	section
		.row.order#order-now
			.col-12
				h2.tc Наручи одмах:
			.cards

				.card
					img(src="/assets/img/liber-1-2.webp")
					h4 Књиге 1 и 2 (спојено):
					ul
						li Тврде корице са кошуљицом
						li 531 страна (са индексом)
						li Долази са мапом Адене у средњем формату
						li.cena 3300 рсд
					a.btn.fill(@click="$emit('open-modal', 'ordering-form', '1-2')") Наручи књиге 1 и 2 (спојено) <span>❯</span>
				.card
					img(src="/assets/img/liber-3.webp")
					h4 Књига 3:
					ul
						li Тврде корице са кошуљицом
						li 456 страна (са индексом)
						li.cena 2800 рсд
					a.btn.fill(@click="$emit('open-modal', 'ordering-form', '3')") Наручи књигу 3<span>❯</span>
				.card
					img(src="/assets/img/liber-komplet.webp")
					h4 Комплет:
					ul
						li Тврде корице са кошуљицом
						li 986 страна (са индексима)
						li Долази са Адене у средњем формату
						li.cena <span class="cross">5100 рсд</span> 4500 рсд
					a.btn.fill(@click="$emit('open-modal', 'ordering-form', '1-3')") Наручи све 3 књиге <span>❯</span>
		
			.col-md-6.cc
				.order-details
					h4 Детаљи испоруке:
					ul
						li Књиге се испоручују курирском службом на личну адресу
						li Поштарина у Србији је бесплатна, са роком од 1-2 радна дана
						li Лично преузимање истог или следећег дана је могуће само у Нишу
						li 	За интернационалне поруџбине, <a href="mailto:porudzbine@adena.rs">контакт</a>.
			hr
			ribbons

	</template>

<style lang="stylus" scoped>
	section
		background-image url('@/assets/img/stone-texture-01.webp')
		background-size cover
		background-position center


	a
		color #a7885b
		transition: .3s
		text-decoration none
		border-bottom 1px solid #a7885b
		&:hover
			color white
			border-bottom-color white

	.cena
		font-variant-caps: small-caps
	.order
		padding-left 1rem
		padding-right 1rem
	.cards
		display flex
		flex-wrap wrap
		gap 1rem
		margin-bottom 1.5rem
	.card
		border: 1px solid #212121;
		background-color: #0a0a0a;
		border-radius: 0.5rem;
		padding 1.25rem
		display flex
		flex-direction column
		flex 1
		box-shadow: 0px 1rem 1rem 0rem #00000040, 0px .5rem .5rem 0rem #00000040
		img
			margin-bottom .5rem
		a.btn.fill
			margin-top auto
	.order-details
		display flex
		flex-direction: column
		ul
			margin-bottom 0
	hr
		margin-top 1.5rem
		margin-bottom 1.5rem
	.ribbons
		padding-top 0
	.posta-logo
		display flex
		height 1rem
		width 100%
		margin-bottom 1rem
	h2
		margin-bottom 1rem
	.col-lg-4
		padding-top 1rem
		padding-bottom 1rem
	img
		filter: drop-shadow(3px 0px 4px #000)
	a.btn
		span
			opacity 0
			margin-right 1rem
			transition: .3s
		&:hover span
			opacity 1	
			margin-right 0;
	ul
		margin-bottom 1rem
	ul li
		padding-bottom .5rem
		line-height 1.33
		&:last-of-type
			padding-bottom 0
	h4
		padding-bottom .5rem

	@media screen and (max-width $lg - 1px)
		.col-lg-4
			margin: 0.5rem 1rem
			border: 1px solid #333
			background-color: hsl(0 0% 8% / 1)
			border-radius: 0.5rem

	</style>

<script setup lang="ts">
	import icoShipping from "/assets/svg/shipping.svg"
	import icoPTT from "/assets/svg/posta-srbije.svg"
	import ribbons from '/components/ribbons.vue'
	
	defineEmits(['open-modal'])
	</script>


