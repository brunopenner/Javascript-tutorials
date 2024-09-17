buttonArray = document.querySelectorAll("button");

function generateRGB () {
    const r = Math.floor((Math.random()*255)+1);
    const g = Math.floor((Math.random()*255)+1);
    const b = Math.floor((Math.random()*255)+1);

    // const rgb = "RGB(" + r + ", " + g + ", "  + b + ")";
    // Bellow is a better way to write the above expression
    const rgb = `RGB(${r}, ${g}, ${b})`;
    return rgb;
}

buttonArray.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = generateRGB();
    })
});