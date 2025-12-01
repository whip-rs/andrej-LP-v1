<template lang="pug">
	.cont
		hr.left
		.testimonialCarousel(ref="carousel")
			.content.wrp
				.single.active
					p “До сада нисмо имали прилике да се сусретнемо с оваквим делом на српском језику.”
					p.micro – Данко Камчевски, <span>Универзитет Метрополитан </span>
				.single
					p “За дивљење с обзиром да се ради о првенцу.”
					p.micro – Небојша Петковић
				.single
					p "Ризница увида у оперативни модел Зла.”
					p.micro – Ненад Стојановић, <span>whip.rs</span>
				.single
					p “Одушевљен.”
					p.micro – Дориан Нуај Бафомитрас
				.single
					p “Открива тамну страну у огољеном облику.”
					p.micro – Игор Јовановић, Ниш
				.single
					p “Дотакло сваки сегмент мога бића.”
					p.micro – Анонимна читатељка, Београд
			.indicator.wrp
				.circle.active
				.circle
				.circle
				.circle
				.circle
				.circle
		hr.right
	</template>
<!--	-->
<style lang="stylus" scoped>
	.testimonialCarousel
		display flex
		flex-direction column
		justify-content: space-between
		padding-left 1rem
		padding-right 1rem
		background-color #00000080
		padding-top .75rem
		padding-bottom .75rem
		user-select none
		width 100%
	.content
		position relative
		height 66px
		overflow hidden
		display block
	.indicator
		align-self center
		margin-bottom 0
		display flex
		margin-top .75rem
		gap .5rem
	.circle
		height .25rem
		width .25rem
		border-radius 1rem
		background-color #333
		transition .3s
	.circle.active
		background-color #a7885b
		// width: 1rem
	.single
		position absolute
		inset 0
		display flex
		flex-direction column
		justify-content center
		align-items center
		opacity 0
		transform translateX(12px)
		transform-origin: center center
		pointer-events none
		transition opacity .5s ease, transform .5s cubic-bezier(.2,.9,.2,1)
	p
		font-size 4.25vw
		line-height: 1.2
		// font-style: italic
		transform: translateX(12px)
		width: fit-content
		margin-bottom 6px
		opacity 0
		transition opacity .45s ease, transform .45s ease
	.micro
		color #bbb
		width auto
		font-style normal
		margin-bottom 0
		line-height 1
		opacity 0
		transition opacity .45s ease, transform .45s ease
	span
		color #777
	.single.active
		opacity 1
		transform translateX(0)
		pointer-events auto
	p:nth-of-type(1)
		transition-delay .06s
		opacity 1
		transform: translateX(0)
	p.micro
		transition-delay .12s
		opacity 1
		transform: skew(0deg) translateX(0)
	hr.left
		margin-top 1rem
		background: #333
		background: linear-gradient(-90deg,rgba(0, 0, 0, .5) 0%, rgba(255, 255, 255, .25));
	hr.right
		margin-bottom 1rem
		background: #333;
		background: linear-gradient(90deg,rgba(0, 0, 0, .5) 0%, rgba(255, 255, 255, .25));
		margin-bottom .5rem

@media screen and (min-width: 400px)
	p
		font-size 1rem
		
@media screen and (min-width: 768px)
	.single p:not(.micro)
		font-size 1.25rem
		// line-height 1
		margin-bottom .5rem
	.micro
		font-size .75rem
	.indicator
		margin-top .5rem
		margin-bottom .25rem

@media screen and (min-width: 1025px)
	.single
		align-items: start;
		p:not(.micro)
			font-size 1.125rem
			font-style italic
			transform skewx(5deg)
	.circle
		height .5rem
		width .5rem
		border-radius 1rem
	.wrp
		max-width 1440px
		padding-left 1rem
		padding-right 1rem
		margin-left auto
		margin-right auto
		width 100%
	.content
		position auto
		height 48px
	.indicator
		margin-bottom .5rem
	.cont
		// margin-top 2rem
		margin-bottom 2rem
@media screen and (min-width: 1440px)
	.content
		left 1rem
		
	</style>
