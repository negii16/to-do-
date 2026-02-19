const taskInput = document.getElementById("taskInput");

let addTaskButton = document.querySelector("button");

let todoList = document.getElementById("todoList");
let pendingList = document.getElementById("pendingList");
let completedList = document.getElementById("completedList");

function addTask() {
  const li = document.createElement("li");
  li.textContent = taskInput.value.trim();
  todoList.appendChild(li);
  taskInput.value = "";
}
