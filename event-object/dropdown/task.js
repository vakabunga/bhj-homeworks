const button = document.getElementsByClassName('dropdown__value');
const hiddenMenu = Array.from(document.getElementsByClassName('dropdown__list'));
button[0].addEventListener('click', showMenu);

function showMenu() {
    !hiddenMenu[0].className.includes('dropdown__list_active') ? hiddenMenu[0].className += ' dropdown__list_active' : hiddenMenu[0].className = 'dropdown__list';
}

hiddenMenu[0].addEventListener('click', selectMenuItem);
hiddenMenu[0].addEventListener('click', showMenu);

function selectMenuItem(e) {
    button[0].textContent = e.target.textContent;
    e.preventDefault();
}