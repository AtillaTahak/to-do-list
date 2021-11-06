import { createTask } from './functionality.js';

export const deleteAllFnc = (deletebtn, todoList) => {
  deletebtn.addEventListener('click', () => {
    todoList = todoList.filter((cl) => cl.completed === false);
    createTask(todoList);
    window.location.reload();
  });
};

export function deleteTaskIm(deleteTask, todoList) {
  const index = todoList.findIndex((prop) => prop.id === deleteTask);
  todoList.splice(index, 1);
  createTask(todoList);
  window.location.reload();
}
