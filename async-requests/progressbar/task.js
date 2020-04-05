const form = document.getElementById('form');
const progress = document.getElementById('progress');
form.addEventListener('submit', (e) => {
  const formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  document
    .getElementsByTagName('body')[0]
    .insertAdjacentHTML('beforeEnd', `<div id='size'></div>`);
  xhr.open('post', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.upload.addEventListener('progress', (e) => {
    progress.value = (e.loaded / e.total).toFixed(1);
    document.getElementById('size').textContent = `${(e.loaded / 1024 / 1024).toFixed(2)} mb from ${(
      e.total / 1024 / 1024).toFixed(2)} mb`;
  });
  // xhr.addEventListener('readystatechange', function () {
  //   if (this.readyState === 4) {
  //     alert(`success`);
  //   }
  // });
  xhr.send(formData);
  e.preventDefault();
});
