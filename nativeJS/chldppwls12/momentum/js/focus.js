const focusForm = document.querySelector('.focus-form');
const focusInput = document.querySelector('.focus-input');
const focusDeleteBtn = document.querySelector('.focus-delete-btn');
const focus = document.querySelector('.focus');
const question = document.querySelector('.question');
const focusBox = document.querySelector('.focus-box');

const savedFocus = localStorage.getItem('focus');
const FOCUS_KEY = 'focus';
function editQuestion(){
  question.innerText = 'TODAY';
  question.style.fontSize = '15px';
  question.style.marginBottom = '0';
}

function editQuestionDefault(){
  question.innerHTML = `What is your main focus<br /> for today?`;
  question.style.fontSize = '16px';
  question.style.textAlign = 'center';
  question.style.marginBottom = '15px';
  question.style.fontWeight = '700';
}

if (savedFocus){
  editQuestion();
  focusForm.classList.add(HIDDEN_CLASSNAME);
  focus.innerText = savedFocus;
  focusDeleteBtn.classList.add('fa','fa-times');
}

function onFocusSubmit(event){
  event.preventDefault();
  const value = focusInput.value;
  localStorage.setItem(FOCUS_KEY, value);
  editQuestion();
  focusBox.classList.remove(HIDDEN_CLASSNAME);
  focus.innerText = value;
  focusDeleteBtn.classList.add('fa', 'fa-times');
  focusForm.classList.add(HIDDEN_CLASSNAME);
}

function onDeleteBtnClick(event){
  const deleteBox = event.target.parentElement;
  deleteBox.classList.add(HIDDEN_CLASSNAME);
  editQuestionDefault();
  focusForm.classList.remove(HIDDEN_CLASSNAME);
  focusInput.value = '';
  localStorage.removeItem(FOCUS_KEY);
}

focusForm.addEventListener('submit', onFocusSubmit);
focusDeleteBtn.addEventListener('click', onDeleteBtnClick);

//+엔터 누를 시 효과 추가