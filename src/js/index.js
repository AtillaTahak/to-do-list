import '../style.css';
import { checkList } from './checkbox.js';
import {createTask,deleteTaskIm, deleteAllFnc ,editTask} from './functionality.js';

const createTaskButton = document.querySelector("#createTask");
const createTaskText = document.querySelector('#newTask');
let todoList  = JSON.parse(localStorage.getItem('to-do'));
const htmlBody = document.querySelector("body");

if(todoList == null){
  todoList =[];
}
window.addEventListener('load', createTask(todoList));

createTaskButton.addEventListener('click',()=>{
  const createTaskObj = {description:createTaskText.value,completed:false, id: Math.random().toString(16).slice(2)};
  todoList.push(createTaskObj);
  createTask(todoList);
  location.reload();
});

window.deleteTaskFnc = id => {
  deleteTaskIm(id,todoList);
  location.reload();
}
const deleteAll= document.querySelector("#deleteAll");

deleteAllFnc(deleteAll);
const spanElemeny = document.getElementsByTagName('span');

editTask(spanElemeny,todoList,htmlBody);
const checkbox = document.querySelectorAll('input[name="checkbox"]');

checkList(checkbox, todoList);