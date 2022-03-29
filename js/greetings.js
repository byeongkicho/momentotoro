const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintgreeting(username);
}

function paintgreeting(username) {
  const hours = new Date().getHours();
  const morning = ('morning');
  const afternoon = ('afternoon');
  const evening = ('evening');
  if (hours >= 0 && hours < 12) {
    message = morning;
    document.body.className = "morning"; 

} else if (hours >= 12 && hours < 17) {
    message = afternoon;
    document.body.className = "afternoon"; 

} else if (hours >= 17 && hours < 24) {
    message = evening;
    document.body.className = "evening"; 
}
  greeting.innerText = `Good ${message} ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintgreeting(savedUsername);
}
