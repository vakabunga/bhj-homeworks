document.querySelector('.cart').setAttribute('style', 'display:none');
const quantity = Array.from(document.querySelectorAll('.product__quantity-control'));
const addProduct = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');
quantity.forEach((elem) => elem.addEventListener('click', changeQuantity));
addProduct.forEach((elem) => elem.addEventListener('click', addToCart));

function changeQuantity(e) {
  if (e.target.classList.contains('product__quantity-control_dec')) {
    if (Number(e.target.nextElementSibling.textContent) != 0) {
      e.target.nextElementSibling.textContent--;
    }
  }
  if (e.target.classList.contains('product__quantity-control_inc')) {
    e.target.previousElementSibling.textContent++;
  }
}

function addToCart(e) {
  // debugger;
  if (Number(e.target.previousElementSibling.children[1].textContent) === 0) return;
  const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
  if (cartProduct.length === 0) {
    document.querySelector('.cart').removeAttribute('style');
    cartProducts.insertAdjacentHTML(
      'beforeEnd',
      `<div class="cart__product" data-id="${e.target.closest('.product').dataset.id}">
        <img class="cart__product-image" src="${e.target.closest('.product').querySelector('img').getAttribute('src')}">
        <div class="cart__product-count">${e.target.previousElementSibling.children[1].textContent}</div>
      </div>`
    );
  } else {
    const cartProductsId = cartProduct.map((elem) => elem.dataset.id);
    if (cartProductsId.includes(e.target.closest('.product').dataset.id)) {
      let index = cartProductsId.indexOf(e.target.closest('.product').dataset.id);
      cartProduct[index].lastElementChild.textContent =
        Number(cartProduct[index].lastElementChild.textContent) +
        Number(e.target.previousElementSibling.children[1].textContent);
    } else {
      cartProducts.insertAdjacentHTML(
        'beforeEnd',
        `<div class="cart__product" data-id="${e.target.closest('.product').dataset.id}">
          <img class="cart__product-image" src="${e.target
            .closest('.product')
            .querySelector('img')
            .getAttribute('src')}">
          <div class="cart__product-count">${e.target.previousElementSibling.children[1].textContent}</div>
        </div>`
      );
    }
  }
}
