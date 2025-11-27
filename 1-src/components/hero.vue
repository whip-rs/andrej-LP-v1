<template lang="pug">
	section.hero
		.wrp
			.hero-img
				img(src="/assets/img/liber-1-2-mobile.webp").deep-shadow.mobile
				img(src="/assets/img/liber-1-2-desktop.webp").deep-shadow.desktop

			.txt-and-buttons
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
						a.btn.fill(@click="$emit('open-modal', 'ordering-form')") <span>Наручи одмах</span><span>❯</span>
						p.micro И упознај себе и свет из једног сасвим новог угла.
					.read
						a.btn.void(@click="$emit('open-modal', 'krvavo-praskozorje')") Прочитај "Крваво праскозорје" бесплатно
			
		testimonialCarousel
				
		ribbons

	</template>
<!--	-->
<style lang="stylus" scoped>
	@media screen and (min-width: 320px)
		.hero
			display flex
			flex-direction column
			min-height 100vh
			height 100%
			width 100%
			border-bottom 1px solid #333
			background-image url('assets/img/stone-texture-01.webp')
			background-size cover
			background-position center
			padding-top 1.5rem
			padding-bottom 1.5rem
		.hero-img
			height: 100%;
			margin-bottom: -7vh;
			width: 100%;
			display: flex;
			img
				margin: auto;
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

	@media screen and (min-width: 576px)
		.hero
			.hero-img
				img
					max-height 640px
		.text
			gap 1rem
		h1
			font-size 6.75vw
			line-height 1
		h2
			line-height 1.2
			font-size 3.75vw
		ul
			gap .5rem
		.buttons
			display flex
			flex-direction row
			.order, .read
				flex 1

	@media screen and (min-width: 768px)
		.hero
			.hero-img
				img
					max-height 640px
		.buttons
			display flex
			flex-direction row
			.order, .read
				flex 1

	@media screen and (min-width: 1024px)
		.wrp
			display flex	

	@media screen and (min-width: 1025px)
		.mobile
			display none
		.desktop
			display block
		.hero
			padding-top 1rem
			padding-bottom 1rem
		.wrp
			display flex
			flex-wrap wrap
			gap 1rem
			max-width: 1440px
			height 100%
			margin auto
			padding-left 1rem
			padding-right 1rem
		.txt-and-buttons
			display flex
			flex-direction column
			width calc(50% - .5rem)
		.text
			height min-content
			margin-top auto
			padding-right 0 
			padding 0
		.hero
			.hero-img
				order 2
				width calc(50% - .5rem)
		.buttons
			margin-bottom auto
			order 3
			flex-direction column
			padding 0
		.wrp
			z-index 1
			// order 4
		.cont
			margin-top -2.75rem
			margin-bottom 1rem
		.ribbons
			order 5
			padding-top 0
			flex-direction row
			margin-left auto
			margin-right auto
			z-index 2
		h1
			font-size 2.75rem
		h2
			font-size 1.75rem


	@media screen and (min-height: 890px)
		.ribbons
			display flex
			gap 1rem
			padding-left 1rem
			padding-right 1rem
			margin-top auto
		.hero .wrp
			margin-bottom 1rem


	@media screen and (min-width: 1170px) and (min-height: 890px)
		.hero
			.hero-img
				img
					max-height 75vh
		.wrp
			pointer-events: none
		.buttons
			pointer-events auto
		h1
			font-size 4.25vh
			margin-bottom 0
		h2
			font-size 2.5vh
		.cont
			margin-bottom auto
			margin-top -13vh
			// position relative
		.ico
			max-width 5rem
			
	@media screen and (min-width: 1366px) and (min-height: 1024px)
		.hero
			padding-top 2rem
			padding-bottom 2rem
			background-repeat: no-repeat;
			background-position: 0 0px;
			transition .3s
			
	</style>
<!--	-->
<script setup lang="ts">
	import ribbons from '/components/ribbons.vue'
	import testimonialCarousel from '/components/testimonialCarousel.vue'

	</script>

