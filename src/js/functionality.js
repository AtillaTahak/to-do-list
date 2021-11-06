import { updateLocal } from './checkbox.js';

export default function createTask(taskListGet) {
  const elementSection = document.querySelector('.list-body');
  elementSection.innerHTML = '';
  const elementUl = document.createElement('ul');

  taskListGet.forEach((e) => {
    const elementLi = document.createElement('li');
    elementLi.setAttribute('id', 'checkbox');
    if (e.completed === true) {
      elementLi.className = 'line';
    } else {
      elementLi.className = '';
    }
    const elementInput = document.createElement('input');
    elementInput.id = e.id;
    elementInput.type = 'checkbox';
    elementInput.name = 'checkbox';

    const elementSpan = document.createElement('span');
    elementSpan.id = e.id;
    const elementButton = document.createElement('button');

    elementInput.checked = e.completed;
    elementLi.appendChild(elementInput);
    elementSpan.innerHTML = e.description;
    elementLi.appendChild(elementSpan);
    elementLi.appendChild(elementButton);
    elementButton.id = e.id;
    elementButton.setAttribute('onclick', 'deleteTaskFnc(this.id)');
    elementButton.innerHTML = '<i class="fas fa-window-close"></i>';
    elementUl.appendChild(elementLi);
    elementSection.appendChild(elementUl);
  });
  updateLocal(taskListGet);
}

export { createTask };