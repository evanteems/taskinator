console.log(window.document);

console.dir(window.document);

window.document.querySelector("button");
let btn = window.document.querySelector("button");
console.dir(btn);

document.querySelector(".btn");

document.querySelector("button").textContent;

document.querySelector("#save-task");
let buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

buttonEl.addEventListener("click", function() {
    alert("button clicked");
});

document.createElement("li");
let taskItemEl = document.createElement("li");
taskItemEl;
taskItemEl;

let tasksToDoEl = document.querySelector("#task-to-do");

tasksToDoEl.appendChild(taskItemEl);

taskItemEl.className = "task-item";

buttonEl.addEventListener("click", function() {
    let listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "this is a new task.";
    tasksToDoEl.appendChild(listItemEl);
});

buttonEl.addEventListener("click", createTaskHandler);
