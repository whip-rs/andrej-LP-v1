<template lang="pug">
	section.row.order#order-now
		.col-12
			h2.tc Наручи одмах:
		.col-lg-4
			img(src="/assets/img/liber-1-2.webp")
			h4 Књиге 1 и 2 (спојено):
			a(href="sms:+381641764833?body=Поздрав,%20наручујем%20књиге%201%20и%202%20на:%0A%0AИме_и_Презиме%0AAдреса%0AГрад_и_поштански_број%0AБрој_телефона%0A%0AХвала!").btn.fill.mob-only Наручи СМС-ом <span>❯</span>
			a(href="mailto:nenad.s@zoho.com?body=Поздрав,%20наручујем%20књиге%201%20и%202%20на:%0A%0AИме_и_Презиме%0AAдреса%0AГрад_и_поштански_број%0AБрој_телефона%0A%0AХвала!").btn.fill.desk-only Наручи е-мејлом <span>❯</span>
			ul
				li 2400 РСД <span>+ поштарина</span>
				li Тврде корице са "кошуљицом"
				li 530 страна
				li Долази са мапом Адене
				li "Крваво праскозорје" је последње поглавље књиге 2 
		.col-lg-4
			img(src="/assets/img/liber-3.webp")
			h4 Само књига 3:
			a(href="sms:+381641764833?body=Поздрав,%20наручујем%20књигу%203%20на:%0A%0AИме_и_Презиме%0AAдреса%0AГрад_и_поштански_број%0AБрој_телефона%0A%0AХвала!").btn.fill.mob-only Наручи СМС-ом <span>❯</span>
			a(href="mailto:nenad.s@zoho.com?body=Поздрав,%20наручујем%20књигу%203%20на:%0A%0AИме_и_Презиме%0AAдреса%0AГрад_и_поштански_број%0AБрој_телефона%0A%0AХвала!").btn.fill.desk-only Наручи е-мејлом <span>❯</span>
			ul
				li 2400 РСД <span>+ поштарина</span>
				li Тврде корице са "кошуљицом"
				li 456 страна
		.col-lg-4
			img(src="/assets/img/liber-combo.webp")
			h4 Комплет књига 1-3:
			a(href="sms:+381641764833?body=Поздрав,%20наручујем%20%20књиге%201-3%20на:%0A%0AИме_и_Презиме%0AAдреса%0AГрад_и_поштански_број%0AБрој_телефона%0A%0AХвала!").btn.fill.mob-only Наручи СМС-ом <span>❯</span>
			a(href="mailto:nenad.s@zoho.com?body=Поздрав,%20наручујем%20%20књиге%201-3%20на:%0A%0AИме_и_Презиме%0AAдреса%0AГрад_и_поштански_број%0AБрој_телефона%0A%0AХвала!").btn.fill.desk-only Наручи е-мејлом <span>❯</span>
			ul
				li <span class="cross">4400 РСД</span> 3900 РСД <span>+ поштарина</span>
				li Тврде корице са "кошуљицом"
				li 986 страна
				li Долази са мапом Адене

		.col-md-6.cc.order-details
			span.shipping-ico
				icoShipping
			span
				h4.italic Детаљи испоруке:
			span.posta-logo
				icoPTT
			ul
				li Књиге се шаљу ПостЕкспрес-ом на кућну адресу
				li Цена поштарине је 600 РСД
				li Испорука се врши на територији целе Србије
				li Рок испоруке је 1-2 радна дана
				li Лично преузимање је могуће само у Нишу
</template>

<style lang="stylus" scoped>
	.order
		border-bottom 1px solid #222
	.order-details
		display flex
		flex-direction: column
	.posta-logo
		display flex
		height 1rem
		width 100%
		margin-bottom 1rem
	
	</style>

<script setup lang="ts">
	import icoShipping from '@/assets/svg/ico-shipping-01.svg'
	import icoPTT from '@/assets/svg/posta-srbije.svg'
	</script>

