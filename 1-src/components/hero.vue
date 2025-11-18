<template lang="pug">
	section.hero
		img(src="/assets/img/liber-1-2.webp").deep-shadow
		.flex-col
			h1 Увиди суштину иза <i>најмрачнијих</i> сукоба човечанства:
			h2.no-mb Сага о духовној борби Добра и Зла унутар слојевитог секуларног друштва, на рубу маште и стварног
			//- замршеног, слојевитог, еволуираног, вишеслојног
			ul
				li Фантастика
				li Психологија
				li Духовност
			//- li Мрачна Фантастика
			a(href="#order-now").btn.fill <span>Наручи одмах</span><span>❯</span>
			a.btn.void(@click="$emit('open-modal', 'krvavo-praskozorje')") Прочитај "Крваво праскозорје" бесплатно
			p.micro И доживи себе и свет на један сасвим нов начин.
		.flex-row.addons
			.flex
				shipping.ico
				p Бесплатна достава на тлу Србије
			.flex
				guarantee01.ico
				.flex-col
					p Гаранција задовољствa
					p.micro у супротном пун повраћај новца до 30 дана, са бесплатном повратном поштарином
			.flex
				clock.ico#clock
				p Испорука у року од 24-48ч радним данима
</template>
<!--  -->
<style lang="stylus" scoped>
	@media screen and (min-width: 320px)
		.hero
			background-image url('assets/img/stone-texture-01.webp')
			background-size cover
			background-position center
			border-bottom 1px solid #222
			display flex
			flex-direction column
			min-height 100vh
			padding 1rem
			img
				width auto
				margin-top 1rem
				margin-bottom 1.5rem
		h1
			font-size 9.5vw
			margin-bottom 1rem
		h2
			font-size 5.5vw
			line-height 1.25
			margin-bottom 1rem
		ul li
			margin-bottom .5rem
			&:last-of-type
				margin-bottom 0
		ul
			margin-bottom 1.5rem
		a.btn
			margin-bottom 1rem
			&:last-of-type
				margin-bottom .5rem
			
		.micro
			margin-bottom 1rem
		.addons
			p
				margin-bottom 0
			.flex
				// justify-content: center
				align-items center
				margin-bottom .5rem
			.ico
				max-height 4rem
				height 100%
				width 100%
				max-width 4rem
				margin-right 1rem
				fill #a7885b
			#clock
				padding .5rem
	// @media screen and (min-width: 440px)
		// .hero
	</style>
<!--  -->
<script setup lang="ts">
	import shipping from '/assets/svg/shipping.svg'
	import guarantee01 from '/assets/svg/guarantee-01.svg'
	import clock from '/assets/svg/time.svg'
	</script>

