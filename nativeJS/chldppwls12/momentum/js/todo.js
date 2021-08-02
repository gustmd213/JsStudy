const todo = document.querySelector('.todo span');
const modal = document.querySelector('.modal');
const todoInput = document.querySelector('.todo input');
const todoForm = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo ul');

let todos = [];
let savedTodos = localStorage.getItem('todos');

function saveTodo(){
  localStorage.setItem('todos', JSON.stringify(todos));
}

function makeList(obj){
  const li = document.createElement('li');
  li.id = obj.id;
  li.classList.add('todo-list');

  const div = document.createElement('div');
  div.classList.add('checkbox-todo');

  const i = document.createElement('i');
  i.classList.add('fa', 'fa-times');

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.classList.add('li-check');

  const span = document.createElement('span');

  if (obj.done){
    span.classList.add('done');
    input.checked = true;
  }

  // li > div > input + span, i
  li.append(div)
  li.append(i);
  div.append(input);
  span.innerText = obj.todo;
  div.append(span);

  todoList.append(li);

  input.addEventListener('change', function(event){
    const span = event.target.nextSibling;
    if (this.checked){
      span.classList.add('done');
      handleDone(this, 1);
    }
    else{
      span.classList.remove('done');
      handleDone(this, 0);
    }
  });
  i.addEventListener('click', handleDeleteList);
}

function handleDone(item, flag){
  for (const li of todos){
    if (li.id === parseInt(item.closest('.todo-list').id)){
      li.done = flag;
      break;
    }
  }
  saveTodo();
}


function handleDeleteList(event){
  const li = event.target.parentElement;
  todos = todos.filter((obj) => obj.id != parseInt(li.id));
  saveTodo();
  li.remove();
}

if (!savedName){
  todos = [];
  saveTodo();
  //먼저 가져온 savedTodos 업뎃
  savedTodos = localStorage.getItem('todos');
}

if (savedTodos){
  todos = JSON.parse(savedTodos);
  todos.forEach(element => {
    makeList(element);
  });
}

todo.addEventListener('click', function(event){
  modal.classList.toggle('hidden');
});

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todos.push({id: Date.now(), todo: todo, done: 0});
  todoInput.value = '';
  saveTodo();
  makeList(todos[todos.length - 1]);
});