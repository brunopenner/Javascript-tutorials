const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!');
        }, 1000)
    })
}

fakeRequest('dogs/1')
    .then((data) => {
        console.log("DONE WITH REQUEST!");
        console.log('data is:', data);
    })
    .catch((err) => {
        console.log('OH NO!', err);
    })



const delayedcolorChange= (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}

delayedcolorChange('red', 1000)
    .then(() => delayedcolorChange('orange', 1000))
    .then(() => delayedcolorChange('yellow', 1000))
    .then(() => delayedcolorChange('green', 1000))
    .then(() => delayedcolorChange('cyan', 1000))
    .then(() => delayedcolorChange('teal', 1000))