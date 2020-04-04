const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
hasTooltip.forEach((elem) => elem.addEventListener('click', showTooltip));

function showTooltip(e) {
  e.preventDefault();
  const tooltip = document.querySelector('.tooltip_active');
  if (tooltip != null) tooltip.parentElement.removeChild(tooltip);
  e.target.insertAdjacentHTML(
    'afterEnd',
    `<div class="tooltip tooltip_active" style="left: ${e.clientX}px; top: ${
      innerHeight - e.clientY < 50 ? e.clientY - 30 : e.clientY + 20
    }px">${e.target.getAttribute('title')}</div>`
  );
}
