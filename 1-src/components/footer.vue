<template lang="pug">
	footer
		.soc-media
			.col-12
				h4.tc Посетите нас и оставите Ваше<br> искуство на страницама:
			.icons
				.icon
					a(href="https://www.facebook.com/chronica.inqvisitoris").ico
						FacebookIcon.fb
						p Facebook
				.icon
					a(href="https://www.instagram.com/chronica.inqvisitoris").ico
						InstagramIcon.ig
						p Instagram
				.icon
					a(href="https://x.com/chronica_inqv").ico
						TwitterIcon.twx
						p Twitter/X

		.msg
			h3.tc И чувајте се од Злa.
			
		hr
		.copyright.no-click
			.separator
				logoSeparator.spec
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

	footer
		background-image url('@/assets/img/stone-texture-01.webp')
		background-position: center
		background-size: cover
		display flex
		flex-direction column

		.soc-media
			padding-top 1.5rem
			display flex
			flex-direction column
			flex-wrap wrap
		.icons
			display flex
			justify-content: center
			align-items center
			margin-left auto
			margin-right auto
			.ico
				margin-left 1rem
				margin-right 1rem
		.msg
			display flex
			justify-content center
			align-items center
			padding-top 1.5rem
			padding-bottom 1.5rem

		h4
			margin-bottom 1.5rem
			text-wrap pretty
		
		h3
			color white
			// opacity .25
			text-transform uppercase
			letter-spacing .25rem
			font-size 1rem
			line-height 1
			margin 0

		a.ico
			display flex
			flex-direction column
			align-items center
			text-decoration none
			user-select none
			-webkit-user-drag none
			user-drag none
			draggable false

			svg
				transition .3s
				width 4rem
				fill transparent
				fill white
				opacity .2

			p
				color white
				opacity .2
				transition .3s
				text-transform uppercase
				font-family system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
				font-size .875rem
				letter-spacing .2rem
				margin .5rem 0 0
				
			&:hover
				svg
					fill #a7885b
					opacity 1
				p
					opacity 1
					color white
			
			&:active
				svg
					opacity .5
				p
					opacity .5



		hr
			height 1px
			background: #A7885B;
			background: linear-gradient(90deg,rgba(167, 136, 91, 0) 0%, rgba(167, 136, 91, 1) 50%, rgba(167, 136, 91, 0) 100%);
			opacity .75

		.copyright
			// background black
			background #00000080
			border-top 1px solid #222
			padding 1rem
			display flex
			flex-direction column
			justify-content: center
			align-items center

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

			span
				font-weight 300

		@media screen and (min-width 320px)
			.copyright
				min-height 3rem
				br
					display inline-block
					
			.icons
				flex-direction column
				gap 1.5rem
				
			.separator
				align-self center
				position absolute
				
				svg.spec
					height 1.5rem
					width 1.5rem
					position relative
					display flex
					top -2.4rem					


		@media screen and (min-width 580px)
			.copyright
				min-height auto		
			.soc-media
				display flex
				flex-direction row
				max-width 768px
				margin 0 auto
				br
					display inline-block
			.icons
				flex-direction row			
			.copyright
				br
					display none
			.separator
				svg.spec
					top -1.5rem			


	</style>

<script setup lang="ts">
	import FacebookIcon from '@/assets/svg/facebook.svg'
	import InstagramIcon from '@/assets/svg/instagram.svg'
	import TwitterIcon from '@/assets/svg/twitter-x.svg'
	import logoSeparator from '@/assets/svg/logoSeparator.svg'
	</script>
