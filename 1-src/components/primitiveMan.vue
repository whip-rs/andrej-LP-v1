<template lang="pug">

section.primitiveMan(:class="{ expanded }" :style="{ maxHeight: expanded ? expandedHeight + 'px' : '224px' }" ref="sectionEl")
	.wrp(ref="wrpEl")
		.image
			img(src="/assets/img/primitive-man.webp" alt="Примитивни човек" loading="lazy")
		.text
			h1 Примитивни човек
			.text-content
				p Како се појединац развија од најосновнијег, животињског, до изврсног и коначно Божанског, нема сталан увид у своје место у мрежи свег постојања.
				p Греши, пада, смеје се, учи, заборавља... Учи изнова, тугује, диже руке, продужава...
				p Лута.
				p Па ипак, сваког јутра, као да се буди из другог живота, неког далеког сна.
				p Често ружног. Често болног. Груди пуне аномије, очајања, самоубилачког духа. Ужаса и безнађа.
				p Но понекад, као кад летњи поветарац провејава преко топлих рамена.
				p Добро.
				p Вољено.
				p А понекад, као да може да помери било коју планину. Сам.
				p Напред снажно упркос олуји сумње.
				p Примитивна сила, не више.
				p Ватра која штити, истражује и осваја. Постојана и испуњена у скромној слави свог несаломивог бића.
				p Нека тај дах Божанског буде у теби, и свима нама.
				p Заједно.
				p За сва времена.
.wrp
	button.cover-toggle(aria-label="Развиј/скупи одељак" @click="toggle")
		svg(width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg")
			path(:d="expanded ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6'" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")


	</template>

<style lang="stylus" scoped>
	.primitiveMan
		position relative
		overflow hidden
		transition max-height .7s ease-in-out
		// persistent veil element for smooth opacity animation
		&:after
			content ''
			position absolute
			left 0
			right 0
			bottom 0
			height 96px
			pointer-events none
			background linear-gradient(0deg, rgba(0,0,0,.85) 0%, rgba(0,0,0,0) 100%)
			opacity 0
			transition opacity .6s ease-in-out

	.wrp
		display flex
		max-width: 920px
		padding-left 1rem
		padding-right 1rem
		margin-left auto
		margin-right auto
		gap 1.5rem
			// persistent veil element for smooth opacity animation
			&:after
				content ''
				position absolute
				left 0
				right 0
				bottom 0
				height 96px
				pointer-events none
				background linear-gradient(0deg, rgba(0,0,0,.85) 0%, rgba(0,0,0,0) 100%)
				opacity 0
				transition opacity .6s ease-in-out

	p:last-of-type
		margin-bottom 0
		line-height 1
	h1
		margin-bottom 1rem
		line-height 1

	.text
		position relative
		// opacity 1
		// no extra padding needed; overlay toggle will float above
	// gradient veil when collapsed (animated by opacity)
	.primitiveMan:not(.expanded):after
		opacity 1

	.cover-toggle
		position absolute
		bottom 0
		height 96px
		// smooth arrow rotation
		svg
			transition transform .6s ease-in-out
			transform-origin center
			transform rotate(0deg)
		display flex
		align-items flex-end
		justify-content flex-end
		background transparent
		border none
		cursor pointer
		padding 0 1rem .5rem 0
		z-index 3
		opacity .95
		transition .2s ease
		&:hover
			opacity 1
		&:focus
			outline none
		&:active path
			transform translateY(1px)

			svg
				transform rotate(180deg)
	// Position button relative to visible text area
	.primitiveMan:not(.expanded) .cover-toggle
		right 0
		left auto
		width auto

	.primitiveMan.expanded .cover-toggle
		right 0
		left auto
		height 44px
		width auto
		svg
			transform rotate(180deg)

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
			
		.cover-toggle
			right 0
			
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
		// Position button at bottom-right of visible text column
		.cover-toggle
			right 1rem
		
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
		// Position button at bottom-right of visible text column (desktop)
		.cover-toggle
			right 1rem


	</style>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const expanded = ref(false)
const sectionEl = ref<HTMLElement | null>(null)
const wrpEl = ref<HTMLElement | null>(null)
const expandedHeight = ref(0)

const measure = () => {
	if (!sectionEl.value) return
	// Measure scrollHeight which gives us the full content height even when clipped
	expandedHeight.value = sectionEl.value.scrollHeight
}

const toggle = async () => {
	if (!expanded.value) {
		await nextTick()
		measure()
	}
	expanded.value = !expanded.value
}

const onResize = () => {
	if (expanded.value) {
		measure()
	}
}

onMounted(() => {
	measure()
	window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', onResize)
})
</script>
