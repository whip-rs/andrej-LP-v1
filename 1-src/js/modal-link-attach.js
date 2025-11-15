'use strict';

const modal = document.getElementById('modal')
const frame = document.getElementById('contentFrame')
const triggers = document.querySelectorAll('.modal-call')
// const spinner = document.getElementById('spinner') // optional

triggers.forEach(el => {
el.addEventListener('click', () => {
const target = el.dataset.src
// spinner.style.display = 'block'
frame.src = 'about:blank'
modal.classList.remove('hide')

// frame.onload = () => {
// spinner.style.display = 'none'
// }

frame.src = target
})
})
