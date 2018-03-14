setTimeout(() => {
  let child = document.getElementById('loadder')
  document.body.removeChild(child)
}, 3000)

const links = document.querySelectorAll('.menu-item')
let showing = document.querySelector('.active')
let currentCard = document.querySelector('#' + showing.dataset.target)
const SHOWING_CLASS = 'showing'
const HIDDING_CLASS = 'hidden'

for (let link of links) {
  link.addEventListener('click', (e) => {
    let selector = e.target.dataset.target
    let el = document.getElementById(selector)
    console.log(e, selector, el)
    currentCard.classList.remove(SHOWING_CLASS)
    currentCard.classList.add(HIDDING_CLASS)
    el.classList.remove(HIDDING_CLASS)
    el.classList.add(SHOWING_CLASS)
    currentCard = el
    e.target.classList.add('active')
    showing.classList.remove('active')
    showing = e.target
  })
}