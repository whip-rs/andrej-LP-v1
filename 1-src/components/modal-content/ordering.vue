<template lang="pug">

	.block.ordering-form

		form(action="https://formspree.io/f/xqarpayy" method="POST" novalidate @submit.prevent="handleSubmit" :class="{ locked: locked }" @input="clearSuccessIfSent" @focusin="clearSuccessIfSent")

			h1 Направи поруџбину

			.form-group.contact
				.email
					label(for="email" :class="{ error: errors.email }") е-mail:
					input#email(
						ref="emailInput"
						name="email"
						v-model="formData.email"
						type="email"
						required
						placeholder=""
						autocomplete="email"
						tabindex="1"
						:class="{ error: errors.email }"
						:disabled="isSubmitting || locked"
						@input="formatEmail"
						@blur="errors.email && validateEmail()"
					)
					//- p.micro *Потврда и статуси пошиљке биће слати овде.

				.phone
					label(for="phone" :class="{ error: errors.phone }") Телефон:
					input#phone(
						name="phone"
						v-model="formData.phone"
						type="tel"
						required
						placeholder=""
						autocomplete="tel"
						tabindex="2"
						:class="{ error: errors.phone }"
						:disabled="isSubmitting || locked"
						@input="formatPhone"
						@blur="errors.phone && validatePhone()"
					)

			.form-group
				label(for="fullname" :class="{ error: errors.fullname }") Име и Презиме:
				input#fullname(
					name="fullname"
					v-model="formData.fullname"
					type="text"
					required
					placeholder=""
					autocomplete="name"
					tabindex="3"
					:class="{ error: errors.fullname }"
					:disabled="isSubmitting || locked"
					@input="formatFullname"
					@blur="errors.fullname && validateFullname()"
				)
			
			.form-group.address

				.postal-no
					label(for="pobox" :class="{ error: errors.pobox }") Поштански број:
					input#pobox(
						name="postal_code"
						v-model="formData.pobox"
						type="text"
						inputmode="numeric"
						maxlength="5"
						pattern="\\d{1,5}"
						required
						placeholder=""
						autocomplete="postal-code"
						tabindex="3"
						:class="{ error: errors.pobox }"
						:disabled="isSubmitting || locked"
						@input="formatPostalCode"
						@blur="errors.pobox && validatePobox()"
					)
				.city
					label(for="city" :class="{ error: errors.city }") Град:
					input#city(
						name="city"
						v-model="formData.city"
						type="text"
						required
						placeholder=""
						autocomplete="address-level2"
						tabindex="4"
						:class="{ error: errors.city }"
						:disabled="isSubmitting || locked"
						@input="formatCity"
						@blur="errors.city && validateCity()"
					)

			.form-group
				label(for="address" :class="{ error: errors.address }") Адреса:
				input#address(
					name="address"
					v-model="formData.address"
					type="text"
					required
					placeholder=""
					autocomplete="street-address"
					tabindex="5"
					:class="{ error: errors.address }"
					:disabled="isSubmitting || locked"
					@blur="errors.address && validateAddress()"
				)
			
				//- .form-group
				//- 	label(for="phone" :class="{ error: errors.phone }") Телефон:
				//- 	input#phone(
				//- 		v-model="formData.phone"
				//- 		type="tel"
				//- 		required
				//- 		placeholder=""
				//- 		autocomplete="tel"
				//- 		tabindex="6"
				//- 		:class="{ error: errors.phone }"
				//- 		@input="formatPhone"
				//- 		@blur="errors.phone && validatePhone()"
				//- 	)

			.form-group.book-price
				.dropdown
					label(for="book" @click.prevent="openBookPicker") Садржај наруџбине:
					select#book(
						ref="bookSelect"
						name="book"
						v-model="formData.book"
						required
						tabindex="7"
						:disabled="isSubmitting || locked"
					)
						option(value="1-2") Књиге 1 и 2 (спојено)
						option(value="3") Књига 3
						option(value="1-3") Комплет
					// Hidden derived fields
					input(type="hidden" name="price" :value="currentPrice")
					input(type="hidden" name="_subject" value="Нова поруџбина")
					// Honeypot anti-spam field (reactive; bots filling quickly get blocked)
					input(type="text" name="hp_field" v-model="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;opacity:0;" )

				.image-display
					img(:src="currentImage" :alt="currentImageAlt")

				.price-display
					.price-label Укупно при преузимању:
					.price-value#cost {{ currentPrice }}

			.form-actions
				button.btn.fill(
					type="submit"
					:disabled="isSubmitting"
					aria-label="Пошаљи поруџбину"
					tabindex="8"
					:class="{ sending: isSubmitting, sent: submissionSuccess }"
				)
					span.label(v-if="!isSubmitting && !submissionSuccess") Пошаљи поруџбину
					span.label(v-if="isSubmitting") Слање…
					span.label(v-if="submissionSuccess") Послато.
					span.indicator(v-if="!submissionSuccess && !isSubmitting") ❯
					span.indicator(v-if="submissionSuccess") ✓
					span.spinner(v-if="isSubmitting")

			.validation.tr
				p.micro(:class="{ error: hasErrors, sending: isSubmitting, sent: submissionSuccess }") {{ validationMessage }}

			//- .messages
				//- ul
				//- 	li Сва поља су обавезна
				//- 	li Потврда email-ом о примљеној поруџбини ће бити послата пар минута након слања

	</template>
