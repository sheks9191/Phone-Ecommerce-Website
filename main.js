


// Logo Text
const logoTxt = document.querySelector('.logo-text');
const text = "Welcome/Bienvenue"
let index = 1

setInterval(logoText, 500);
function logoText() {
  logoTxt.innerText = text.slice(0, index)

  index++ 

  if(index > text.length)
   index = 1
}

// Products page nav
const navCon = document.querySelector('.navbar-container')
window.addEventListener('scroll', navBar);

function navBar() {
     if(window.scrollY > navCon.offsetHeight + 80) {
         navCon.classList.add('scroll')
     } else {
        navCon.classList.remove('scroll')
     }
}


const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const navContainer = document.querySelector('.nav-container')

openBtn.addEventListener('click', () => {
    navContainer.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    navContainer.classList.remove('active')
})

const chevron = document.querySelector('.chevron')
const searchB = document.querySelector('.searchB')

chevron.addEventListener('click', () => {
    searchB.classList.toggle('active')
    chevron.classList.toggle('active')
})








