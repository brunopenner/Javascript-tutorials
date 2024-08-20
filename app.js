const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log("You clicked me!!!");
    console.log("I hope it works!!!");
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert('CLICKED');
});

function twist() {
    console.log("TWIST!");
}
function shout() {
    console.log("SHOUT!");
}

const tasBtn = document.querySelector('#tas');

// The following codes don't work, only the last function will work, since click is a property and only accepts one value
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// AddEventListener is better since you can add as many callback functions as you like
//  and you can also pass more parameters, such as for the function to run only once
tasBtn.addEventListener('click', twist);
tasBtn.addEventListener('click', shout);

// ////////////////////////////////////
helloBtn = document.getElementById("hello");
byeBtn = document.getElementById("goodbye");

helloBtn.addEventListener('click', function() {
    console.log("hello");
});

byeBtn.addEventListener('click', function() {
    console.log("Goodbye");
})