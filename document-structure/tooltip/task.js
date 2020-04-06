const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip')); // создаем массив элементов, требующих подсказки
hasTooltip.forEach((elem) => elem.addEventListener('click', showTooltip)); // вешаем обработчик событий на каждый элемент

function showTooltip(e) {
  e.preventDefault(); // отрубаем дефолтную реакцию
  const tooltip = document.querySelector('.tooltip_active'); // записываем в переменную активную подсказку
  if (tooltip != null) {
    // если активная подсказка существует, удаляем ее
    tooltip.parentElement.removeChild(tooltip);
    // если нажимаем на ту же подсказку - прерываем функцию, чтобы не рисовать подсказку заново
    if (e.target.getAttribute('title') === tooltip.textContent) return;
  }

  e.target.insertAdjacentHTML(
    'afterEnd',
    `<div class="tooltip tooltip_active" style="left: ${e.clientX}px; top: ${
      innerHeight - e.clientY < 50 ? e.clientY - 30 : e.clientY + 20
    }px">${e.target.getAttribute('title')}</div>`
  );
}
