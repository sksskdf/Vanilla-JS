const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const input = document.querySelector("#todo-form input");
let toDos = [];
const TODOS_KEY = "todos";

saveTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(toDos));
}

//button 식별이 가능해야 함
//event parameter를 사용하여 클릭 된 버튼의 정보를 얻는다.
deleteTodo=(event)=>{
    const li = event.target.parentElement;
    li.remove();
}

paintTodo=(newTodo)=>{
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

addTodo=(e)=>{
    e.preventDefault();
    const newTodo = input.value;
    input.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit",addTodo);
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

