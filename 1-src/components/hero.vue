<template lang="pug">
	section.hero
		.row
			.col-md-6.hero-slika.order-md-2
				img(src="/assets/img/liber-1-2.webp").deep-shadow
			.col-md-6.order-md-1
				h1 Откријте истину иза најмрачнијих сукоба човечанства:
				h4.no-mb Сага о духовној борби Добра и Зла усред развијеног секуларног друштва, на танком рубу између маште и стварности.
				ul
					li Фантастика
					li Психологија
					li Духовност
					//- li Мрачна Фантастика
				a.btn.void.modal-call(data-src="krvavo-praskozorje.html") Прочитај "Крваво праскозорје" бесплатно
				a(href="#order-now").btn.fill <span>Наручи одмах</span><span>❯</span>
				p.micro И доживи себе и свет на један нов, необичан начин.

			//- .col-12.addons
				p.tc Бесплатна достава на кућну адресу
				p.tc Реверзибилна куповина до 14 дана
				p.tc Бесплатан повраћај у случају незадовољства
</template>

<style lang="stylus" scoped>
	.hero
		min-height 100vh
		width 100%
		display flex
		justify-content: center
		align-items: center
		background-image url('assets/img/stone-texture-01.webp')
		background-size cover
		background-position center
		border-bottom 1px solid #222
	img
		margin: auto
	p.micro
		margin-bottom 0
	a.btn.void
		margin-bottom 1rem
	a.btn.fill
		margin-bottom .5rem
	ul li:nth-of-type(3)
		padding-bottom 0.25rem
	ul
		li
			padding-bottom .5rem
	.addons
		order 3
		display flex
		flex-wrap wrap
		flex-direction column
	a.btn
		height 3.5rem
		box-shadow: 0px 0.5rem 0.5rem 0rem #00000080;
	a.btn.fill
		border: 1px solid #a7885b80
		color: #a7885b
		background-color: #a88a5d21
		letter-spacing: 0.1rem
	a.btn.void
		color: #fff
		border: 1px solid #828282a8
		background-color: #ffffff08
	@media screen and (min-width: $xs)
		.hero
			min-height 100vh
		.hero-slika
			display flex
		img
			width auto
			height auto
			max-height 75vh
			margin auto
		h1
			font-size 10vw
			margin-top .75rem
			margin-bottom .75rem
		h4
			font-size 6vw
			margin-bottom .75rem
		ul
			margin-bottom .875rem
	.order
		.col-lg-4
			display flex
			flex-direction column
		img
			margin-bottom .5rem
	@media screen and (min-width: $sm)
		.hero
			.hero-slika
				img
					max-height 66vh
			h1
				font-size 3rem
			h4
				font-size 2rem
	@media screen and (min-width: $lg)
		.hero
			min-height 75vh
			h1
				font-size 3.25rem
			h4
				font-size 1.85rem
			.order-md-1
				display flex
				flex-direction column
				justify-content: center
			.hero-slika
				height: 100%
				max-height: 75vh
			.order
				.col-lg-4
					img
						margin-left: auto
						margin-right: auto
						margin-top: 0
						margin-bottom: 0.5rem
	</style>

<script setup lang="ts">
	</script>

