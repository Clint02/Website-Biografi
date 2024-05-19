const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const closeButton = document.querySelector('.close-button')

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open')
})

closeButton.addEventListener('click', () => {
  navLinks.classList.remove('open')
})

navLinks.addEventListener('click', () => {
  navLinks.classList.remove('open')
})
