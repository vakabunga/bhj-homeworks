const modal = document.getElementById('subscribe-modal');
const closeModal = document.querySelector('.modal__close_times');
const getCookie = (name) => {
  debugger;
  const value = '; ' + document.cookie;
  let parts = value.split('; ' + name + '=');
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};
// if () {
modal.classList.add('modal_active');

// }
closeModal.onclick = () => {
  modal.classList.remove('modal_active');
  document.cookie = 'name=modalIsShown';
};