const button = document.querySelector('#changeColour');
const container = document.querySelector('#container');

button.addEventListener('click', function(e) {
    container.style.backgroundColor = generateRGB();
    e.stopPropagation();
})

container.addEventListener('click', function() {
    container.classList.toggle('hide');
})


function generateRGB () {
    const r = Math.floor((Math.random()*255)+1);
    const g = Math.floor((Math.random()*255)+1);
    const b = Math.floor((Math.random()*255)+1);

    // const rgb = "RGB(" + r + ", " + g + ", "  + b + ")";
    // Bellow is a better way to write the above expression
    const rgb = `RGB(${r}, ${g}, ${b})`;
    return rgb;
}