//const toDoForm = document.getElementById("todo-form");
// 위에서 html의 form을 이미 찾았고, toDoForm에 저장했기 때문에 그 <form>에서 <input>을 찾을 수 있다 .
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// todo를 저장할 배열 만들기, let을 써서 localStorage에 todo들이 있으면 저장해줌으로써 이전의 todo들을 잊지 않게 해준다.
let toDos = [];

// toDos array를 local storage에 저장할 함수 
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // 삭제할 li를 찾아서 변수에 저장하기. 
  // 1. 첫번째 인자(발생한 이벤트에 대한 정보를 가짐)를 이용
  // 2. target = click된 HTML element = button
  // 3. parentElement = click된 HTML element의 부모 태그 = li 
  // 구분하는 걸 보려면 console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  // 요소 삭제하기
  li.remove();
  // toDos에 클릭된 id와 같은 id를 가진 li를 제외하고 저장! 
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 변경한 array를 local storage에 저장하기
  saveToDos();
}

// toDoList의 ul에 li를 만드는 함수
function paintToDo(newToDo) {
  toDoList.classList.remove("hidden");
  // li, span, button 태그 만들기
  const li = document.createElement("li");
  // id값을 구별해서 삭제하기 위해 li에 id 추가
  li.id= newToDo.id;
  const span = document.createElement("span");
  // 받은 값을 출력하기 위해 span태그에 입력하기
  span.innerText = newToDo.text;
  // 삭제를 위한 버튼 태그 만들기
  const button = document.createElement("button");
  button.innerText = "❌";
  // 버튼을 클릭하면 삭제를 위한 이벤트리스너 만들기
  button.addEventListener("click", deleteToDo);
  // li에 span, button 넣기, 순서 중요!!
  li.appendChild(span);
  li.appendChild(button);
  // ul(i="todo-list")에 li를 추가!
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  // 새로 고침 막기
  event.preventDefault();
  // input 값을 변수에 저장하기
  const newToDo = toDoInput.value;
  // enter를 치면 input 창을 비우기 위해 input의 값을 비워주기
  toDoInput.value = "";
  // toDos(array이자 database 역할)에 텍스트 대신 obj를 넘기기 위해 작성
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  // toDos 배열에 값으로 전달. <--- 새로운 todo가 만들어질 때마다 toDos array에 psuh하기
  toDos.push(newToDoObj);
  // input value(입력값)을 얻어서 paintToDo 함수에 보내기
  paintToDo(newToDoObj);
  // toDos array를 local storage에 저장할 함수 호출
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// local storage에 저장된 값을 가져와서 변수에 저장
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) { // savedToDos !== null
  // 로컬 스토리지에 스트링으로 저장된 값을 살아있는 array로 만들기! 
  const parsedToDos = JSON.parse(savedToDos);
  // local Storage에 값이 있으면 toDos array의 값이 빈값으로 시작하지 않게 하기 위해 이전의 todo들을 넣어준다!!
  toDos = parsedToDos;
  // 배열의 method forEach(). 배열의 각 item 들에게 function을 실행하게 해준다. 
  // 이 경우 paintToDo함수를 toDos의 각각의 요소들마다 함수를 실행한다.
  parsedToDos.forEach(paintToDo);
}


// 화살표 함수(arrow function). 
// function을 짧게 작성 가능. 함수 이름 필요 x, function 적을 필요 x 
// parsedToDos.forEach((item) => console.log("this is the turn of", item));
// = 
// 원래의 함수 구현 및 호출
// function sayHello(item) {
//   console.log("this is the turn of", item);
// }
// parsedToDos.forEach(sayHello);