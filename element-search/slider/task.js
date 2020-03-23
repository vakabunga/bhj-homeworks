const arrows = Array.from(document.querySelectorAll('.slider__arrow'));
const slider = Array.from(document.querySelectorAll('.slider__item'));
let currentSlide;
const dots = Array.from(document.querySelectorAll('.slider__dot'));

for (let i = 0; i < slider.length; i++) { //вычисляем текущий слайд
    if (slider[i].className.includes('slider__item_active')) {
        currentSlide = i;
        dots[i].className += ' slider__dot_active';
    }
}

arrows[0].onclick = showSlide;
arrows[1].onclick = showSlide;

function unsetSlide() { //возвращаем точке и слайду неактивное состояние
    slider[currentSlide].className = 'slider__item';
    dots[currentSlide].className = 'slider__dot';
}

function setSlide() { //делаем слайд и точку активной
    slider[currentSlide].className += ' slider__item_active';
    dots[currentSlide].className += ' slider__dot_active';
}

function showSlide() { //обрабатываем событие на стрелках
    unsetSlide();
    if (this.className.includes('slider__arrow_prev')) {
        currentSlide === 0 ? currentSlide = slider.length - 1 : currentSlide -= 1;
    }
    else currentSlide === slider.length - 1 ? currentSlide = 0 : currentSlide += 1;
    setSlide();
}

for (let i = 0; i < dots.length; i++) { //заряжаем событие на каждую точку
    dots[i].onclick = showDot;
}

function showDot() {
    unsetSlide();
    currentSlide = dots.indexOf(this);
    setSlide();
}