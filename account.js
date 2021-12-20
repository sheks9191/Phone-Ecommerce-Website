//.....................................................

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


const navCon = document.querySelector('.navbar-container')
window.addEventListener('scroll', navBar);

function navBar() {
     if(window.scrollY > navCon.offsetHeight + 80) {
         navCon.classList.add('scroll')
     } else {
        navCon.classList.remove('scroll')
     }
}


// Account form

const accountCon = document.querySelector('.account-container')
const acctLogin = document.getElementById('acct-login')
const acctRegister = document.getElementById('acct-register')
acctRegister.addEventListener('click', () => {
    accountCon.classList.add('active')
})

acctLogin.addEventListener('click', () => {
    accountCon.classList.remove('active')
})

const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText  
    .split('')
    .map((letter,idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})



