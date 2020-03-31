const rotatorCases = Array.from(document.querySelectorAll('.rotator'));
let index = 0;
rotatorCases.forEach(item => rotation(item.children));

function rotation(e) {
  console.log(e);
  // debugger;
  index++;
  if (index === Array.from(e).length) {
    e[index - 1].classList.remove('rotator__case_active');
    index = 0;
  } else e[index - 1].classList.remove('rotator__case_active');
  e[index].classList.add('rotator__case_active');
  e[index].setAttribute('style', `color: ${e[index].dataset.color}`);
  const timer = Number(e[index].dataset.speed);
  setTimeout(rotation, timer, e);
}
