const input = document.querySelector('input');
const h1 = document.querySelector("h1");
const welcome = document.querySelector("h3");
const username = document.querySelector("#username");

input.addEventListener('input', function(e) {
    h1.innerText = input.value;
}) 

username.addEventListener('input', function (e) {
    welcome.textContent = "Welcome, " + this.value;
})