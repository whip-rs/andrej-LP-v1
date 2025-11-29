<template lang="pug">

	.block.ordering-form

		form(@submit.prevent="handleSubmit")

			h1 Направи поруџбину

			.form-group
				label(for="email" :class="{ error: errors.email }") е-mail:
				input#email(
					v-model="formData.email"
					type="email"
					required
					placeholder=""
					autocomplete="email"
					tabindex="1"
					:class="{ error: errors.email }"
					@input="formatEmail"
					@blur="errors.email && validateEmail()"
				)
				//- p.micro *Потврда и статуси пошиљке биће слати овде.

			.form-group
				label(for="fullname" :class="{ error: errors.fullname }") Име и Презиме:
				input#fullname(
					v-model="formData.fullname"
					type="text"
					required
					placeholder=""
					autocomplete="name"
					tabindex="2"
					:class="{ error: errors.fullname }"
					@input="formatFullname"
					@blur="errors.fullname && validateFullname()"
				)
			
			.form-group.address

				.city
					label(for="city" :class="{ error: errors.city }") Град:
					input#city(
						v-model="formData.city"
						type="text"
						required
						placeholder=""
						autocomplete="address-level2"
						tabindex="3"
						:class="{ error: errors.city }"
						@input="formatCity"
						@blur="errors.city && validateCity()"
					)

				.postal-no
					label(for="pobox" :class="{ error: errors.pobox }") Поштански број:
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
							:class="{ error: errors.pobox }"
							@input="formatPostalCode"
							@blur="errors.pobox && validatePobox()"
						)

			.form-group
				label(for="address" :class="{ error: errors.address }") Адреса:
				input#address(
					v-model="formData.address"
					type="text"
					required
					placeholder=""
					autocomplete="street-address"
					tabindex="5"
					:class="{ error: errors.address }"
					@blur="errors.address && validateAddress()"
				)
			
			.form-group
				label(for="phone" :class="{ error: errors.phone }") Телефон:
				input#phone(
					v-model="formData.phone"
					type="tel"
					required
					placeholder=""
					autocomplete="tel"
					tabindex="6"
					:class="{ error: errors.phone }"
					@input="formatPhone"
					@blur="errors.phone && validatePhone()"
				)

			.form-group.book-price
				.dropdown
					label(for="book") Садржај наруџбине:
					select#book(
						v-model="formData.book"
						required
						tabindex="7"
					)
						option(value="1-2") Књигa 1+2
						option(value="3") Књига 3
						option(value="1-3") Комплет


			.price-display
				div.price-label Укупно при преузимању:
				.price-value#cost {{ currentPrice }}



			.form-actions
				a.btn.fill(role="button" aria-label="Пошаљи поруџбину" @click="handleSubmit" @keydown.enter.prevent="handleSubmit" @keydown.space.prevent="handleSubmit" tabindex="8") Пошаљи поруџбину<span>❯</span>

			.validation.tr
				p.micro(:class="{ error: validationMessage !== defaultMessage }") {{ validationMessage }}
				p.micro За интернационалне поруџбине, <a href="mailto:porudzbine@adena.rs">контакт</a>.

			//- .messages
				//- ul
				//- 	li Сва поља су обавезна
				//- 	li Потврда email-ом о примљеној поруџбини ће бити послата пар минута након слања

	</template>
