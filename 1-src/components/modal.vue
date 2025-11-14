<template lang="pug">
	div#modal.hide
		.window
			.relative
				.close.absolute
					img(src="./static/img/ux-ico-close.svg")
			div.contents
				iframe#contentFrame(src="about:blank" height="100%" width="100%")
		.overlay
	</template>

<style lang="stylus" scoped>
.hide
	opacity 0 !important
	pointer-events none !important
	z-index -1 !important

#modal
	transition .2s
	pointer-events all
	display flex
	flex-direction: column
	height 100%
	width 100%
	align-items: center
	justify-content: center
	z-index 1000
	position fixed
	top 0
	right 0
	left 0
	bottom 0
	padding: 1rem
	transition .3s
	will-change: backdrop-filter
	backdrop-filter: blur(8px)
	// will-change: backdrop-filter
	// backdrop-filter: blur(8px)

.window
	box-shadow:
		0px 0.5rem 1rem #000000bf,
		0px 1rem 2rem #00000080
	width: 100%
	display: flex
	flex-direction: column
	z-index: 1000
	height 100%
	max-width: 720px
	max-height: 720px
	border-radius .75rem
	background-color: black
	@media screen and (min-width: $md)
		padding 1rem
		border 1px solid #333
		background-color: #070707
	.close
		display flex
		align-self: end
		cursor pointer
		// ———
		height: 3rem
		width: 3rem
		padding: .75rem
		// ———
		background-color: black
		border 1px solid #333
		border-top 0
		border-right 0
		border-radius: 0 .75rem 0 .75rem
		box-shadow -4px 4px 8px 0 black
		@media screen and (min-width: $xs)
			top 1px
			right 1px
		
		@media screen and (min-width: $md)
			// background-color: #070707
			top: -1rem
			right: -1rem
		// ———
		img
			opacity: 0.25
			transition .2s
		&:hover
			img
				opacity: 1
				// background-color: #171717

.overlay
	z-index 900
	background-color #000000cc
	position absolute
	height 100%
	width 100%		

.contents
	display: block
	width: 100%
	height: 100%
	flex: 1
	background-color: #000000
	border: 1px solid #333
	padding: 1rem
	border-radius: .5rem
	
.window .relative
	margin-left auto
	z-index 1000	
	</style>

<script setup lang="ts">
	</script>
