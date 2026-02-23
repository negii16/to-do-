
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskValue}
        <div>
          <button onclick="markPending(this)">Pending</button>
          <button onclick="markCompleted(this)">Complete</button>
          <button onclick="deleteTask(this)">Delete</button>
        </div>
      `;

    document.getElementById("todoList").appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

function markPending(button) {
    const li = button.parentElement.parentElement;
    li.classList.remove("completed");
    document.getElementById("pendingList").appendChild(li);
}

function markCompleted(button) {
    const li = button.parentElement.parentElement;
    li.classList.add("completed");
    document.getElementById("completedList").appendChild(li);
}