<!--  -->
<style lang="stylus" scoped>

	a
		color #a7885b
		transition: .3s
		text-decoration none
		border-bottom 1px solid #a7885b
		&:hover
			color white
			border-bottom-color white

	a.btn.fill
		margin-top .75rem !important

	.error
		color red !important
		background-color #0f0000 !important
		border-color #570000 !important
		
	.validation
		margin-top .5rem
		margin-bottom 0
		user-select none
		p.micro
			// color #bbb
			color gray
			margin-bottom 0
		.error
			background-color transparent !important

	.block.ordering-form
		background-color black
		margin auto
		::selection
			background-color #222
	form
		display flex
		flex-direction column
		max-width 400px
		margin auto

	// hr
	// 	margin-top 1rem
	// 	margin-bottom 1rem

	.form-group, #cost
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"


	.form-group
		display flex
		flex-direction column
		margin-bottom .75rem

		
	label, .price-label
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
		font-size .675rem
		user-select none
		line-height 1
		text-transform uppercase
		letter-spacing: .075rem
		color #eee
		margin-bottom 4px
		cursor: pointer
		width: fit-content
		
	input, select, label
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;

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
		// border-left 1px solid #444
		// padding-left .75rem
		// margin-left .75rem
		label
			cursor inherit
			margin-top auto
			margin-bottom auto
		.price-label
			color white
			cursor inherit
			
	.price-value
		line-height 1
		color #fff
		font-size 1.325rem
		transition border-color 0.2s
		user-select none
		// text-align: right;
		font-variant-caps: small-caps
		

	.form-actions
		
		a.btn.fill
			width 100%
			display flex
			margin-top: 1rem;
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
			padding 1rem
			
		h1
			display flex
			flex-direction column
			justify-content: center
			line-height 1
			font-size 2rem
			padding-right 2rem
			margin-bottom .75rem
			
		label
			font-size 10px
			
		input
			height 40px
			padding 0.5rem
			
		h1, h2
			user-select none
			
		h2
			font-size 1.5rem
			margin-bottom .5rem
			
	@media screen and (min-width: 768px)
		.block.ordering-form
			padding 1.25rem
			padding-bottom 1rem
		h1
			font-size 2.4rem

		label
			font-size 12px
			
		input
			height 44px
			padding 0.65rem


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
	
	const errors = ref({
		email: false,
		fullname: false,
		city: false,
		pobox: false,
		address: false,
		phone: false
	})
	
	const defaultMessage = 'Очекујте потврдни е-mail убрзо по слању.'
	const validationMessage = ref(defaultMessage)
	
	const prices = {
		'1-2': '3300 рсд',
		'3': '2800 рсд',
		'1-3': '4500 рсд'
	}
	
	const currentPrice = computed(() => {
		return prices[formData.value.book]
	})
	
	const formatEmail = (event) => {
		let value = event.target.value
		// Allow alphanumeric (Latin & Cyrillic), periods, underscores, hyphens, and @
		// \u0400-\u04FF covers Cyrillic (Serbian, Russian, etc.)
		value = value.replace(/[^a-zA-Z0-9\u0400-\u04FF._\-@]/g, '')
		formData.value.email = value
	}
	
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
	
	const formatFullname = (event) => {
		let value = event.target.value
		// Allow letters (Latin, Cyrillic, and extended Unicode ranges), spaces, dash, and dot
		// This covers most Latin and Cyrillic alphabets including diacritics
		value = value.replace(/[^a-zA-Z\u0080-\u024F\u0400-\u04FF\s.\-]/g, '')
		
		// Count dashes and dots
		const dashCount = (value.match(/-/g) || []).length
		const dotCount = (value.match(/\./g) || []).length
		
		// If more than one dash, remove extra dashes
		if (dashCount > 1) {
			let dashesFound = 0
			value = value.replace(/-/g, (match) => {
				dashesFound++
				return dashesFound === 1 ? match : ''
			})
		}
		
		// If more than one dot, remove extra dots
		if (dotCount > 1) {
			let dotsFound = 0
			value = value.replace(/\./g, (match) => {
				dotsFound++
				return dotsFound === 1 ? match : ''
			})
		}
		
		// Limit to 2-3 words by trimming extra spaces and limiting word count
		// Normalize multiple spaces to single space
		value = value.replace(/\s+/g, ' ')
		
		// Split by spaces and limit to 3 words
		const words = value.split(' ')
		if (words.length > 3) {
			value = words.slice(0, 3).join(' ')
		}
		
		formData.value.fullname = value
	}
	
	const formatCity = (event) => {
		let value = event.target.value
		// Allow only letters (Latin, Cyrillic, and extended Unicode ranges) and spaces
		// This covers most Latin and Cyrillic alphabets including diacritics
		value = value.replace(/[^a-zA-Z\u0080-\u024F\u0400-\u04FF\s]/g, '')
		// Normalize multiple spaces to single space
		value = value.replace(/\s+/g, ' ')
		formData.value.city = value
	}
	
	// Validation functions
	const validateEmail = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		const isValid = emailRegex.test(formData.value.email)
		errors.value.email = !isValid
		if (!isValid) {
			validationMessage.value = 'Унесите исправну e-mail адресу.'
			checkErrorState()
			return false
		}
		checkErrorState()
		return true
	}
	
	const validateFullname = () => {
		const words = formData.value.fullname.trim().split(/\s+/)
		const isValid = words.length >= 2 && words.length <= 3 && words.every(word => word.length > 0)
		errors.value.fullname = !isValid
		if (!isValid) {
			validationMessage.value = 'Унесите исправно име и презиме.'
			checkErrorState()
			return false
		}
		checkErrorState()
		return true
	}
	
	const validateCity = () => {
		const isValid = formData.value.city.trim().length > 0
		errors.value.city = !isValid
		if (!isValid) {
			validationMessage.value = 'Унесите исправно име места.'
			checkErrorState()
			return false
		}
		checkErrorState()
		return true
	}
	
	const validatePobox = () => {
		const isValid = /^\d{5}$/.test(formData.value.pobox)
		errors.value.pobox = !isValid
		if (!isValid) {
			validationMessage.value = 'Унесите исправни поштански број.'
			checkErrorState()
			return false
		}
		checkErrorState()
		return true
	}
	
	const validateAddress = () => {
		// Must contain at least one word and one number
		const hasLetters = /[a-zA-Z\u0080-\u024F\u0400-\u04FF]/.test(formData.value.address)
		const hasNumber = /\d/.test(formData.value.address)
		const isValid = hasLetters && hasNumber
		errors.value.address = !isValid
		if (!isValid) {
			validationMessage.value = 'Унесите исправну адресу.'
			checkErrorState()
			return false
		}
		checkErrorState()
		return true
	}
	
	const validateAll = () => {
		// Clear all errors first
		errors.value = {
			email: false,
			fullname: false,
			city: false,
			pobox: false,
			address: false,
			phone: false
		}
		
		// Run all validations without early returns (they set error messages only when invalid)
		validateEmail()
		validateFullname()
		validateCity()
		validatePobox()
		validateAddress()
		validatePhone()
		
		// Count how many errors exist
		const errorCount = Object.values(errors.value).filter(error => error).length
		
		// Set appropriate message based on error count
		if (errorCount === 0) {
			validationMessage.value = defaultMessage
		} else if (errorCount > 1) {
			validationMessage.value = 'Неисправни подаци у обележеним пољима'
		}
		// If single error (errorCount === 1), the message was already set by the specific validation function
		
		return errorCount === 0
	}
	
	const validatePhone = () => {
		// Must have at least 9 digits
		const digits = formData.value.phone.replace(/\D/g, '')
		const isValid = digits.length >= 9
		errors.value.phone = !isValid
		if (!isValid) {
			validationMessage.value = 'Унесите исправан телефонски број.'
			checkErrorState()
			return false
		}
		checkErrorState()
		return true
	}
	
	// Check overall error state and update message accordingly
	const checkErrorState = () => {
		const errorCount = Object.values(errors.value).filter(error => error).length
		
		if (errorCount === 0) {
			// All fields valid - reset to default message
			validationMessage.value = defaultMessage
		} else if (errorCount > 1) {
			// Multiple errors - show generic message
			validationMessage.value = 'Неисправни подаци у обележеним пољима'
		}
		// If errorCount === 1, the specific validation message should already be set
	}
	
	const handleSubmit = () => {
		// Validate all fields before submitting
		if (!validateAll()) {
			return // Stop if validation fails
		}
		
		// TODO: Implement email sending functionality
		console.log('Form submitted:', formData.value)
		alert('Наруџбина је примљена! (Функција слања е-поште ће бити имплементирана касније)')
	}
	</script>

