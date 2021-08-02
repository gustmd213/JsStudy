const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("#loginBtn");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout");
const clock = document.querySelector("#clock"); // clock.js에서 사용
const todoForm = document.querySelector("#todo-form"); // todo.js에서 사용

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username"

const date = new Date();
const currentTime = date.getHours();

function paintGreeting(username) {
  if(currentTime >= 5 &&12 > currentTime) {
    greeting.innerText = `Good morning, ${username}`;
  } else if(currentTime >= 12 && 17 > currentTime) {
    greeting.innerText = `Good afternoon, ${username}`;
  } else if(currentTime >= 17 && 22 > currentTime) {
    greeting.innerText = `Good evening, ${username}`;
  } else {
    greeting.innerText = `${username}, great job today.`;
  }
  
  clock.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USER_NAME, username);
  paintGreeting(username);

}

const savedUsername = localStorage.getItem(USER_NAME);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(savedUsername);
}

