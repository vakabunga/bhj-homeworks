const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));
const tabNavigation = document.querySelector('.tab__navigation');
tabNavigation.addEventListener('click', showContent);

function showContent(e) {
  if (e.target === e.currentTarget) {
    return;
  } else {
    let i = 0;
    for (; i < tabs.length; i++) {
      if (tabs[i].classList.contains('tab_active')) break;
    }
    if (!e.target.classList.contains('tab_active')) {
      e.target.classList.add('tab_active');
      tabContent[tabs.indexOf(e.target)].classList.add('tab__content_active');
      tabs[i].classList.remove('tab_active');
      tabContent[i].classList.remove('tab__content_active');
    }
  }
}
