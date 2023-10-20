const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const saveUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // greeting.innerText = "Hello " + username;
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `안녕하세요 ${username}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(saveUsername);
}
