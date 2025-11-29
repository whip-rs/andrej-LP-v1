<template lang="pug">

section.primitiveMan
	.wrp
		.image
			img(src="/assets/img/primitive-man.webp")
		.text
			h1 Примитивни човек
			p Како се појединац развија од најосновнијег, животињског, до изврсног и коначно Божанског, нема сталан увид у своје место у мрежи свег постојања.
			p Греши, пада, смеје се, учи, заборавља; учи изнова, тугује, диже руке, продужава...
			p Лута.
			p Па ипак, сваког јутра, као да се буди из другог живота, неког далеког сна.
			p Често ружног. Често болног. Осећа свет пун бола, аномије, очајања, самоубилачког духа. Ужаса и безнађа.
			p Но понекад, као да летњи поветарац провејава преко топлих рамена.
			p Добро.
			p Вољено.
			p А некад, као да може да помери било коју планину. Сам.
			p Напред снажно упркос олуји сумње.
			p Не више тако примитивна сила.
			p Ватра која штити, истражује и осваја. Постојана и испуњена у скромној слави свог несаломивог бића.
			p Нека тај дах Божанског буде у теби, и свима нама.
			p Заједно.
			p За сва времена.


	</template>

<style lang="stylus" scoped>
	.wrp
		display flex
		max-width: 920px
		padding-left 1rem
		padding-right 1rem
		margin-left auto
		margin-right auto
		gap 1.5rem

	p:last-of-type
		margin-bottom 0
		line-height 1
	h1
		margin-bottom 1rem
		line-height 1

	// Mobile: image behind text with opacity
	@media screen and (min-width: 320px)
	
		.primitiveMan
			padding-top 2rem
			padding-bottom 2rem
	
		.wrp
			position relative
			flex-direction column
			max-width: 480px
			margin-left auto
			margin-right auto
			
		.image
			width 100%
			height 100%
			display flex
			
		img
			padding 1rem
			position absolute
			top 0
			left -48.5%
			max-height 100%
			object-fit cover
			opacity .5
			z-index 0
			// margin auto
		
		.text
			z-index 1
			text-shadow 0 3px 3px black
			text-wrap pretty

	@media screen and (min-width: 442px)
		img
			left -208px
			padding 0
	
	@media screen and (min-width: 768px)
		.primitiveMan
			padding-top 1.5rem
			padding-bottom 1.5rem
		.wrp
			max-width: 100%		
		img
			opacity 1
			padding 0
			left 0
			object-fit contain
			object-position left center
		.image
			flex 1	
		.text
			max-width 60%
			margin-left auto
		
	@media screen and (min-width: 1024px)
		.wrp
			position relative
			flex-direction row
			align-items flex-start
			max-width 920px
		.image
			position absolute
			left 0
			top 0
			bottom 0
			width 42%
			display flex
			align-items center
			justify-content flex-start
			z-index 0
		.image img
			height 100%
			width auto
			object-fit contain
			object-position left center
			opacity 1
		.text
			position relative
			z-index 1
			margin-left 44%
			max-width 56%


	</style>

<script setup lang="ts">
	</script>
