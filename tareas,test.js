import { agregarTarea } from './tareas.js';

test('agrega una nueva tarea a la lista', () => {
  const lista = [];
  const resultado = agregarTarea(lista, 'Aprender TDD');
  expect(resultado).toEqual([{ text: 'Aprender TDD', completed: false }]);
});

test('no agrega tarea si el texto está vacío', () => {
  const lista = [];
  const resultado = agregarTarea(lista, '   ');
  expect(resultado).toEqual([]);
});
