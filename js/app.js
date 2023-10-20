const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const saveUsername = localStorage.getItem(USERNAME_KEY);

console.log(saveUsername);

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // greeting.innerText = "Hello " + username;
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(saveUsername);
}

/* const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button"); */

// console.dir(loginInput)
// 같은 스트링을 여러번 쓰게 되면 오타 날 확률이 있음. 변수로 지정해줘서 오타시 확인이 되어 오타 날 확률을 줄여줌.
// 대문자로 적는 이유 - 실수를 만들고 싶지 않은 스트링이라는 사실을 기억하고 상기시킴.
//submit 엔터를 누르거나 버튼을 클릭할때 발생
