const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;
const rotation = function() {
  rotatorCases[index].classList.remove('rotator__case_active');
  index++;
  if (index === rotatorCases.length) index = 0;
  rotatorCases[index].setAttribute(
    'style',
    `color: ${rotatorCases[index].dataset.color}`
  );
  rotatorCases[index].classList.add('rotator__case_active');
};
setInterval(rotation, 1000);
