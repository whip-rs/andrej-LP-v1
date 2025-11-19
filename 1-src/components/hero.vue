<template lang="pug">
	section.hero
		.main
			.hero-img
				img(src="/assets/img/liber-1-2.webp").deep-shadow
			.text
				h1 Загледај дубље од <i>најмрачнијих</i> сукоба човечанства:
				h2 Сага о духовној борби Добра и Зла унутар слојевитог секуларног друштва, на рубу маште и стварног
				//- замршеног, слојевитог, еволуираног, вишеслојног
				ul
					li Фантастика
					li Психологија
					li Духовност
			.buttons
				.order
					a(href="#order-now").btn.fill <span>Наручи одмах</span><span>❯</span>
					p.micro И упознај себе и свет на један сасвим нови начин.
				.read
					a.btn.void(@click="$emit('open-modal', 'krvavo-praskozorje')") Прочитај "Крваво праскозорје" бесплатно
		.ribbons
			.bit
				shipping.ico
				.copy
					p Бесплатна достава
					p.micro на територији Србије
			.bit
				guarantee01.ico
				.copy
					p Гаранција задовољствa
					p.micro у супротном пун повраћај новца и бесплатна повратна поштарина до 30 дана од испоруке
			.bit
				clock.ico#clock
				.copy
					p Испорука за 24-48ч
					p.micro Радним данима
	</template>
<!--  -->
<style lang="stylus" scoped>

	@media screen and (min-width: 320px)
		.hero
			display flex
			flex-direction column
			min-height 100vh
			gap 1rem
			border-bottom 1px solid #222
			background-image url('assets/img/stone-texture-01.webp')
			background-size cover
			background-position center
			padding-top 1rem
			padding-bottom 1rem
		.hero-img
			height 100%
			margin-bottom 1rem
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
		h2
			line-height 1.25
			font-size 6vw
		ul
			display flex
			flex-direction column
			gap .66rem
			margin-bottom 1.25rem
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
		.ribbons
			padding-left 1rem
			padding-right 1rem
			display flex
			flex-direction column
			gap .5rem
		.bit
			display flex
			gap 1rem
		.copy
			display flex
			flex-direction column
			justify-content: center
			p
				margin-bottom 0
		.micro
			margin-bottom 0
		.ico
			height 100%
			width 100%
			max-width 4rem
			fill #a7885b
		#clock
			padding .5rem
			
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
		.bit
			width 33.33%
	
	


	</style>
<!--  -->
<script setup lang="ts">
	import shipping from '/assets/svg/shipping.svg'
	import guarantee01 from '/assets/svg/guarantee-01.svg'
	import clock from '/assets/svg/time.svg'
	</script>

