const button = Array.from(document.getElementsByClassName('dropdown__value'));
const hiddenMenu = Array.from(
  document.getElementsByClassName('dropdown__list')
);

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', e =>
    !e.target.nextElementSibling.className.includes('dropdown__list_active')
      ? (e.target.nextElementSibling.className += ' dropdown__list_active')
      : (e.target.nextElementSibling.className = 'dropdown__list')
  );
}

for (let i = 0; i < button.length; i++) {
  hiddenMenu[i].addEventListener('click', selectMenuItem);
}

function selectMenuItem(e) {
  e.currentTarget.previousElementSibling.textContent = e.target.textContent;
  e.currentTarget.className = 'dropdown__list';
  e.preventDefault();
}