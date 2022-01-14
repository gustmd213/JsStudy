<<<<<<< HEAD


//선택자 선언
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
//이벤트 제어 함수 선언부
//로그인 버튼
function onLoginSubmit(event) {
  const typedUserName = loginInput.value;

  event.preventDefault(); //브라우저의 기본동작을 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, typedUserName);
  paintGreetings(typedUserName);
}

//중복코딩제거용 함수 선언부
//greeting에 hidden클래스 삭제 및 username 넣는 함수

function paintGreetings(username) {
  const date = new Date();
  const Hour = date.getHours();
  if (Hour < 12) {
    greeting.innerText = `Good morning ${username}`;
  } else if (Hour < 18) {
    greeting.innerText = `Hello ${username}`;
  } else {
    greeting.innerText = `Hi ${username}`;
  }

  toggleHiddenClass()
  quote()
  startWeather()
  startClock() 
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  
} else {
  paintGreetings(savedUserName);
  
}

function toggleHiddenClass(){
  const todoli =  document.querySelector("#todo-list");
  const savedname = localStorage.getItem(USERNAME_KEY);
  if (savedname === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    header.classList.add(HIDDEN_CLASSNAME);
    footer.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.add(HIDDEN_CLASSNAME);
    todoli.classList.add(HIDDEN_CLASSNAME);
  } else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    header.classList.remove(HIDDEN_CLASSNAME);
    footer.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoli.classList.remove(HIDDEN_CLASSNAME);
  }
}
=======
//선택자 선언
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
//이벤트 제어 함수 선언부
//로그인 버튼
function onLoginSubmit(event) {
  const typedUserName = loginInput.value;

  event.preventDefault(); //브라우저의 기본동작을 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, typedUserName);
  paintGreetings(typedUserName);
}

//중복코딩제거용 함수 선언부
//greeting에 hidden클래스 삭제 및 username 넣는 함수

function paintGreetings(username) {
  const date = new Date();
  const Hour = date.getHours();
  if (Hour < 12) {
    greeting.innerText = `Good morning ${username}`;
  } else if (Hour < 18) {
    greeting.innerText = `Hello ${username}`;
  } else {
    greeting.innerText = `Hi ${username}`;
  }

  toggleHiddenClass();
  quote();
  startWeather();
  startClock();
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
}

function toggleHiddenClass() {
  const todoli = document.querySelector("#todo-list");
  const savedname = localStorage.getItem(USERNAME_KEY);
  if (savedname === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    header.classList.add(HIDDEN_CLASSNAME);
    footer.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.add(HIDDEN_CLASSNAME);
    todoli.classList.add(HIDDEN_CLASSNAME);
  } else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    header.classList.remove(HIDDEN_CLASSNAME);
    footer.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoli.classList.remove(HIDDEN_CLASSNAME);
  }
}
>>>>>>> 67c30e625f1ac377631b4c790f1014a8b3b073bc
