const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const input = document.querySelector("#todo-form input");

paintTodo=(newTodo)=>{
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(li);
}

addTodo=(e)=>{
    e.preventDefault();
    const newTodo = input.value;
    input.value = "";
    paintTodo(newTodo);
}

todoForm.addEventListener("submit",addTodo);