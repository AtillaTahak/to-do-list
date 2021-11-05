import { updateLocal } from './checkbox.js';


export const createTask = (taskListGet) => {
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
    elementButton.setAttribute("onclick", "deleteTaskFnc(this.id)")
    elementButton.innerHTML = '<i class="fas fa-window-close"></i>';
    elementUl.appendChild(elementLi);
    elementSection.appendChild(elementUl);

  });
  updateLocal(taskListGet);
};

export function deleteTaskIm(deleteTask, todoList) {
  const index = todoList.findIndex((prop) => prop.id === deleteTask);
  todoList.splice(index, 1);
  createTask(todoList);
}
export const deleteAllFnc = deletebtn => {
  deleteAll.addEventListener('click', () => {
    todoList = [];
    createTask(todoList);
  });

}
export function editTask(taskListGet,todoList,htmlBody) {
console.log(taskListGet);

 

  for (let i = 0; i < taskListGet.length; i++) {
    taskListGet[i].addEventListener('click', (e) => {
   
     e.target.style.display = "none";
     console.log(e.path[1].children.length);
     const textBox = document.createElement("input");
     const btnTextBox = document.createElement("button");
     textBox.id =e.target.id;


     for (let a = 0; a < e.path[1].children.length; a++) {
      e.path[1].children[a].style.display ="none";
       
     }
     textBox.type ="text"
     textBox.className ="text-box";
     textBox.value = e.path[0].innerHTML;
     e.path[1].appendChild(textBox);

     //------------
     htmlBody.addEventListener('click',(b)=>{
      if (b.path[1].id ==="checkbox") {

        
      }
      else{
       todoList.forEach((a)=>{
          if (a.id==e.path[0].id) {
            a.description =textBox.value;
            createTask(todoList);
          } 
        }) 
  

      }


    
    });






    });

  }
}

const checkMouse = htmlBody =>{



}
