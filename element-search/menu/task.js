const menuLink = Array.from(document.querySelectorAll('.menu__link'));

for (let i = 0; i < menuLink.length; i++) { //Задаем обработчик событий только на те пункты меню, у которых есть подменю
    if (menuLink[i].parentElement.querySelector('.menu_sub') != null) {
        menuLink[i].onclick = showMenu;
    }
}

function showMenu() {
    const isMenuActive = Array.from(document.querySelectorAll('.menu_active'));
    this.parentElement.querySelector('.menu_sub').className.includes('menu_active') ?
        this.parentElement.querySelector('.menu_sub').className = 'menu menu_sub' :
        this.parentElement.querySelector('.menu_sub').className += ' menu_active';
    if (isMenuActive[0] != undefined) {
        isMenuActive[0].className = 'menu menu_sub';
    }
    return false;
}