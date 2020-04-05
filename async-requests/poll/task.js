const poll = document.querySelector('.poll');
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    responseData = JSON.parse(xhr.responseText).data;
    poll.firstElementChild.textContent = responseData['title'];
    for (let i = 0; i < responseData['answers'].length; i++) {
      poll.lastElementChild.insertAdjacentHTML(
        'beforeEnd',
        `<button class="poll__answer">
          ${responseData['answers'][i]}
        </button>`
      );
      const button = Array.from(document.querySelectorAll('.poll__answer'));
      // debugger;
      if (button.length > 0) {
        button[i].addEventListener('click', () => {
          alert(`Спасибо, ваш голос засчитан!`);
          location.reload();
        });
      }
    }
  }
});
