const modal = document.getElementById('subscribe-modal');
const closeModal = document.querySelector('.modal__close_times');
const name = 'modal';
const getCookie = (name) => {
  const value = '; ' + document.cookie;
  let parts = value.split('; ' + name + '=');
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};
if (getCookie(name) != 'isShown') {
  modal.classList.add('modal_active');
}
closeModal.onclick = () => {
  modal.classList.remove('modal_active');
  document.cookie = 'modal=isShown';
};
