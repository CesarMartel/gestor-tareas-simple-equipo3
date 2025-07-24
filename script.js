const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task");
const list = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) {
      li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.textContent = task.text;
    li.appendChild(span);

    // ✅ Botón Completada
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completada";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    });
    li.appendChild(completeBtn);

    // 🗑️ Botón Eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    tasks.push({ text, completed: false });
    input.value = "";
    saveTasks();
    renderTasks();
  } else {
    alert("La tarea no puede estar vacía.");
  }
});

renderTasks();
