<<<<<<< HEAD
const toDoList = document.querySelector('js-toDoList')
const toDoForm = toDoList.querySelector('toDoForm')

function generateToDo(text) {
  var newToDo = document.createElement('li');
  newToDo.innerText=text;
  toDoList.appendChild(newToDo)
}

toDoForm.addEventListener("submit",generateToDo)
=======
const toDoList = document.querySelector('.js-toDoList')
const toDoForm = document.querySelector('.js-toDoForm')
const toDoInput = document.querySelector('.toDoInput')

//%** 현재는, 입력하면 그 때에만 저장되는 상태임 . localS에 저장된 todo 내용을 가져오도록 해야함 


function handleToDoSubmit(e) {
  e.preventDefault()
  generateToDo(toDoInput.value)
  toDoInput.value=""
}

function generateToDo(text) {
  
  //새로운 ToDo 생성 > List에 추가하기
  var newToDo = document.createElement('li')
  newToDo.classList.add('toDo')
  newToDo.innerText = text
  toDoList.appendChild(newToDo)
  //newToDo 클릭시 DONE 표시하기 "done CSS 작업 필요"
  newToDo.addEventListener("click", function (e) {
    if (e.target.classList.contains('toDo')) {
      e.target.classList.toggle('done');
    }
  });

  //삭제 버튼 추가하기 (delButton CSS 작업 필요)
  var delBtn = document.createElement('button')
  delBtn.classList.add('delButton')
  delBtn.innerText= "❌"
  newToDo.appendChild(delBtn)

  delBtn.addEventListener("click", delToDo)
}

//toDo 삭제 
function delToDo(e) {
  if (e.target.classList.contains("delButton")) {
    e.target.parentNode.remove();
  }
}

//toDoList.addEventListener('click',del하는 fuction)

toDoForm.addEventListener("submit", handleToDoSubmit)
>>>>>>> 67c30e625f1ac377631b4c790f1014a8b3b073bc