<!--	-->
<script setup lang="ts">
	import { onMounted, onUnmounted, ref } from 'vue'

	const carousel = ref<HTMLElement | null>(null)
	let intervalId: ReturnType<typeof setInterval> | null = null
	let currentIndex = 0

	// Touch gesture data
	let startX = 0
	let startY = 0
	let startTime = 0
	let isTouching = false

	// Swipe tuning
	const BASE_THRESHOLD = 50
	const VERTICAL_CANCEL = 30
	const MOMENTUM_MULTIPLIER = 0.5

	function updateActive(newIndex: number) {
		const root = carousel.value
		if (!root) return

		const singles = Array.from(root.querySelectorAll<HTMLElement>('.single'))
		const circles = Array.from(root.querySelectorAll<HTMLElement>('.circle'))
		const total = singles.length
		if (total === 0) return

		newIndex = ((newIndex % total) + total) % total

		singles[currentIndex]?.classList.remove('active')
		circles[currentIndex]?.classList.remove('active')

		currentIndex = newIndex

		singles[currentIndex]?.classList.add('active')
		circles[currentIndex]?.classList.add('active')
	}

	function nextItem() { updateActive(currentIndex + 1) }
	function prevItem() { updateActive(currentIndex - 1) }

	// scheduleIdle: schedule work on idle or via timeout as a fallback
	const scheduleIdle = (fn: () => void) => {
		if (typeof (window as any).requestIdleCallback !== 'undefined') {
			(window as any).requestIdleCallback(fn, { timeout: 500 })
		} else {
			setTimeout(fn, 200)
		}
	}

	function resetInterval() {
		if (intervalId) clearInterval(intervalId)

		scheduleIdle(() => {
			intervalId = setInterval(() => nextItem(), 4000)
			// Desktop hover behavior should also be scheduled (so it doesn't block initial render)
			if (typeof window !== 'undefined') scheduleIdle(() => setupDesktopHover())
		})
	}

	/* -----------------------------------------
		 TOUCH SWIPE (MOBILE)
	----------------------------------------- */

	function onTouchStart(e: TouchEvent) {
		if (e.touches.length > 1) { isTouching = false; return }

		startX = e.touches[0].clientX
		startY = e.touches[0].clientY
		startTime = performance.now()
		isTouching = true

		if (intervalId) {
			clearInterval(intervalId)
			intervalId = null
		}
	}

	function onTouchMove(e: TouchEvent) {
		if (!isTouching) return

		const dx = e.touches[0].clientX - startX
		const dy = e.touches[0].clientY - startY

		if (Math.abs(dy) > VERTICAL_CANCEL && Math.abs(dy) > Math.abs(dx)) {
			isTouching = false
		}
	}

	function onTouchEnd(e: TouchEvent) {
		if (!isTouching) {
			resetInterval()
			return
		}

		const endX = e.changedTouches[0].clientX
		const delta = endX - startX
		const duration = performance.now() - startTime

		const speed = Math.max(1, 300 / duration)
		const effectiveDelta = delta * (1 + (speed - 1) * MOMENTUM_MULTIPLIER)

		if (Math.abs(effectiveDelta) > BASE_THRESHOLD) {
			if (effectiveDelta < 0) nextItem()
			else prevItem()
		}

		isTouching = false
		resetInterval()
	}

	/* -----------------------------------------
		 DESKTOP: HOVER INDICATORS TO JUMP
	----------------------------------------- */
	// Setup desktop hover behavior; returns a cleanup function for event handlers
	let hoverCleanup: (() => void) | null = null
	function setupDesktopHover(): (() => void) | undefined {
		const root = carousel.value
		if (!root) return

		const indicator = root.querySelector<HTMLElement>('.indicator')
		const circles = Array.from(root.querySelectorAll<HTMLElement>('.circle'))

		if (!indicator) return

		// Remove previous listeners if any
		if (hoverCleanup) {
			hoverCleanup()
			hoverCleanup = null
		}

		const handlers: Array<() => void> = []

		// Pause autoplay when hovering over the indicator strip
		const onIndicatorEnter = () => {
			if (intervalId) {
				clearInterval(intervalId)
				intervalId = null
			}
		}
		indicator.addEventListener('mouseenter', onIndicatorEnter)
		handlers.push(() => indicator.removeEventListener('mouseenter', onIndicatorEnter))

		// Resume autoplay after leaving indicator area
		const onIndicatorLeave = () => {
			if (!intervalId) resetInterval()
		}
		indicator.addEventListener('mouseleave', onIndicatorLeave)
		handlers.push(() => indicator.removeEventListener('mouseleave', onIndicatorLeave))

		// Hover a circle → jump instantly
		const circleHandlers: Array<() => void> = []
		circles.forEach((circle, index) => {
			const handler = () => updateActive(index)
			circle.addEventListener('mouseenter', handler)
			circleHandlers.push(() => circle.removeEventListener('mouseenter', handler))
		})
		handlers.push(() => circleHandlers.forEach(h => h()))

		hoverCleanup = () => handlers.forEach(h => h())
		return hoverCleanup
	}

	/* -----------------------------------------
		 MOUNT / UNMOUNT
	----------------------------------------- */
	onMounted(() => {
		const root = carousel.value
		if (!root) return

		intervalId = setInterval(() => nextItem(), 4000)

		// Touch swipe handlers
		root.addEventListener('touchstart', onTouchStart, { passive: true })
		root.addEventListener('touchmove', onTouchMove, { passive: true })
		root.addEventListener('touchend', onTouchEnd)

		// Schedule desktop hover behavior during idle time (don't block LCP/initial input)
		scheduleIdle(() => { setupDesktopHover() })
	})

	onUnmounted(() => {
		if (intervalId) clearInterval(intervalId)

		const root = carousel.value
		if (!root) return

		root.removeEventListener('touchstart', onTouchStart)
		root.removeEventListener('touchmove', onTouchMove)
		root.removeEventListener('touchend', onTouchEnd)
		// cleanup any hover listeners
		if (hoverCleanup) {
			hoverCleanup()
			hoverCleanup = null
		}
	})

	</script>
