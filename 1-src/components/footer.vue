<template lang="pug">
	footer
		.row.soc-media
			.col-12
				h4.tc Изнесите Ваше искуство <br>на нашим страницама:
			.col
				a(href="https://www.instagram.com/chronica.inqvisitoris").ico
					InstagramIcon.ig
					p Instagram
			.col
				a(href="https://x.com/chronica_inqv").ico
					TwitterIcon.twx
					p Twitter/X
			.col
				a(href="https://www.facebook.com/chronica.inqvisitoris").ico
					FacebookIcon.fb
					p Facebook
			hr
			.col-12
				h3.tc И чувајте се од Зла.
		.copyright.no-click
			p
				| 2024-
				span {{ new Date().getFullYear() }}
				|  © Андреј Протић. 
				br
				| Сва права задржана. 
				br
				| Издао ЛОГОС д.о.о.
	</template>
<!--————————— -->
<style lang="stylus" scoped>
	h4
		margin .5rem 0 .75rem
	a svg
		fill white
	hr
		height 1px
		margin 1rem
		background-color #222
	.copyright
		background-color black
		border-top 1px solid #222
		padding 1rem
		p
			text-align center
			margin 0
			color white
			opacity .333
			font-family system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
			font-size .666rem
			text-transform uppercase
			letter-spacing .125rem
			font-weight 300
	footer
		padding-top 1rem
		z-index 0
		@media screen and (min-width $xs)
			.soc-media
				display flex
				flex-direction column
			.copyright
				br
					display inline-block
			h4
				margin .5rem 0 .75rem
			a.ico
				width 100%
		a.ico
			display flex
			flex-direction column
			align-items center
			margin 1rem 0 .5rem
			text-decoration none
			user-select none
			-webkit-user-select none
			-moz-user-select none
			-ms-user-select none
			-webkit-user-drag none
			user-drag none
			draggable false
			svg
				transition .3s
				width 4rem
				opacity .25
			p
				transition .3s
				opacity .25
				text-transform uppercase
				font-family system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
				font-size .875rem
				letter-spacing .2rem
				margin .5rem 0 0
			&:hover
				svg
					opacity 1
				p
					opacity .66

		@media screen and (min-width 480px)
			.soc-media
				display flex
				flex-direction row
				max-width 768px
				margin 0 auto
				br
					display inline-block
			.copyright
				br
					display none
	</style>

<script setup lang="ts">
	import FacebookIcon from '@/assets/svg/facebook.svg'
	import InstagramIcon from '@/assets/svg/instagram.svg'
	import TwitterIcon from '@/assets/svg/twitter-x.svg'
	</script>
