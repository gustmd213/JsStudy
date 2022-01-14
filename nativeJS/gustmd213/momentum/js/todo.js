const TODO_KEY = "todo";
const STRIKE_CLASSNAME = "strike";
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");

const todoList = document.querySelector("#todo-list");

let toDos = [];
const savedToDos = localStorage.getItem(TODO_KEY);

//시작시 ToDo그리기 함수
if (savedToDos != null) {
  const parsedToDo = JSON.parse(savedToDos);
  toDos = parsedToDo;
  toDos.forEach(paintToDo);
}
todoForm.addEventListener("submit", onToDoSubmit);

//ToDo 작성함수
function onToDoSubmit(event) {
  event.preventDefault(); //브라우저의 기본동작을 막아줌
  const newToDo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    id: Date.now(),
    text: newToDo,
    checked: false,
  };
  toDos.push(newTodoObj);

  paintToDo(newTodoObj);
}

//Todo 삭제함수
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
//ToDo 그리는 함수
function paintToDo(newTodoObj) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  const checkBox = document.createElement("input");
  span.innerText = newTodoObj.text;
  list.id = newTodoObj.id;

  const button = document.createElement("button");
  checkBox.type = "checkbox";
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  checkBox.addEventListener("click", checkToDo);
  if (toDos.length < 16) {
    if (newTodoObj.checked == true) {
      checkBox.checked = true;
      span.classList.add(STRIKE_CLASSNAME);
    } else {
      checkBox.checked = false;
      span.classList.remove(STRIKE_CLASSNAME);
    }
    list.append(checkBox);
    list.appendChild(span);
    list.appendChild(button);
    todoList.appendChild(list);
    saveToDos();
  } else {
    alert("15개 이상 추가할 수 없습니다.");
  }
}
//checkbox 이벤트 함수
function checkToDo(event) {
  const li = event.target.parentElement;
  const siblingSpan = event.target.nextElementSibling;

  if (event.target.checked) {
    siblingSpan.classList.add(STRIKE_CLASSNAME);
  } else {
    siblingSpan.classList.remove(STRIKE_CLASSNAME);
  }

  toDos = JSON.parse(localStorage.getItem(TODO_KEY));
  toDos.forEach((element) => {
    if (Number(li.id) == element.id) {
      element.checked = event.target.checked;
    }
  });

  saveToDos();
}

//ToDo local저장소에 저장함수
function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

const todoUsername = localStorage.getItem(USERNAME_KEY);
if (todoUsername === null) {
  todoForm.classList.add(HIDDEN_CLASSNAME);
  todoList.classList.add(HIDDEN_CLASSNAME);
} else {
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
}
