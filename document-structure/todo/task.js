const taskInput = document.getElementById('task__input');
const addTasks = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

addTasks.addEventListener('click', e => {
  // debugger;
  e.preventDefault();
  if (taskInput.value != '') {
    tasksList.insertAdjacentHTML(
      'beforeEnd',
      `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`
    );
    taskInput.value = '';
    const taskRemove = Array.from(tasksList.querySelectorAll('.task__remove'));
    taskRemove[taskRemove.length - 1].addEventListener('click', deleteTask);
  }
});

function deleteTask(e) {
  e.preventDefault();
  tasksList.removeChild(this.parentElement);
}
