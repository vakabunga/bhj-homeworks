document.querySelector('.cart').setAttribute('style', 'display:none'); // отключаем надпись Корзина
const quantity = Array.from(document.querySelectorAll('.product__quantity-control')); // фиксируем все элементы управления количеством
const addProduct = Array.from(document.querySelectorAll('.product__add')); // фиксируем все кнопки добавления в корзину
const cartProducts = document.querySelector('.cart__products'); // фиксируем контейнер для товаров в корзине
quantity.forEach((elem) => elem.addEventListener('click', changeQuantity)); // добавляем обработчик на кждый элемент управления количеством
addProduct.forEach((elem) => elem.addEventListener('click', addToCart)); // обработчик отправки товара в корзину
// управление количеством
function changeQuantity(e) {
  // выделяем кнопки уменьшения количества
  if (e.target.classList.contains('product__quantity-control_dec')) {
    if (Number(e.target.nextElementSibling.textContent) != 1) {
      e.target.nextElementSibling.textContent--;
    }
  }
  // выделяем кнопки увеличения количества
  if (e.target.classList.contains('product__quantity-control_inc')) {
    e.target.previousElementSibling.textContent++;
  }
}
//отправляем товар в корзину
function addToCart(e) {
  const productId = e.target.closest('.product');
  const cartProduct = Array.from(document.querySelectorAll('.cart__product')); // фиксируем элементы, которые уже есть в корзине
  // если в корзине элементов нет, то смело добавляем товар в корзину
  if (cartProduct.length === 0) {
    document.querySelector('.cart').removeAttribute('style');
    cartProducts.insertAdjacentHTML(
      'beforeEnd',
      `<div class="cart__product" data-id="${productId.dataset.id}">
        <img class="cart__product-image" src="${productId.querySelector('img').getAttribute('src')}">
        <div class="cart__product-count">${e.target.previousElementSibling.children[1].textContent}</div>
      </div>`
    );
  } // если что-то есть, то проверяем какой элемент в корзине уже есть
  else {
    const cartProductsId = cartProduct.map((elem) => elem.dataset.id); // создаем массив из id товаров
    // ищем в этом массиве id элемента, который хотим добавить, если он есть, то увеличиваем количество товара в корзине
    if (cartProductsId.includes(productId.dataset.id)) {
      let index = cartProductsId.indexOf(productId.dataset.id);
      cartProduct[index].lastElementChild.textContent =
        Number(cartProduct[index].lastElementChild.textContent) +
        Number(e.target.previousElementSibling.children[1].textContent);
    } // если его нет, то добавляем товар в корзину
    else {
      cartProducts.insertAdjacentHTML(
        'beforeEnd',
        `<div class="cart__product" data-id="${productId.dataset.id}">
          <img class="cart__product-image" src="${productId.querySelector('img').getAttribute('src')}">
          <div class="cart__product-count">${e.target.previousElementSibling.children[1].textContent}</div>
        </div>`
      );
    }
  }
}
