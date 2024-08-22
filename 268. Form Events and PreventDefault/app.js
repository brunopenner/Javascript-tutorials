const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats")
form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("SUBMITTED!!!!");

    if (input.value != '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
    } else {
        alert("Cat name can't be empty!");
    }
    
})