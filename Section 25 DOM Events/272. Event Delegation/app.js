// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function() {
//         li.remove();
//     }) 
// }

const tweetForm = document.querySelector("#tweetForm");
const tweetsList = document.querySelector("#tweetsList");
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.value);

    let username = document.querySelector("#username");
    let tweet = document.querySelector("#tweet");

    if (tweet != '') {
        const li = document.createElement('li');
        li.textContent = tweet.value + ' - by: ' + username.value;
        tweetsList.appendChild(li);

        username.value = '';
        tweet.value = '';
    } else {
        alert("validation error. Tweet cant be empty")
    }
})

tweetsList.addEventListener('click', function(e) {
    console.log("click on UL");
    console.log(e.target);


    if(e.target.nodeName === 'LI') {
        e.target.remove();
    }
})