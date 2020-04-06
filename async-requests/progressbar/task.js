const form = document.getElementById('form'); // забираем форму в переменную
const progress = document.getElementById('progress'); // забираем прогрессбар в переменную
// вешаем на форму обработчик события submit
form.addEventListener('submit', (e) => {
  const formData = new FormData(form); // создаем объект для отправки данных формы
  let xhr = new XMLHttpRequest(); // создаем запрос
  document // добавляем элемент в структуру страницы для отображения прогресса в цифрах
    .getElementsByTagName('body')[0]
    .insertAdjacentHTML('beforeEnd', `<div id='size'></div>`);
  xhr.open('post', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.upload.addEventListener('progress', (e) => {
    progress.value = (e.loaded / e.total).toFixed(1);
    document.getElementById('size').textContent = `${(e.loaded / 1024 / 1024).toFixed(2)} mb from ${(
      e.total / 1024 / 1024).toFixed(2)} mb`;
  });
  xhr.send(formData);
  e.preventDefault();
});
