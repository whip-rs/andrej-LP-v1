<template lang="pug">
	section.hero

		.hero-img
			img(src="/assets/img/liber-1-2.webp").deep-shadow
			//- img(src="/assets/img/liber-1-2-mobile.webp").deep-shadow

		.text
			h1 Загледај дубље иза <i>најмрачнијих</i> сукоба човечанства:
			h2 Сага о духовној борби Добра и Зла унутар слојевитог секуларног друштва, на рубу маште и стварног
			//- замршеног, слојевитог, еволуираног, вишеслојног
			ul
				li Психологија
				li Философија и духовност
				li Мрачна фантастика

		.buttons
			.order
				a(href="#order-now").btn.fill <span>Наручи одмах</span><span>❯</span>
				p.micro И упознај себе и свет из једног сасвим новог угла.
			.read
				a.btn.void(@click="$emit('open-modal', 'krvavo-praskozorje')") Прочитај "Крваво праскозорје" бесплатно

		hr.left.mobile
		testimonialCarousel
		hr.right.mobile

		ribbons

	</template>
<!--	-->
<style lang="stylus" scoped>
	@media screen and (min-width: 320px) and (max-width: 767px)
		.hero
			display flex
			flex-direction column
			min-height 100vh
			height 100%
			width 100%
			border-bottom 1px solid #222
			background-image url('assets/img/stone-texture-01.webp')
			background-size cover
			background-position center
			padding-top 1.5rem
			padding-bottom 1.5rem
		.hero-img
			height 100%
			margin-bottom -7vh
		// .mobile
		.desktop
			display none
		.text
			padding-left 1rem
			padding-right 1rem
			display flex
			flex-direction column
			gap 1rem
			// position relative
		h1
			line-height 1
			font-size 10.4vw
			text-shadow: 4px 4px 4px black;
		h2
			line-height 1.25
			font-size 6vw
		ul
			display flex
			flex-direction column
			gap .66rem
			margin-bottom 1.25rem
		hr.left
			margin-top 1rem
			background: #333
			background: linear-gradient(-90deg,rgba(0, 0, 0, .5) 0%, rgba(255, 255, 255, .25));
		hr.right
			margin-bottom 1rem
			background: #333;
			background: linear-gradient(90deg,rgba(0, 0, 0, .5) 0%, rgba(255, 255, 255, .25));
			margin-bottom .5rem
		.buttons
			display flex
			flex-direction column
			gap 1rem
			padding-left 1rem
			padding-right 1rem
			.order
				order 2
			.micro
				margin-top .25rem
				margin-bottom 0
	@media screen and (min-width: 1200px)
		.main
			display flex
		.hero-img
			order 2
		.text
			order 1
		.ribbons
			display flex
			gap 1rem

	</style>
<!--	-->
<script setup lang="ts">
	import ribbons from '/components/ribbons.vue'
	import testimonialCarousel from '/components/testimonialCarousel.vue'
	</script>

