// const todoForm = document.querySelector("#todo-form"); login.js에서 정의
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const HIDDEN_CLASS = "hidden";

// todo를 저장하는 배열
let toDos = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  // toDo의 id와 li의 id가 갖지 않으면 배열에서 제외하고 새로운 배열을 저장!
  // filter는 배열의 각 item들에게 함수를 실행, li.id가 string이기 때문에 정수로 변환
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveTodo();

  // todo 삭제시 다시 todo Input을 띄워준다.
  todoForm.classList.remove(HIDDEN_CLASS);
  const titleSpan = document.getElementById("title");
  titleSpan.remove();
}

// 마우스가 li에 올라가고 내려감에 따라 화면 표시 여부를 위한 함수작성
function listMouseEnter(input, button) {
  input.classList.remove(HIDDEN_CLASS);
  button.classList.remove(HIDDEN_CLASS);
}

function listMouseLeave(input, button) {
  input.classList.add(HIDDEN_CLASS);
  button.classList.add(HIDDEN_CLASS);
}

// todo를 화면에 보여주는 함수 작성
function paintTodo(newTodoObj) {
  // todo list의 today 추가
  const titleSpan = document.createElement("span");
  titleSpan.id = "title";
  titleSpan.innerText = "TODAY";
  todoList.appendChild(titleSpan);

  // input, span, button 을 가지는 li만들기
  const li = document.createElement("li");
  // li의 id를 주기
  li.id = newTodoObj.id;

  // todo 체크박스
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add(HIDDEN_CLASS);

  // todo 항목
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  // 삭제 버튼
  const button = document.createElement("button");
  button.innerText = "❌";
  button.classList.add(HIDDEN_CLASS);

  // 요소들을 li에 추가하고 li를 ul(id="todo-list")에 추가
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

  // todo 입력시 숨기기
  todoForm.classList.add(HIDDEN_CLASS);

  // 마우스가 li에 올라가있는지 여부에 따라 체크박스와 삭제버튼을 표시하기 위해 이벤트리스너 작성
  li.addEventListener("mouseenter", () => {
    listMouseEnter(input, button);
  });
  li.addEventListener("mouseleave", () => {
    listMouseLeave(input, button);
  })

  // 삭제를 도와주는 이벤트 리스너
  button.addEventListener("click", deleteTodo);
}

// todo를 작성하는 함수 작성
function writeTodo(event) {
  event.preventDefault();

  const newTodoObj = {
    text: todoInput.value,
    // 밀리초를 얻어서 해당 todo에 고유 번호 부여
    id: Date.now()
  }
  todoInput.value = "";
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", writeTodo);

// 로컬 스토리지에 todo 있는지 확인하고 있다면 새로운 배열을 만들어 화면에 표시
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);

}