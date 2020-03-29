const bookControls = Array.from(document.querySelectorAll('.book__control'));
const books = document.getElementById('book');
for (let i = 0; i < bookControls.length; i++) {
  bookControls[i].addEventListener('click', changeProp);
}

function changeProp(e) {
  if (bookControls.indexOf(e.currentTarget) === 0) {
    document
      .querySelector('.font-size_active')
      .classList.remove('font-size_active');
    books.classList.remove('book_fs-small');
    books.classList.remove('book_fs-big');

    if (e.target.dataset.size === 'small') {
      e.target.classList.add('font-size_active');
      books.classList.add('book_fs-small');
    } else if (e.target.dataset.size === 'big') {
      e.target.classList.add('font-size_active');
      books.classList.add('book_fs-big');
    } else {
      e.target.classList.add('font-size_active');
    }
  }

  if (bookControls.indexOf(e.currentTarget) === 1) {
    document
      .querySelectorAll('.color_active')[0]
      .classList.remove('color_active');
    books.classList.remove('book_color-gray');
    books.classList.remove('book_color-whitesmoke');

    if (e.target.dataset.color === 'gray') {
      e.target.classList.add('color_active');
      books.classList.add('book_color-gray');
    } else if (e.target.dataset.color === 'whitesmoke') {
      e.target.classList.add('color_active');
      books.classList.add('book_color-whitesmoke');
    } else {
      e.target.classList.add('color_active');
    }
  }

  if (bookControls.indexOf(e.currentTarget) === 2) {
    document
      .querySelectorAll('.color_active')[1]
      .classList.remove('color_active');
    books.classList.remove('book_bg-black');
    books.classList.remove('book_bg-gray');

    if (e.target.dataset.color === 'black') {
      e.target.classList.add('color_active');
      books.classList.add('book_bg-black');
    } else if (e.target.dataset.color === 'gray') {
      e.target.classList.add('color_active');
      books.classList.add('book_bg-gray');
    } else {
      e.target.classList.add('color_active');
    }
  }

  e.preventDefault();
}
