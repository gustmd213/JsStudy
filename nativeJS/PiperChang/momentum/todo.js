const toDoList = document.querySelector('js-toDoList')
const toDoForm = toDoList.querySelector('toDoForm')

function generateToDo(text) {
  var newToDo = document.createElement('li');
  newToDo.innerText=text;
  toDoList.appendChild(newToDo)
}

toDoForm.addEventListener("submit",generateToDo)
