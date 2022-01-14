const isLogin = document.querySelector('.is-login')
const isNotLogin = document.querySelector('.is-not-login');
const loginInput = document.querySelector('.login-input');
const loginForm = document.querySelector('.login-form');

const USERNAME_KEY = 'userName';
const HIDDEN_CLASSNAME = 'hidden';

// 로그인 X
if (savedName === null){
  isLogin.classList.add(HIDDEN_CLASSNAME);
  isNotLogin.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginFormSubmit);
}
//로그인 O
else{
  isNotLogin.classList.add(HIDDEN_CLASSNAME);
}

function onLoginFormSubmit(event){
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  savedName = userName;
  isLogin.classList.remove(HIDDEN_CLASSNAME);
  isNotLogin.classList.add(HIDDEN_CLASSNAME);
  getClock();
}