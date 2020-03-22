const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

getHole = index => {
    let idName = 'hole' + index;
    return document.getElementById(idName);
}

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = isMole;
}

function isMole() {
    this.className.includes('hole_has-mole') ? dead.textContent = Number(dead.textContent) + 1 : lost.textContent = Number(lost.textContent) + 1;
    if (dead.textContent == 10) {
        alert('Вы победили!');
        dead.textContent = 0;
        lost.textContent = 0;
    }
    if (lost.textContent == 5) {
        alert('Вы проиграли!');
        dead.textContent = 0;
        lost.textContent = 0;
    }
}