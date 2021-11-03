import '../style.css';
import { checkList } from './checkbox.js';

let i = 0;
const todoList = JSON.parse(localStorage.getItem('to-do'));

const taskListObject = [
  {
    description: 'Task 1',
    completed: false,
    id: i += 1,
  },
  {
    description: 'Task 2',
    completed: false,
    id: i += 1,
  },
  {
    description: 'Task w',
    completed: false,
    id: i += 1,
  },
];

const createTask = (taskListGet) => {
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
    const elementButton = document.createElement('button');

    elementInput.checked = e.completed;
    elementLi.appendChild(elementInput);
    elementSpan.innerHTML = e.description;
    elementLi.appendChild(elementSpan);
    elementLi.appendChild(elementButton);
    elementButton.innerHTML = '<i class="fas fa-window-close"></i>';

    elementUl.appendChild(elementLi);
    elementSection.appendChild(elementUl);
  });
};
if (todoList != null) {
  window.addEventListener('load', createTask(todoList));
} else {
  window.addEventListener('load', createTask(taskListObject));
}

const checkbox = document.querySelectorAll('input[name="checkbox"]');

checkList(checkbox, taskListObject);
