<template lang="pug">
	section
		.row.about
			.col-md-5.cc
				h1.tc О књизи:
				img(src="/assets/img/liber-1-2-alt.webp")
				p "Chronica Inqvisitoris" Андреја Протића је роман епске фантастике који свезује бројне културе човечанства у магичну, а опет сурово реалну причу. Дешава се на континенту Адена, са мајором Лонгином, чланом Свете Инквизиције, као протагонистом у борби против духовне корупције.
				p Сем маштовите забаве, овај мрачни еп је намењен ширењу личне свести и личној рефлексији на најдубља питања психологије, духовности и филозофије са којима се за живота сусреће свако од нас.
			.col-md-5.cc
				h1.tc О аутору:
				img(src="/assets/img/andrej.webp").author
				p Андреј Протић, рођен у месецу Libra 1974. у Београду, студирао је историју, теологију, комуникологију и безбедност. Професионално је мајор полиције Србије.
				p Више од 25 година се неформално бави проучавањем феномена система веровања и алтернативне религиозности, верског радикализма и екстремизма, и појава сектног и манипулативног деловања.
			.col-12
				.button.col-md-6.col-lg-4.cc
					a.btn.fill(@click="$emit('open-modal', 'ordering-form')") <span>Наручи одмах</span><span>❯</span>
	</template>

<style lang="stylus" scoped>
	section
		background-image url('@/assets/img/bgs-02.webp')
		background-size contain
		// background-repeat none
		background-position center

	h1
		margin-bottom 1.5rem
	.col-md-5
		display flex
		flex-direction column
		margin-bottom .5rem
	img
		margin-left: auto
		margin-right: auto
		margin-bottom: 1rem
		height: auto
		width: auto
		max-height: 320px
		max-width: 100%
	.author
		border-radius 400px
	.button
		padding-left 0
		padding-right 0
	</style>

<script setup lang="ts">
	defineEmits(['open-modal'])
	</script>


