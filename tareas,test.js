/**
 * @jest-environment jsdom
 */

import { agregarTarea, eliminarTarea, marcarTareaComoCompletada, obtenerTareas, limpiarTareas } from './tareas';

// Limpia tareas antes de cada prueba
beforeEach(() => {
  limpiarTareas();
});

test("Debe agregar una tarea correctamente", () => {
  agregarTarea("Aprender TDD");
  const tareas = obtenerTareas();
  expect(tareas.length).toBe(1);
  expect(tareas[0].text).toBe("Aprender TDD");
  expect(tareas[0].completed).toBe(false);
});

test("Debe marcar una tarea como completada", () => {
  agregarTarea("Estudiar JavaScript");
  marcarTareaComoCompletada(0);
  const tareas = obtenerTareas();
  expect(tareas[0].completed).toBe(true);
});

test("Debe eliminar una tarea", () => {
  agregarTarea("Tarea a eliminar");
  eliminarTarea(0);
  const tareas = obtenerTareas();
  expect(tareas.length).toBe(0);
});
