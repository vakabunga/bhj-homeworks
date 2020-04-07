const editor = document.getElementById('editor'); // фиксируем в переменной поле ввода
editor.value = localStorage.getItem('textarea'); // подгружаем в поле ввода текст, который был сохранен, если был сохранен
editor.insertAdjacentHTML('afterend', '<div><button type="button" id="reset">Очистить поле</button></div>'); // добавляем кнопку на страницу
const button = document.getElementById('reset'); // фикисруем кнопку в переменную
// при клике на кнопку, очищаем поле и localStorage
button.addEventListener('click', (e) => {
  editor.value = '';
  localStorage.removeItem('textarea');
});
// записываем в localStorage текст в textarea при снятии фокуса с текстового поля
editor.addEventListener('input', () => {
  localStorage.setItem('textarea', editor.value);
});
