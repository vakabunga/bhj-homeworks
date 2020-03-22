const startValue = document.getElementById('clicker__counter');
const averageValue = document.getElementById('average_clicker_status');
const coockie = document.getElementById('cookie');
let clickTime = [0, 0]; //массив для записи времени клика
let switcher = 0; // переключатель индекса массива
const zeroFinder = elem => elem === 0; //функция исключения из расчета первого клика по печеньке

function counter() {
    // debugger;
    switcher = -switcher + 1; //переключаем переключатель
    clickTime[switcher] = new Date().getTime(); //записываем в массив время, когда кликнули
    startValue.textContent = Number(startValue.textContent) + 1; //обновляем днные счетчика кликов
    startValue.textContent % 2 === 0 ? coockie.width = 200 : coockie.width = 250; //чередуем изменение размера картинки по каждому клику (как вариант можно делать через switcher)
    if (!clickTime.some(zeroFinder)) { //исключаем из расчета первый клик по печеньке
        averageValue.textContent = Number((1 / + Math.abs(clickTime[0] - clickTime[1]) * 1000).toFixed(2)); //рассчитываем количество кликов в секунду, округляя до 2 знаков после запятой
    }
}

coockie.onclick = counter; //запускаем обработчик события по клику на печеньку