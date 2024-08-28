const p1Plus = document.querySelector("#p1Plus");
const p2Plus = document.querySelector("#p2Plus");
const reset = document.querySelector("#reset");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const score = document.querySelector("#score");
let maxScore = parseInt(score.innerText);

let p1Score=parseInt(p1.innerText);
let p2Score=parseInt(p2.innerText);

console.log(maxScore, p1Score, p2Score);

score.addEventListener('change', function() {
    maxScore = parseInt(score.value);
})

p1Plus.addEventListener('click', function() {
    if (p1Score < maxScore && p2Score < maxScore) {
        p1Score += 1;
        p1.innerText = p1Score;
    } else {
        p1.style.color = "green";
        p2.style.color = "red";
        p1Plus.setAttribute('disabled', true);
        p2Plus.setAttribute('disabled', true);
    }
})

p2Plus.addEventListener('click', function() {
    if (p1Score < maxScore && p2Score < maxScore) {
        p2Score += 1;
        p2.innerText = p2Score;
    } else {
        p1.style.color = "red";
        p2.style.color = "green";
        p1Plus.setAttribute('disabled', true);
        p2Plus.setAttribute('disabled', true);
    }
})

reset.addEventListener('click', function() {
    p1Score = 0;
    p2Score = 0;
    p1.innerText = p1Score;
    p2.innerText = p2Score;
    p1.style.color = "black";
    p2.style.color = "black";
    p1Plus.removeAttribute('disabled');
    p2Plus.removeAttribute('disabled');
})
