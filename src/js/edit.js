import {
  createTask,
} from './functionality.js';

export default function editTask(taskListGet, todoList) {
  for (let i = 0; i < taskListGet.length; i += 1) {
    taskListGet[i].addEventListener('click', (e) => {
      e.target.style.display = 'none';
      const textBox = document.createElement('input');
      textBox.id = e.target.id;
      for (let a = 0; a < e.path[1].children.length; a += 1) {
        e.path[1].children[a].style.display = 'none';
      }
      textBox.type = 'text';
      textBox.className = 'text-box';
      textBox.value = e.path[0].innerHTML;
      e.path[1].appendChild(textBox);
      document.querySelector('.text-box').addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          todoList.forEach((a) => {
            if (a.id === e.path[0].id) {
              a.description = textBox.value;
              createTask(todoList);
              window.location.reload();
            }
          });
        }
      });
    });
  }
}
export { editTask };