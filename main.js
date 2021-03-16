const mobilebtn = document.getElementById('mobile-cta')
const nav = document.querySelector('nav')
const mobileBtnExit = document.getElementById('mobile-exit')

mobilebtn.addEventListener('click', () => {
  nav.classList.add('menu-btn')
})
mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn')
})

// const mobileBtn = document.getElementById('mobile-cta')
// nav = document.querySelector('nav')
// mobileBtnExit = document.getElementById('mobile-exit')

// mobileBtn.addEventListener('click', () => {
//   nav.classList.add('menu-btn')
// })

// mobileBtnExit.addEventListener('click', () => {
//   nav.classList.remove('menu-btn')
// })
