const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// js에서 html의 id greeting을 통해 h1 요소를 찾아서 가져오기
const greeting = document.querySelector("#greeting");
const toDoForm = document.querySelector("#todo-form");
const clock = document.querySelector("#clock");

// string만 포함되는 변수는 대문자를 사용하고 string을 저장하고 싶을 때는 관습적으로 대문자를 사용한다!! 
// string이 오타가 나면 js는 지적하지 않는다. 그러므로 무조건 같아야 하는 string이 반복된다면 변수에 저장하자! 변수명은 지적해준다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// a-3. 이벤트 리스너 함수 실행
function onLoginSubmit(event) {
  // 1. 브라우저의 기본동작(여기서는 새로고침) 막기
  event.preventDefault();
  // 2. form을 숨기기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 3. loginInput값을 username 변수에 저장
  const username = loginInput.value;
  // 4. username값을 usename이라는 key와 함게 local storage에 저장
  localStorage.setItem(USERNAME_KEY, username);
  // 5. 아래의 함수 호출. 이 함수는 form안에 input값인 username을 인자로 받는다. 
  paintGreetings(username);
}

// a-4. b-3. paintGreetings 함수 실행. 매개변수로 username을 받는다. 
function paintGreetings(username) {
  // 1. h1의 텍스틑 존재 x. h1에 매개변수로 받은 username을 추가
  greeting.innerText = "Hello " + username;
  // 2. h1의 hidden class를 제거
  greeting.classList.remove(HIDDEN_CLASSNAME);

  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  clock.classList.remove(HIDDEN_CLASSNAME);
}

// a-1. b-1. local storage에 username이 있는지 확인하기!
const savedUsername = localStorage.getItem(USERNAME_KEY);

// a-2. 조건이 참인 상태의 조건문 시작
if(savedUsername === null) {
  // 1. local storage에 username이 없다면 form을 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // 2. submit event가 발생하면 onLoginSubmit 함수 실행
  loginForm.addEventListener("submit", onLoginSubmit);
// b-2. 조건이 거짓인 상태의 조건문 시작
} else {
  paintGreetings(savedUsername);
}
