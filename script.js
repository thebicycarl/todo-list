const textInput = document.getElementById('textInput');
const submitBtn = document.getElementById('submitBtn');
const theToDoList = document.getElementById('theToDoList');
const deleteAll = document.getElementById('deleteAll');
const itemList = [];

submitBtn.addEventListener("click", () => { postText() });
deleteAll.addEventListener("click", () => { removeAll() });

theToDoList.addEventListener("click", function (e) {
    if (e.target.className === "deleteBtn") {
        e.target.parentElement.remove();
    } else if (e.target.className === "text") {
        e.target.parentElement.classList.toggle("done");

    }
});

function removeAll() {
    theToDoList.innerHTML = "";
    itemList = [];
}

function postText() {
    if (textInput.value == "") {
        alert('Please enter a todo item')
    } else {
    const toDoItem = `<div class="toDoItem">
    <div class="text">${textInput.value}</div>
    <span class="deleteBtn">\u00d7</span>
</div>`
    theToDoList.innerHTML += toDoItem;

    textInput.value = "";}
}

function removeAll() {
    theToDoList.innerHTML = "";
    itemCounter = 0;
}