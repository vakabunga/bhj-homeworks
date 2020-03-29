const wantedDivs = Array.from(document.getElementsByClassName('reveal'));
document.addEventListener('scroll', showReveal);

function showReveal() {
  for (let i = 0; i < wantedDivs.length; i++) { // обходим все нужные элементы
    isReveal(wantedDivs[i])
      ? wantedDivs[i].classList.add('reveal_active') // если элемент в поле видимости - покаыавем его
      : wantedDivs[i].classList.remove('reveal_active');
  }
}

const isReveal = function(e) {
  //функция, которая проверяет на вдимость элемента
  const viewportHeight = window.innerHeight; // задаем высоту видимого окна
  const elementTop = e.getBoundingClientRect().top; // вычисляем координату нужного элемента
  return elementTop < viewportHeight && elementTop > 0 ? true : false; // если элемент в поле зрения - возвращаем 1
};