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