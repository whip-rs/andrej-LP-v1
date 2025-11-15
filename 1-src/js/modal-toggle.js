import { createApp } from 'vue'

'use strict';

(function initModalToggle() {
	const run = () => {
		const modal = document.getElementById('modal');
		var scrollY = document.body.style.top;

		if (!modal) return;

		const callers = Array.from(document.querySelectorAll('a.modal-call'));
		const closes = Array.from(document.querySelectorAll('.close'));
		const overlays = Array.from(document.querySelectorAll('.overlay'));

		const open = (e) => {
			if (e) e.preventDefault();
			modal.classList.remove('hide');
			// PERHAPS DEBUG:
			document.body.style.top = `-${window.scrollY}px`;
			document.body.style.position = 'fixed';
		};

		const close = (e) => {
			if (e) e.preventDefault();
			modal.classList.add('hide');

			const scrollY = document.body.style.top;
			document.body.style.position = '';
				// document.documentElement.style.scrollBehavior = 'unset';
				// document.documentcumentElement.style.scrollBehavior = 'smooth !important';
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
			document.body.style.top = '';
		};

		callers.forEach((a) => a.addEventListener('click', open));
		closes.forEach((el) => el.addEventListener('click', close));
		overlays.forEach((el) => el.addEventListener('click', close));
	};

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', run, { once: true });
	} else {
		run();
	}
})();

