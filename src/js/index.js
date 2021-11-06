import '../style.css';
import { checkList } from './checkbox.js';
import { createTask } from './functionality.js';
import { editTask } from './edit.js';
import { deleteTaskIm, deleteAllFnc } from './delete.js';

const createTaskButton = document.querySelector('#createTask');
const createTaskText = document.querySelector('#newTask');
let todoList = JSON.parse(localStorage.getItem('to-do'));

if (todoList == null) {
  todoList = [];
}
const deleteAll = document.querySelector('#deleteAll');

deleteAllFnc(deleteAll, todoList);
window.addEventListener('load', createTask(todoList));

createTaskButton.addEventListener('click', () => {
  const createTaskObj = {
    description: createTaskText.value,
    completed: false,
    id: Math.random().toString(16).slice(2),
  };
  todoList.push(createTaskObj);

  createTask(todoList);
  window.location.reload();
});

window.deleteTaskFnc = (id) => {
  deleteTaskIm(id, todoList);
};

const spanElemeny = document.getElementsByTagName('span');

editTask(spanElemeny, todoList);
const checkbox = document.querySelectorAll('input[name="checkbox"]');

checkList(checkbox, todoList);