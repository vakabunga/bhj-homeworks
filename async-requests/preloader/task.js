const loader = document.getElementById('loader');
const items = document.getElementById('items');
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    loader.classList.remove('loader_active');
    responseData = JSON.parse(xhr.responseText).response.Valute;
    for (let prop in responseData) {
      items.insertAdjacentHTML(
        'beforeend',
        `<div class="item">
           <div class="item__code">
             ${responseData[prop].CharCode}
           </div>
           <div class="item__value">
             ${responseData[prop].Value}
           </div>
           <div class="item__currency">
              руб.
           </div>
        </div>`
      );
    }
  }
});
