# todoList 만들기 [ remove(), push(), forEach(), filter() ] [ JSON.stringify(), JSON.filter() ] [ Date.now() ]

작성일시: 2021년 7월 11일 오후 1:54
작성자: 동현 고
최종 편집일시: 2021년 7월 11일 오후 3:00

# HTML

```html
<form id="todo-form">
      <input type="text" placeholder="Write a To Do and Press Enter" required />
    </form>
    <ul id="todo-list"></ul>
```

- 사용자가 todo를 입력할 form 만들기
- todo를 나열할 ul태그 만들기, li는 js에서 추가!

# JavaScript

- 전체 코드

    ```jsx
    const toDoForm = document.getElementById("todo-form");
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
    ```

### 1. 요소 가져오기 및 input값 저장하기

```jsx
const toDoForm = document.getElementById("todo-form");
// 위에서 html의 form을 이미 찾았고, toDoForm에 저장했기 때문에 그 <form>에서 <input>을 찾을 수 있다 .
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
	event.preventDefault(); 
	// input 값을 변수에 저장하고, 새로운 값을 입력할 수 있게 input 값 비워주기
	const newToDo = toDoInput.value;
	toDoInput.value = "";
}
```

### 2. todo 화면에 출력하기

```jsx
// todo를 그리는 function 만들기
function paintToDo(newToDo) {
	const li = document.querySelector("li");
	const span = document.querySelector("li");

	span.innerText = newToDo;

	li.appendChild("span");
	toDoList.appendChild("li");
}

// handleToDoSubmit() 함수에 paintToDo 호출
function handleToDoSubmit(event) {
  ....
	paintToDo(newToDo);
}
```

**Problem**

- 새로고침 시 추가한 todo들이 사라진다.
- li를 추가할 수 있지만 삭제 불가능

### 3. 삭제 버튼 만들기

```jsx
function paintToDo(newToDo) {
	...
	const button = document.querySelector("button");
	button.innerText = "❌";
	li.appendChild("button");
	button.addEventListener("click", deleteToDo);
	...
}
```

**Problem**

- 어떤 button에서 클릭이 왔고, 어떤 li를 제거해야 할지 모름

```jsx
// 삭제를 위한 function 만들기
function deleteToDo(event) {
	// 발생한 event의 properties를 이용
	// target을 통해 button을 찾기
	// button의 부모요소인 li 찾아서 저장
	const li = event.target.parentElement;
	li.remove();
}
```

### 4. todo 저장하기

- 만든 todo들을 브라우저에 저장하기 —> local storage

```jsx
// todo 저장을 위한 database 만들기 --> array
const toDos = [];

// 새로운 todo가 만들어질 때마다 toDos array에 push하기
function handleToDoSubmit(event) {
	...
	toDos.push(newToDo);
	...
	savedToDos();
}
```

```jsx
function saveToDos() {
	localStorage.setItem("todos", toDos);
}
```

**Problem** 

- local storage에는 string만 저장가능, 배열 저장 불가!

    → JSON.stringify 이용

    - **JSON.stringify()** : 괄호 안에 들어가는 어떤 것이든 **string으로 만듬**

```jsx
function saveToDos() {
	// toDos를 string으로 만들어 저장하기
	localStorage.setItem("todos", JSON.stringify(toDos));
}
```

### 5. 저장한 todo 불러오기

**Problem**

- local storage에는 저장되어 있지만, 새로고침 시 화면에 나타나지 않음
- local storage에 저장되어 있는 값이 string임

    → JSON.parse 이용

    - **JSON.parse()** : **string을** js에서 이용가능한 살아있는 **object로 만든다!**

```jsx
const savedToDos = localStorage.getItem("todos");

// 저장한 값이 있는지 체크
if(savedToDos !== null) {   // == if(savedToDos)
	// local storage에 저장된 string을 array로 만들기
	const parsedToDos = JSON.parse(savedToDos);
	// array에 각 item마다 function 실행
	// 새로고침 시에도 저장된 todo들이 있으면 화면에 나타내기
	parsedToDos.forEach(paintToDo);
}
```

