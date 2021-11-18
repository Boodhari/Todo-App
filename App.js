function addTodo() {

const inputElement = document.querySelector('input');
const value= inputElement.value;
const todoContainer = document.createElement('div');
todoContainer.className='flex justify-between item-center';
const todoTitle = document.createElement('h4');
todoTitle.textContent=value;
const doneBotton = document.createElement('button');
doneBotton.className='bg-green-500 p-2 rounded-lg';
doneBotton.textContent='Done';
todoContainer.appendChild(todoTitle);
todoContainer.appendChild(doneBotton);


const allTodosContainer= document.querySelector('#todosContainer');
allTodosContainer.appendChild(todoContainer);
inputElement.value='';
}
