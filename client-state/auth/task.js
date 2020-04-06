const signin = document.getElementById('signin'); // фиксируем контейнер формы в переменную
signin.classList.add('signin_active'); // показываем форму регистрации
const form = document.getElementById('signin__form'); // фиксируем форму регистрации в переменную
const inputs = document.querySelectorAll('.control'); // собираем все поля форм в одну переменную
const welcome = document.getElementById('welcome'); // фиксируем контейнер успешного входа в переменную
const userid = document.getElementById('user_id'); // фиксируем строку с user id
welcome.insertAdjacentHTML('beforeEnd', '<button class="btn" id="signout__btn">Выйти</button>'); // добавляем кнопку выхода
const signoutButton = document.getElementById('signout__btn'); // записываем кнопку в переменную
signoutButton.onclick = () => {
  // функция на нажатие кнопки "выйти"
  localStorage.removeItem('userid'); // стираем userId из localStorage
  form.classList.remove('signin'); // показываем форму активации
  welcome.classList.remove('welcome_active'); // скрываем успешный вход
  inputs.forEach((e) => (e.value = '')); // стираем поля форм
};
// функция показывает контейнер успешного входа. переменная - откуда берем userId
function welcomeUser(whereUserIdFrom) {
  form.classList.add('signin'); // скрываем форму регистрации
  welcome.classList.add('welcome_active'); // показываем контейнер успешного входа
  userid.textContent = whereUserIdFrom; // показываем user id на страницу
}

if (localStorage.userid != undefined) {
  welcomeUser(localStorage.userid);
}
form.addEventListener('submit', (e) => {
  const formData = new FormData(form); // создаем объект для отправки данных формы
  let xhr = new XMLHttpRequest(); // создаем запрос
  xhr.open('post', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.send(formData); // отправляем данные

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
      responseData = JSON.parse(xhr.responseText); // получаем и парсим ответ от сервера
      // если логин неверный, то выдаем ошибку и стираем поля форм
      if (!responseData['success']) {
        alert('Неверные логин/пароль');
        inputs.forEach((e) => (e.value = ''));
      } else {
        welcomeUser(responseData['user_id']); // показываем user id на страницу
        localStorage.setItem('userid', responseData['user_id']); // сохраняем userId в localStorage
      }
    }
  });
  e.preventDefault();
});
