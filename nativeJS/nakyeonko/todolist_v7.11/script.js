const form = document.querySelector("form"),
input = document.querySelector("input"),
ul_unchecked = document.querySelector(".ul-unchecked");

let unchecked_todolist_array = [    
];


function init() {
    form.addEventListener("submit", handleSubmit);
}


function handleSubmit(event){
    event.preventDefault();
    const submitInput = input.value;
    console.log("handleSubmit Active!");
    console.log(`input : ${submitInput}`);

    unchecked_todolist_array.push(submitInput);
    input.value='';

    printArray(submitInput);
}// submit된 입력값(form input.value)를 배열(unchecked_todolist_array)에 저장
// 입력값(form input.value)을 인자로 printArray호출.

function printArray(submitInput) {
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const li = document.createElement("li");
    span.innerText= submitInput;
    btn.innerText= "✔";
    li.appendChild(span);
    li.appendChild(btn);

    ul_unchecked.appendChild(li);
}// 입력 된 값(form input.value)를 웹페이지에 html li로 만들어 출력

init();