<!--  -->
<style lang="stylus" scoped>

	button.btn.fill
		margin-top 0

	a
		color #a7885b
		transition: .3s
		text-decoration none
		border-bottom 1px solid #a7885b
		&:hover
			color white
			border-bottom-color white

	.error
		color red !important
		background-color #0f0000 !important
		border-color #570000 !important
		
	.validation
		margin-top .25rem
		margin-bottom 0
		line-height 1
		user-select none
		p.micro
			// color #bbb
			color gray
			&.sending
				// Use hex color for more explicit control and to match requested tone
				color #808080
			&.sent
				color #a7885b

			margin-bottom 0
		.error
			background-color transparent !important

	.block.ordering-form
		background-color black
		padding 1rem
		margin auto
		::selection
			background-color #222
	form
		display flex
		flex-direction column
		max-width 400px
		margin auto

		&.locked
			user-select none
			// Make inputs/selects visually disabled and non-interactive
			input, select, textarea
				pointer-events none
				opacity 0.25
				background-color white !important
				color black !important


	// hr
	// 	margin-top 1rem
	// 	margin-bottom 1rem

	.form-group, #cost, select, option
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
		
	.price-label
		pointer-events none
		cursor inherit
		
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

	select, option
		cursor pointer !important

	.address, .contact
		display flex
		flex-direction row
		gap 1rem

	.city, .postal-no, .phone, .email
		display: flex;
		flex-direction: column;
		input
			width 100%
			
	 .postal-no
		max-width: calc(40% - .5rem)
		
	.email, .phone
		max-width: auto
		flex 1

	.city
		flex 1
		max-width: 100%
			
	.price-value
		line-height 1
		color #fff
		font-size 1.325rem
		transition border-color 0.2s
		user-select none
		// text-align: right;
		font-variant-caps: small-caps
		

	.btn.fill
		width 100%
		display flex
		align-items center
		justify-content space-between
		gap .5rem
		margin-top: 1rem;
		cursor pointer
		background: linear-gradient(transparent, transparent) padding-box, linear-gradient(to top right, #a7885b33, transparent) border-box
		color #a7885b
		border 1px solid rgba(167, 136, 91, 0.502)
		font-weight 600
		position relative
		letter-spacing: 0.075rem
		span
			transition .3s
		&:hover:not(.sending):not(.sent)
			color black
			border-color #a7885b3
			background-color #a7885b
			span.indicator
				margin-right .5rem
		&:focus
			outline none
			box-shadow: inset 0 0 .05rem .0725rem black, 0 0 8px 0 #a7885b80
			span.indicator
				margin-right .5rem
		&.sending
			background-color #333
			border 1px solid #333
			// Use requested intermediate tone
			color #808080
			cursor progress
		&.sent
			// Final success tone per user's request
			background-color #a7885b
			border 1px solid #a7885b
			color #fff
			box-shadow none
			pointer-events none
			cursor inherit
			span.indicator
				margin-right .25rem
		.spinner
			width 16px
			height 16px
			border 2px solid #666
			border-top-color #ccc
			border-radius 50%
			animation spin 0.8s linear infinite

	@keyframes spin
		0%
			transform rotate(0deg)
		100%
			transform rotate(360deg)

	@media screen and (min-width: 320px)
	
		.ordering-form
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

	.book-price
		display grid
		grid-template-columns 1fr auto
		grid-template-rows auto auto
		// gap 0.75rem
		// margin-bottom 0.75rem
		
		.dropdown
			grid-column 1
			grid-row 1
			display flex
			flex-direction column
			margin-bottom 0.75rem;
			
		.price-display
			grid-column 1
			grid-row 2
			display flex
			flex-direction column
			justify-content flex-end
			border-left 1px solid #333
			// border-left 1px solid #a7885b
			padding-left .75rem
			margin-left .75rem
			line-clamp value
		
		.image-display
			grid-column 2
			grid-row 1 / 3
			aspect-ratio 1
			height 100%
			max-height: 108px;
			margin-left 1rem
			// margin-right .5rem
			
			img
				object-fit cover
				max-height 127px

	@media screen and (max-width: 360px)
		.form-group.book-price
			// Force grid layout, override any conflicting display settings
			display grid !important
			grid-template-columns 1fr auto !important
			grid-template-rows auto auto !important
			.dropdown
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;

	</style>
<!--  -->
<script setup lang="ts">
	import { ref, computed, onMounted, nextTick, watch } from 'vue'
	
	// Import images so Vite can process them
	import liber12Img from '../../assets/img/liber-1-2.webp'
	import liber3Img from '../../assets/img/liber-3.webp'
	import liberKompletImg from '../../assets/img/liber-komplet.webp'
	
	interface Props {
		modalData?: string | null
	}
	
	const props = withDefaults(defineProps<Props>(), {
		modalData: null
	})
	
	const emailInput = ref<HTMLInputElement | null>(null)
	const bookSelect = ref<HTMLSelectElement | null>(null)

	// Programmatically open/focus the book select when its label is clicked
	const openBookPicker = () => {
		if (!bookSelect.value) return
		// Focus first (universal)
		bookSelect.value.focus()
		// Try native showPicker (Chromium browsers)
		const picker = (bookSelect.value as any).showPicker
		if (typeof picker === 'function') {
			try { picker.call(bookSelect.value) } catch (_) { /* ignore */ }
		} else {
			// Fallback: dispatch a key event that commonly opens selects
			try {
				const evt = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true })
				bookSelect.value.dispatchEvent(evt)
			} catch (_) { /* noop */ }
		}
	}
	
	const formData = ref({
		email: '',
		book: '1-2',
		fullname: '',
		address: '',
		city: '',
		pobox: '',
		phone: ''
	})
	
	// Watch for modalData changes and update book selection
	watch(() => props.modalData, (newData) => {
		if (newData && ['1-2', '3', '1-3'].includes(newData)) {
			formData.value.book = newData
		}
	}, { immediate: true })
	
	const errors = ref({
		email: false,
		fullname: false,
		city: false,
		pobox: false,
		address: false,
		phone: false
	})
	
	const defaultMessage = 'Сва поља су неопходна.'
	const validationMessage = ref(defaultMessage)
	
	const prices = {
		'1-2': '3300 рсд',
		'3': '2800 рсд',
		'1-3': '4500 рсд'
	}
	
	const currentPrice = computed(() => {
		return prices[formData.value.book]
	})

	// Image sources mapped to book selection
	const imageSources: Record<string, string> = {
		'1-2': liber12Img,
		'3': liber3Img,
		'1-3': liberKompletImg
	}

	const currentImage = computed(() => imageSources[formData.value.book] || imageSources['1-2'])

	const currentImageAlt = computed(() => {
		switch (formData.value.book) {
			case '1-2': return 'Chronica Inqvistoris књиге I и II';
			case '3': return 'Chronica Inqvistoris књига III';
			case '1-3': return 'Chronica Inqvistoris комплет';
			default: return 'Chronica Inqvistoris';
		}
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

		// When a submission has succeeded, keep the success message intact
		if (submissionSuccess.value) return

		if (errorCount === 0) {
			// All fields valid - reset to default message
			validationMessage.value = defaultMessage
		} else if (errorCount > 1) {
			// Multiple errors - show generic message
			validationMessage.value = 'Неисправни подаци у обележеним пољима'
		}
		// If errorCount === 1, the specific validation message should already be set
	}
	
	// Submission state
	const isSubmitting = ref(false)
	const submissionError = ref<string | null>(null)
	const submissionSuccess = ref(false)
	// Lock the form fields after submit (turned on when submitting) and persist indefinitely
	const locked = ref(false)
	// Honeypot reactive value (should remain empty for humans)
	const honeypot = ref('')

	// Honeypot bypass disabled — enforce honeypot on all environments

	const isHoneypotBypassed = () => false

	// Keep success message visible indefinitely until the user interacts again.
	const clearSuccessIfSent = () => {
		if (submissionSuccess.value || submissionError.value) {
			submissionSuccess.value = false
			submissionError.value = null
			validationMessage.value = defaultMessage
		}
	}

	// Computed helper to determine if there are any validation errors
	const hasErrors = computed(() => Object.values(errors.value).some(Boolean) || !!submissionError.value)

	const handleSubmit = async () => {
		// Avoid re-submitting when form is locked
		if (locked.value) return
		// Validate all fields before submitting
		if (!validateAll()) {
			return // Stop if validation fails
		}

		// Lock fields immediately upon submit – they should be non-interactive indefinitely
		locked.value = true

	const MIN_SEND_MS = 3500
		// Honeypot check (skip in preview/local environments)
		if (!isHoneypotBypassed() && honeypot.value.trim() !== '') {
			console.warn('Honeypot triggered; aborting submission.')
			return
		} else if (isHoneypotBypassed()) {
			console.info('Honeypot bypass active (staging/local).')
		}

		isSubmitting.value = true
		submissionError.value = null
		validationMessage.value = 'Слање наруџбине…'
	const sendStart = Date.now()

	let finalMessage: string | null = null
	let finalSuccess = false

	try {
			const fd = new FormData()
			fd.append('email', formData.value.email)
			fd.append('phone', formData.value.phone)
			fd.append('fullname', formData.value.fullname)
			fd.append('address', formData.value.address)
			fd.append('city', formData.value.city)
			fd.append('postal_code', formData.value.pobox)
			fd.append('book', formData.value.book)
			fd.append('price', currentPrice.value)
			fd.append('_subject', 'Нова поруџбина')
			// Optional redirect after success (uncomment & create page)
			// fd.append('_next', '/hvala.html')

			const resp = await fetch('https://formspree.io/f/xqarpayy', {
				method: 'POST',
				body: fd,
				headers: {
					'Accept': 'application/json'
				}
			})

			if (resp.ok) {
				// Use user-requested success message (short, consistent)
				finalMessage = 'Примљено. Очекујте потврду особља током дана.'
				finalSuccess = true
			} else {
				const data = await resp.json().catch(() => null)
				finalMessage = data && data.errors ? data.errors.map((e: any) => e.message).join(' | ') : 'Грешка при слању. Покушајте касније.'
				finalSuccess = false
			}
				// Do not clear any user input; keep entered values intact
					// Keep success state until user interacts again; cleared on focus or input
        
		} catch (err: any) {
			// Capture error, show message after the minimum send delay
			console.error('Submission error', err)
			finalMessage = 'Неочекивана грешка. Проверите везу.'
			finalSuccess = false
		} finally {
			const elapsed = Date.now() - sendStart
			if (elapsed < MIN_SEND_MS) {
				await new Promise(resolve => setTimeout(resolve, MIN_SEND_MS - elapsed))
			}

			// Update UI once at least MIN_SEND_MS has elapsed
			if (finalSuccess) {
				submissionSuccess.value = true
				validationMessage.value = finalMessage
			} else if (finalMessage) {
				submissionError.value = finalMessage
				validationMessage.value = finalMessage
			}

			isSubmitting.value = false
			// Re-run error state check (might reset styling if all cleared)
			checkErrorState()
		}
	}
	
	// Auto-focus email field when component mounts
	onMounted(async () => {
		await nextTick()
		emailInput.value?.focus()
	})
	</script>
