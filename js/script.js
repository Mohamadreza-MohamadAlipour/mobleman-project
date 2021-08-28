const btn = document.querySelector('.hamburger-menu')
const list = document.querySelector('.nav-list-right')

btn.addEventListener('click', function () {
  list.classList.toggle('active')
  btn.classList.toggle('active')
})
