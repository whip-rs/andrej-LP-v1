<template lang="pug">
	section.row.uvod
		.col-md-8.col-lg-6.cc
			h1.tc Да ли је човечанство осуђено на крах?
			p Током своје вишемиленијумске историје – ништа мање ни данас – свет је дефинисан идеолишким конфликтима, свирепим играма моћи и кривљењем Истине, и рецидивној борби простог људства за слободу од сваке тираније.
			p Данас, у времену када је путем технологије доступан готово цео свет на длану, а географске препреке све мање, свако од нас је актер или за <i>добробит</i> човечанства, или алат у рукама његове <em class="red">обмане</em>.
			p Ко од та два си ти, је на теби.
			p Ова књига је ту да ти тај пут расветли.
			a.btn.void(@click="$emit('open-modal', 'krvavo-praskozorje')") <span class="cc">Прочитај "Крваво праскозорје" бесплатно</span>
			p.micro.tc И препознај где припадаш.
</template>

<style lang="stylus" scoped>
	h1
		margin-bottom 1rem
		font-size 10vw
	a.btn
		margin-bottom .5rem
	p
		text-wrap pretty
	@media screen and (min-width: 1024px)
		h1
			font-size 3rem


	</style>

<script setup lang="ts">
	</script>

