const chatWidget = document.querySelector('.chat-widget');
// активируем чат
chatWidget.addEventListener('click', () =>
  chatWidget.classList.add('chat-widget_active')
);
// закрываем чат клавишей Esc
document.addEventListener('keydown', e => {
  if (e.keyCode === 27) chatWidget.classList.remove('chat-widget_active');
});
// фиксируем форму в переменную
const clientMessage = document.getElementById('chat-widget__input');

// слушаем нажатие клавиши Enter и отправляем сообщение, если оно не пустое
clientMessage.addEventListener('keypress', e => {
  if (e.charCode === 13)
    clientMessage.value != ''
      ? addMsg('message_client', clientMessage.value)
      : alert('Не дразните бота! Введите сообщение!');
});

const addMessages = document.querySelector('.chat-widget__messages');
// БД выражений бота
botMessages = [
  'Добрый день!',
  'Как звать-величать?',
  'Язык сломаешь',
  'Ничем не могу помочь',
  'Таки шо теперь делать?',
  'Как ты меня назвал?',
  'Судя по твоей геолокации, ты не так уж и далеко, чтобы дерзить',
  'Я вас не звал',
  'Не виноватый я. Ты сам пришел',
  'Почем опиум для народа?',
  'Маску надел?',
  'Акция! один флакон антисепика по цене трёх!',
  'Все. Надоел. Пока',
  'Пока. Целую. Снишься.'
];
// отправляем сообщение в чат
function addMsg(who, msg) {
  // выбираем рандомно сообщение бота
  const botMessage =
    botMessages[Math.round(Math.random() * (botMessages.length - 1))];
  // узнаем текущее время
  const time = new Date();
  // добавляем разметку на страницу. who - добавляем класс, если клиент. и само сообщение бота или клиента
  addMessages.innerHTML += `
  <div class="message ${who}"> 
    <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
    <div class="message__text">
      ${msg}
    </div>
  </div>
`;
  // если сообщение было от клиента, добавляем сообщение от бота
  if (who === 'message_client') addMsg('', botMessage);
  clientMessage.value = ''; // очищаем форму
}
