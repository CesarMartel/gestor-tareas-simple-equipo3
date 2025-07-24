export function agregarTarea(lista, texto) {
  if (texto.trim() === '') return lista;
  return [...lista, { text: texto.trim(), completed: false }];
}
