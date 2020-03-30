const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}
let timer = 1000;
const rotation = function() {
  rotatorCases[index].classList.remove('rotator__case_active');
  index++;
  if (index === rotatorCases.length) index = 0;
  rotatorCases[index].setAttribute(
    'style',
    `color: ${rotatorCases[index].dataset.color}`
  );
  timer = Number(rotatorCases[index].dataset.speed);
  sleep((timer));
  rotatorCases[index].classList.add('rotator__case_active');
};
setInterval(rotation, 0);
