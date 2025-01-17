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
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
}


// ITERATION 5

function createProduct() {
  const createProduct = document.querySelectorAll('.create-product input');
  const product = createProduct[0].value;
  const price = createProduct[1].value;

  const rowProduct = `<td class="name"><span>${product}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity">
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;

  const tr = document.createElement('tr');
  tr.classList.add('product');
  tr.innerHTML = rowProduct;
  document.querySelector('tbody').appendChild(tr);

  const removeRows = document.querySelectorAll('.btn-remove');
  removeRows.forEach(function (row) {
    row.addEventListener('click', removeProduct);
  });

  createProduct[0].value = '';
  createProduct[1].value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

const removeRows = document.querySelectorAll('.btn-remove');
removeRows.forEach(function (row) {
  row.addEventListener('click', removeProduct);
});

window.addEventListener('load', () => {
  const createProductListener = document.getElementById('create');
  createProductListener.addEventListener('click', createProduct);
})