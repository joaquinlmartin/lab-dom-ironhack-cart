// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
  return subtotal;
}

// ITERATION 2
// ITERATION 3

function calculateAll() {
    let cart = document.querySelector('#cart');
    let products = cart.querySelectorAll('.product');
    let total = 0;
  
    products.forEach((allProduct)=>{
      total += updateSubtotal(allProduct);
    });
    document.querySelector('#total-value span').innerText = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  document.querySelectorAll('.product').forEach((product) => product.remove());
  for (let i = 0; i < product.length; i++) {
    addEventListener(click);
    return 
  }
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //let product = target.closest('.product');
  let elem = document.getElementsByClassName('.product');
  elem.parentNode.removeChild(elem);
  //cart.removeChild('.product').innerText = removeChild('click');
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
