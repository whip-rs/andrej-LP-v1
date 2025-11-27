<template lang="pug">

	.block.ordering-form

		.relative.seal
			.absolute
				img(data-v-0046fd79="" class="garancija" src="/assets/img/seal.webp")
		
		form(@submit.prevent="handleSubmit")

			h1 Направи поруџбину

			.form-group
				label(for="email") е-mail:
				input#email(
					v-model="formData.email"
					type="email"
					required
					placeholder=""
					autocomplete="email"
					tabindex="1"
				)
				//- p.micro *Потврда и статуси пошиљке биће слати овде.

			.form-group
				label(for="fullname") Име и Презиме:
				input#fullname(
					v-model="formData.fullname"
					type="text"
					required
					placeholder=""
					autocomplete="name"
					tabindex="2"
				)
			
			.form-group.address

				.city
					label(for="city") Град:
					input#city(
						v-model="formData.city"
						type="text"
						required
						placeholder=""
						autocomplete="address-level2"
						tabindex="3"
					)

				.postal-no
					label(for="pobox") Поштански број:
					input#pobox(
							v-model="formData.pobox"
							type="text"
							inputmode="numeric"
							maxlength="5"
							pattern="\\d{1,5}"
							required
							placeholder=""
							autocomplete="postal-code"
							tabindex="4"
							@input="formatPostalCode"
						)

			.form-group
				label(for="address") Адреса:
				input#address(
					v-model="formData.address"
					type="text"
					required
					placeholder=""
					autocomplete="street-address"
					tabindex="5"
				)
			
			.form-group
				label(for="phone") Телефон:
				input#phone(
					v-model="formData.phone"
					type="tel"
					required
					placeholder=""
					autocomplete="tel"
					tabindex="6"
					@input="formatPhone"
				)

			.form-group.book-price
				.dropdown
					label(for="book") Наручујем:
					select#book(
						v-model="formData.book"
						required
						tabindex="7"
					)
						option(value="1-2") Књиге 1-2
						option(value="3") Књига 3
						option(value="1-3") Књиге 1-3
				.price-display
					label.price-label.t Укупно:
					.price-value {{ currentPrice }}	

			.form-actions
				a.btn.fill(role="button" aria-label="Пошаљи поруџбину" @click="handleSubmit" @keydown.enter.prevent="handleSubmit" @keydown.space.prevent="handleSubmit" tabindex="8") Пошаљи поруџбину <span>❯</span>

	</template>
<!--  -->
<style lang="stylus" scoped>
	.block.ordering-form
		background-color black
		margin auto

	.seal
		user-select none
		pointer-events none
		display none
		// z-index 1

	form
		display flex
		flex-direction column
		max-width 400px
		margin auto

	// hr
		// margin-top calc(.25rem - 2px)
		// margin-bottom 1rem
		// width calc(100% - 3rem)

	.form-group
		display flex
		flex-direction column
		margin-bottom .75rem
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
		
	label
		font-size .675rem
		user-select none
		line-height 1
		text-transform uppercase
		letter-spacing: .075rem
		color white
		margin-bottom 4px
		cursor: pointer
		width: fit-content

	input, select
		padding 0.65rem
		border-radius 0.25rem
		height 44px
		line-height 1
		color #fff
		font-size 1rem
		transition 0.3s
		cursor: pointer

		background-color #080808
		border 1px solid #222
		
		&:hover
			border-color: #444
			background-color #111
		
		&:focus
			cursor: text
			outline none
			border-color: #a88a5d80;
			background-color: #a6885c21;
			
		&::placeholder
			color #333

	option
		background: black;
		color: white;

	select
		cursor pointer

	// .micro
		// font-size 0.75rem
		// color #999
		// margin-top 0.25rem
		// line-height 1.25

	.address
		display flex
		flex-direction row
		gap 1rem

	.city, .postal-no
		display: flex;
		flex-direction: column;
		input
			width 100%
			
	 .postal-no
		max-width: calc(40% - .5rem)
		
	.city
		flex 1
		max-width: 100%

	.dropdown
		display flex
		flex-direction column
		flex 2
		
	.book-price
		flex-direction row
		gap 1rem
		select
			cursor pointer

	.price-display
		display flex
		flex-direction column		
		label
			cursor inherit
			width: 100%;
			flex: 1;
			text-align: right;
		.price-label
			color white
			
		.price-value
			padding 0.65rem 0
			line-height 1
			color #fff
			font-size 1.325rem
			transition border-color 0.2s
			user-select none
			height 44px
			font-variant-caps: small-caps

	.form-actions
		
		a.btn.fill
			width 100%
			display flex
			margin-top: .5rem;
			cursor pointer
			span
				transition .3s
			&:hover
				span
					margin-right .5rem
			&:focus
				// background-color #a7885b
				// color black
				box-shadow: inset 0 0 .05rem .0725rem black, 0 0 8px 0 #a7885b80
				span
					margin-right .5rem

	@media screen and (min-width: 320px)
		.block.ordering-form
			padding 0 1rem 1rem 1rem
		h1
			font-size 1.5rem
			display flex
			flex-direction column
			justify-content: center
			line-height calc(3rem - 2px)
			margin-bottom .75rem
				
		h1, h2
			user-select none
			
		h2
			font-size 1.5rem
			margin-bottom .5rem

	@media screen and (min-width: 576px)
		h1
			font-size 2.5rem
			
	@media screen and (min-width: 1025px)
		.block.ordering-form
			padding 1.25rem
		h1
			font-size 2.4rem
			line-height 1
			margin-top 0

	</style>
<!--  -->
<script setup lang="ts">
	import { ref, computed } from 'vue'
	
	const formData = ref({
		email: '',
		book: '1-2',
		fullname: '',
		address: '',
		city: '',
		pobox: '',
		phone: ''
	})
	
	const prices = {
		'1-2': '2400 рсд',
		'3': '2000 рсд',
		'1-3': '3900 рсд'
	}
	
	const currentPrice = computed(() => {
		return prices[formData.value.book]
	})
	
	const formatPhone = (event) => {
		let value = event.target.value
		// Remove all non-numeric characters except +
		value = value.replace(/[^\d+]/g, '')
		// Ensure it starts with +
		if (value && !value.startsWith('+')) {
			
		}
		formData.value.phone = value
	}

	const formatPostalCode = (event) => {
		let value = event.target.value
		// Remove all non-numeric characters
		value = value.replace(/[^\d]/g, '')
		// Limit the value to a maximum of 5 digits
		value = value.slice(0, 5)
		formData.value.pobox = value
	}
	
	const handleSubmit = () => {
		// TODO: Implement email sending functionality
		console.log('Form submitted:', formData.value)
		alert('Наруџбина је примљена! (Функција слања е-поште ће бити имплементирана касније)')
	}
	</script>

