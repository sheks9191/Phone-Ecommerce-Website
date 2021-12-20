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




// Cart Js/ Products js

const deleteBtn = document.querySelectorAll('.delete-btn')
const addBtn = document.querySelectorAll('.cart-btn')
const cart = document.querySelector('.cart')
const cartCon = document.querySelector('.cart-container')
const inputQuantities = document.querySelectorAll('.cart-input')
const purchaseBtn = document.querySelector('.purchase-btn')
const search = document.getElementById('search')

cart.addEventListener('click', () => {
    cartCon.classList.toggle('active')
})



//.................Cart Removed.................................

const cartRemoved = (e) => {

        e.target.parentElement.parentElement.remove()

      updateTotal()
      cartRemovedUpdate()
      alertBoxB('Product deleted', "deleted")
}



//...................Changed Quantity....................................

const changedQuantity = (e) => {
    if(isNaN(e.target.value) || e.target.value <= 0) {
        e.target.value = 1
    }

    updateTotal()
}




//...................Update Total....................................

function updateTotal() {
 let cartBody = document.getElementsByClassName('table-body')[0]
 let cartContents = cartBody.getElementsByClassName('cart-content')
 let total = 0
     for (let i = 0; i < cartContents.length; i++ ){
         let cartContent = cartContents[i]
     let priceEl = cartContent.getElementsByClassName('cart-product-price')[0]
     let quantityEl = cartContent.getElementsByClassName('cart-input')[0]
     

     
     let quantity = quantityEl.value
     let price = parseFloat(priceEl.innerText.replace('$', ''))
     total = total + (price * quantity)
     
 
    }
 document.getElementsByClassName('total-price')[0].innerText = '$' + (total).toFixed(2)
}




//....................Add Cart.......................................

function addCart(e) {
    let productContent = e.target.parentElement
    let title = productContent.getElementsByClassName('cart-content-title')[0].innerText 
    let price = productContent.getElementsByClassName('price')[0].innerText
    let image = productContent.getElementsByClassName('cart-img')[0].src

    cartContent(title, price, image)
    updateTotal()
    cartUpdate()
    alertBox('Product added, Thank You!', "success")   
    
     

}


function cartContent(title, price, image) {

    let newDiv = document.createElement('div')
    newDiv.classList.add('cart-content')
    let cartBody = document.getElementsByClassName('table-body')[0]
    
     newDiv.innerHTML = `

    <div class="cart-img">
       <img src="${image}" width="200px" height="300px"><br>
       <span class="cart-product-title">${title}</span>
   </div>

    <span class="cart-product-price">${price}</span>

    <div class="cart-product-quantity">
       <input type="number" value="1" class="cart-input">
       <button class="btn delete-btn" type="button">Delete</button>
    </div> `
    cartBody.appendChild(newDiv)
    newDiv.getElementsByClassName('delete-btn')[0].addEventListener('click', cartRemoved)
    
    newDiv.getElementsByClassName('cart-input')[0].addEventListener('change', changedQuantity)
}

//................Cart Updates.................................
let cartCounter = document.querySelector('.cart-counter')
let counter = 0
const cartUpdate = () => {
    cart.classList.add('active');
    counter += 1
    cartCounter.textContent = counter
    
}

const cartRemovedUpdate = () => {
    counter -= 1
    cartCounter.textContent = counter

    if(counter <= 0) {
        cart.classList.remove('active')
    } else {
        cart.classList.add('active')
    }
    
}

//.......................Clear Purchases............................................
  const clearPurchases = () => {

    alertBoxB('Thank you for your patronage!', "success")  
      document.querySelector('.table-body').innerHTML = ''
      document.querySelector('.cart-counter').style.display = 'none'
      updateTotal()
      
  }


//.....................Product Filter....................................................


function productFilter(e) {

    const text = e.target.value.toLowerCase() 

   document.querySelectorAll('.content').forEach(product => {
      const item = product.getElementsByClassName('cart-content-title')[0].innerText

      if(item.toLowerCase().indexOf(text) !== -1) {
         product.style.display = 'block';
        }else {
         product.style.display = 'none';
         
     }
   })
  }

  //..................Alert Box..................................................................

    function alertBox(message, className) {

    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const productPage = document.querySelector('.product-page'),
          featuredProducts = document.querySelector('.featured-products');

    featuredProducts.insertBefore(div, productPage);

    setTimeout(function(){
        document.querySelector('.alert').remove()
    }, 2000);
}

function alertBoxB(message, className) {

    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const tableHead = document.querySelector('.table-header'),
          cartContainer = document.querySelector('.cart-container');

    cartContainer.insertBefore(div, tableHead);

    setTimeout(function(){
        document.querySelector('.alert').remove()
    }, 2000);
}




//..................Event Listener.....................................................
function updateEventListener () {

inputQuantities.forEach(inputQty => {
    inputQty.addEventListener('change', changedQuantity)
})

deleteBtn.forEach(button => {
    button.addEventListener('click', cartRemoved)
})

addBtn.forEach(button => {
    button.addEventListener('click', addCart)   
})

purchaseBtn.addEventListener('click', clearPurchases)

search.addEventListener('keyup', productFilter)

} 


updateEventListener ()