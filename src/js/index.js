import css from '../style.css';

const taskList = document.querySelector('.list-body');



const taskListObject =[
    {
        description: "Task 1",
        completed:false,
        index:1,
    },
    {
        description: "Task 1",
        completed:false,
        index:1,
    },
    {
        description: "Task w",
        completed:true,
        index:1,
    }
]
window.addEventListener('load',()=>{
    createTask(taskListObject);
})

const createTask= taskListGet =>{
    const elementSection = document.querySelector('.list-body');
    taskListGet.forEach((e)=>{
        const elementUl = document.createElement('ul');
        const elementLi =document.createElement('li');
        const elementInput = document.createElement('input');
        elementInput.name ="task";
        elementInput.id ="task1";
        elementInput.type="checkbox";
        const elementSpan = document.createElement('span');
        const elementButton = document.createElement('button');
       
        
        elementInput.checked =e.completed;
        elementLi.appendChild(elementInput);
        elementSpan.innerHTML =e.description;
        elementLi.appendChild(elementSpan);
        elementLi.appendChild(elementButton);
        elementButton.innerHTML ='<i class="fas fa-window-close"></i>';
    
        elementUl.appendChild(elementLi);
        elementSection.appendChild(elementUl);
      

     })

}