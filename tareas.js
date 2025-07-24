let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function guardar() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function agregarTarea(texto) {
  if (texto.trim() !== "") {
    tasks.push({ text: texto, completed: false });
    guardar();
  }
}

export function marcarTareaComoCompletada(index) {
  if (tasks[index]) {
    tasks[index].completed = !tasks[index].completed;
    guardar();
  }
}

export function eliminarTarea(index) {
  if (tasks[index]) {
    tasks.splice(index, 1);
    guardar();
  }
}

export function obtenerTareas() {
  return tasks;
}

export function limpiarTareas() {
  tasks = [];
  guardar();
}
