const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const uname = document.querySelector("#uname");
const HIDDEN_CLASSNAME = "hidden";

onLoginSubmit=(e)=>{
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    uname.innerText = `Hello ${username} !`; //개꿀
    uname.classList.remove(HIDDEN_CLASSNAME);
    
}; 


loginForm.addEventListener("submit", onLoginSubmit);
//함수뒤에 ()를 붙히면 이벤트와 상관없이 바로 실행됨

