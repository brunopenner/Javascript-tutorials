const p1Plus = document.querySelector("#p1Plus");
const p2Plus = document.querySelector("#p2Plus");
const reset = document.querySelector("#reset");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

p1Plus.addEventListener('click', function() {
    p1.innerText = parseInt(p1.innerText) + 1;
})

p2Plus.addEventListener('click', function() {
    p2.innerText = parseInt(p2.innerText) + 1;
})

reset.addEventListener('click', function() {
    p1.innerText = 0;
    p2.innerText = 0;
})
