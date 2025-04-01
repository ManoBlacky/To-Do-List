const userInput = document.getElementById("user-input");
const userTask = document.getElementById("user-task");

function btnClick() {
    if (userInput.value === '') {
        alert("Enter your Task");
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = userInput.value;
        userTask.appendChild(li);
        let span = document.createElement("span");
        li.appendChild(span);
    }
    userInput.value = '';
    saveData();
}

userTask.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", userTask.innerHTML);
}

function showTask() {
    userTask.innerHTML = localStorage.getItem("data");
}

showTask();