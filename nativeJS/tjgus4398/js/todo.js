const todoForm = document.querySelector("#todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list")

const TODOS_KEY = "todos";

let todos = [];

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    todos = todos.filter(clickedTodo => {return clickedTodo.id !== parseInt(deleteLi.id)})
    saveTodo();
}

function paintTodo(newTodo) {
    const newLi = document.createElement("li");
    newLi.id = newTodo.id;
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");
    newSpan.innerText = newTodo.text; 
    newButton.innerText = "❌";

    todoList.appendChild(newLi);
    newLi.appendChild(newSpan);
    newLi.appendChild(newButton); 
    newButton.addEventListener("click", deleteTodo);
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {   
        text: newTodo,
        id: Date.now()
    }
    todos.push(newTodoObj);
    todoInput.value = "";
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", todoSubmit);
const savedTodo = localStorage.getItem(TODOS_KEY);

if(savedTodo !== null) {
    const parsedTodo =  JSON.parse(savedTodo);
    todos = parsedTodo; 
    parsedTodo.forEach(paintTodo);
} else {
}

