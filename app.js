//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');




//Event listners
todoButton.addEventListener('click',addToDo);
//functions
function addToDo(event){
   event.preventDefault();
   const todoDiv = document.createElement("div");
   const newToDo = document.createElement('li');

   newToDo.innerText='hey';
   newToDo.classList.add('todo-item');
   todoDiv.appendChild(newToDo);
   //completedbutton
  const completedButton = document.createElement('button');
  completedButton.innerHtml ='<i class ="fas fa-check"></i>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);
  //ccheck trash button
  const trashButton = document.createElement('button');
  trashButton.innerHtml ='<i class ="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //append to list
  todoList.appendChild(todoDiv) 
}