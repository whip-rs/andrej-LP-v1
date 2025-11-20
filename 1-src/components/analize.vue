<template lang="pug">
	section.row.testimonials
		.col-12
			h1.tc Књижевне анализе
		.col.col-sm-12.col-lg-4
			.holder
				p.testimonial Пред нама имамо једно веома сложено дело, (...) у коме су поређани делићи које налазимо у латинској, индијској, француској, немачкој, енглеској, хришћанској, гностичкој, египатској и другим традиципама. Књига обилује детаљима. Kвалитет дигресија је најчешће на високом нивоу и неке од њих су у рангу малих филозофских есеја који се могу засебно читати. До сада нисмо имали прилике да се сусретнемо са оваквим делом на српском језику.
				p.potpis - <span class="ime">Данко Камчевски</span> <br>Универзитет Метрополитан у Београду<br>Часопис "Липар" бр. 86, 2024.
				p.testimonial-cta Прочитај оригинал у целости:
				.row
					a.btn.void(@click="$emit('open-modal', 'pdf-kamcevski')") PDF
					a.btn.void(@click="$emit('open-modal', 'analiza-kamcevski')") Обичан текст
					.flex.
		hr.mob-only
		.col.col-sm-12.col-lg-4
			.holder
				p.testimonial (...) за дивљење с обзиром на то да се ради о првенцу. Беспрекоран стил, реченице које теку без спотицања, прецизност, ужасно занимљива тема и разрада. Свет Адене заиста је сложен и аутентичан. Комплексност којом је описан и један и други свет са обе стране баријере (Вела) је задивљујћ и веома промишљен. Озбиљан покушај објашњења природе зла и његове потребе да егзистира на такав начин. Једна динамична и хипер занимљива прича.
				p.potpis - <span class="ime">Небојша Петковић</span> <br>Парафразирани извод књижевне анализе
				p.testimonial-cta Прочитај оригинал у целости:
				.row
					a.btn.void(@click="$emit('open-modal', 'analiza-petkovic')") Обичан текст
		hr.mob-only
		.col.col-sm-12.col-lg-4
			.holder
				p.testimonial (...) богата окултно-демонолошка сага изведена из широке културе човечанства...
				p.testimonial За секуларни ум, "Chronica Inqvisitoris" је замишљена као "Harry Potter" за одрасле: робустан мрачни роман који засеца у дубине људске психе, до највећих изопачености, са погледом у свет скривен иза очигледног. За људе са вером, она је замишљена као ризница увида у оперативни модел Зла.
				p.potpis - <span class="ime">Ненад Стојановић</span>,<br>whip.rs
				p.testimonial-cta Прочитај оригинал у целости:
				.row
					a.btn.void(@click="$emit('open-modal', 'pdf-stojanovic')") PDF
					a.btn.void(@click="$emit('open-modal', 'analiza-stojanovic')") Обичан текст
</template>

<style lang="stylus" scoped>
	.testimonials
		border-bottom 1px solid #222
	hr.mob-only
		margin-top 1rem
		margin-bottom 1rem
		margin-left 1rem
		margin-right 1rem
	</style>

<script setup lang="ts">
	</script>

