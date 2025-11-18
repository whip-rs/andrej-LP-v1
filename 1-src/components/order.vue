<template lang="pug">
	section.row.order#order-now
		.col-12
			h2.tc Наручи одмах:
		.col-lg-4
			img(src="/assets/img/liber-1-2.webp")
			h4 Књиге 1 и 2 (спојено):
			a(href="").btn.fill.mob-only Наручи СМС-ом <span>❯</span>
			a(href="").btn.fill.desk-only Наручи е-мејлом <span>❯</span>
			ul
				li 2400 РСД <span>+ поштарина</span>
				li Тврде корице са "кошуљицом"
				li 530 страна
				li Долази са мапом Адене
				li "Крваво праскозорје" је последње поглавље књиге 2 
		.col-lg-4
			img(src="/assets/img/liber-3.webp")
			h4 Само књига 3:
			a(href="").btn.fill.mob-only Наручи СМС-ом <span>❯</span>
			a(href="").btn.fill.desk-only Наручи е-мејлом <span>❯</span>
			ul
				li 2400 РСД <span>+ поштарина</span>
				li Тврде корице са "кошуљицом"
				li 456 страна
		.col-lg-4
			img(src="/assets/img/liber-combo.webp")
			h4 Комплет књига 1-3:
			a(href="").btn.fill.mob-only Наручи СМС-ом <span>❯</span>
			a(href="").btn.fill.desk-only Наручи е-мејлом <span>❯</span>
			ul
				li <span class="cross">4400 РСД</span> 3900 РСД <span>+ поштарина</span>
				li Тврде корице са "кошуљицом"
				li 986 страна
				li Долази са мапом Адене

		.col-md-6.cc.order-details
			span.shipping-ico
				icoShipping
			span
				h4.italic Детаљи испоруке:
			span.posta-logo
				icoPTT
			ul
				li Књиге се шаљу ПостЕкспрес-ом на кућну адресу
				li Цена поштарине је 600 РСД
				li Испорука се врши на територији целе Србије
				li Рок испоруке је 1-2 радна дана
				li Лично преузимање је могуће само у Нишу
</template>

<style lang="stylus" scoped>
	.order
		border-bottom 1px solid #222
	.order-details
		display flex
		flex-direction: column
	.posta-logo
		display flex
		height 1rem
		width 100%
		margin-bottom 1rem
	h2
		margin-bottom 1rem
	hr
		margin-bottom 1rem
	.col-lg-4
		padding-top 1rem
		padding-bottom 1rem
	img
		filter: drop-shadow(3px 0px 4px #000)
	a.btn
		margin-bottom .75rem
		span
			opacity 0
			margin-right 1rem
			transition: .3s
		&:hover span
			opacity 1	
			margin-right 0;
	ul li
		padding-bottom .75rem
		line-height 1.33
		&:last-of-type
			padding-bottom 0
	h4
		padding-bottom .5rem
	@media screen and (min-width $xs)
		.order-details
			border-top 0
			padding-top .5rem
	@media screen and (min-width $md)
		.order-details
			padding-top 1rem
			margin-top .5rem
			border-top: 1px dashed #333
	@media screen and (max-width $lg - 1px)
		.col-lg-4
			margin: 0.5rem 1rem
			border: 1px solid #333
			background-color: hsl(0 0% 8% / 1)
			border-radius: 0.5rem

	</style>

<script setup lang="ts">
	import icoShipping from '@/assets/svg/shipping.svg'
	import icoPTT from '@/assets/svg/posta-srbije.svg'
	</script>

