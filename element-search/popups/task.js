const modal = document.getElementById('modal_main');
const done = document.getElementById('modal_success');
modal.className += ' modal_active';
const doGood = document.getElementsByClassName('btn btn_danger modal__close show-success');
doGood[0].onclick = () => {
    modal.className = 'modal';
    done.className += ' modal_active';
}

const close = document.getElementsByClassName('modal__close_times');
for (let i = 0; i < close.length; i++) {
    close[i].onclick = () => {
        done.className = 'modal';
        modal.className = 'modal';
    }
}