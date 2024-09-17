const delayedcolorChange= (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}

// delayedcolorChange('red', 1000)
//     .then(() => delayedcolorChange('orange', 1000))
//     .then(() => delayedcolorChange('yellow', 1000))
//     .then(() => delayedcolorChange('green', 1000))
//     .then(() => delayedcolorChange('cyan', 1000))
//     .then(() => delayedcolorChange('teal', 1000))

async function rainbow() {
    await delayedcolorChange('red', 1000)
    await delayedcolorChange('orange', 1000)
    await delayedcolorChange('teal', 1000)
    await delayedcolorChange('cyan', 1000)
    await delayedcolorChange('violet', 1000)
    await delayedcolorChange('green', 1000)
    return "ALL DONE!"
}

// rainbow().then(() => console.log("END OF RAINBOW"))

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!")
}

printRainbow();