- arr.**forEach()** : 해당 array에 있는 각각의 item들에게 function을 실행

**Problem**

- 새로 고침 시에 새로 추가한 todo들만 local storage에 저장되고 이전 것은 사라짐

    ⇒ application이 시작될 때 toDos array가 항상 비어 있어서!

    1. 전에 있던 todo 들은 local storage에 있다.
    2. 새로운 todo들만 포함하고 있는 array를 저장하고 싶다.
    3. 우리가 가지고 있던 toDos의 이전 복사본을 잊어버리고 있는 것!

    ⇒ application이 시작될 때 toDos array를 빈값으로 시작하는 대신에 local storage에 todo들이 있으면 parsedToDos를 넣어서 이전의 todo들을 복원하기!

```jsx
// const를 변경 가능한 let으로 변경
let toDos = [];

if(savedToDos !== null) {
	...
	// local Storage에 값이 있으면 toDos가 빈값으로 시작하지 않게 하기 위해 이전의 todo들을 넣어준다!!
	toDos = parsedToDos;
	...
}
```

### 6. todo 삭제하기

**Problem**

- 삭제 시 화면에서 지워지지만 local storage에서 안 지워진다. —> 새로고침 시 다시 원래대로 돌아옴.
- deleteToDo 함수는 화면에서 어떤 li를 지워야 할지 알고 있다. 그러나 JS는 database에서 어떤 텍스트를 지워야 할지 알 수 없다.

    ⇒ 텍스트를 object로 만들어서 해당 li에게 id를 주고 싶다. array = [{id:1234, text: "drink"}, ....}

**DB에게 id를 저장하는 옵션 주기**

- local storage = 데이터 베이스를 저장해 두는 곳
- toDos array = data base

    ⇒ 둘이 다름을 알아야 한다!! 

**random id를 만들 방법 찾기**

- Date.now(): 밀리초를 반환하는 함수

```jsx
// toDos array에 값을 push할 때 object를 넘기기
function handleToDoSubmit(event) {
	...
	const newToDoObj = { 
		text: newToDo,
		id: Date.now()
	};
	toDos.push(newToDoObj);
	paintToDo(newToDoObj);
	...
}
```

- paintToDo 함수 수정

```jsx
function painToDo(newToDo) {
	...
	li.id = newToDo.id;
	span.innerText = newToDo.text;
	...
}
```

**Problem**

- 삭제를 클릭한 li의 id넘버를 어떻게 알까? ⇒ deleteToDo 함수 이용하기

**array에서 element 삭제**

- 실제로 item을 지우는 것 x
- **지우고 싶은 item을 제외해서 새 array를 만드는 것**!
- 예전 array는 여전히 존재

**filter()**

- forEach()와 비슷하게 각각의 요소에게 함수를 실행

```jsx
[1, 2, 3, 4].filter(sexyFilter);
// js가 sexyFilter 함수를 4번 호출
// sexyFilter 함수가 true를 return: item을 array에 유지
//                 false를 return: item을 array에서 제외
// false를 return 하면 해당 item은 새로운 array에 포함되지 않을 것이다!
```

- filter는 array를 지우지 않고 새로운 array를 만들게 해준다!

```jsx
function deleteToDo(event) {
	...
	// toDo의 저장된 id와 li의 id가 같지 않으면 배열에서 제외!
	toDos = toDos.filter((toDo) => toDo.id !== li.id);
}
```

**Problem**

- 그러나 작동하지 않는다.

    ⇒ toDo.id는 number이고, li.id는 string이기 때문에!

```jsx
function deleteToDo(event) {
	...
	// li.id를 정수로 만들기
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	// 변경한 array를 저장하기
	savedToDos();
}
```