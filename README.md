# gestor-tareas-simple-equipo3
## Participantes
- Cesar Martel 4 (Product Owner)
- Fellix torre 4 (Dev 1)
- Miguel Ruiz 4 (Dev 2)
- Nicolas  Meza 5 (Dev 3)
- Sebastian Rosas 4 (Scrum Master)
-------------------------------------------------------
## objetivo
-✅ Puedo agregar tareas nuevas con título no vacío.
Ese título NO puede estar vacío (o solo con espacios). Si lo está, el sistema debe avisar al usuario con un error claro.

Extra (Opcional): Podemos añadir una descripción a la tarea.

Identificación: Cada tarea que se cree debe tener un ID único asignado automáticamente.

Pensando en el Back-end: Necesitarán validar el título y generar esos IDs.

Pensando en el Front-end: La interfaz debe tener el campo para el título (y descripción), y debe manejar el error si el título es inválido.
-✅ Puedo visualizar una lista de las tareas creadas ordenadas por orden dependienco de como lo quiera el cliente
Qué debe mostrarse: Para cada tarea en la lista, necesitamos ver su ID, Título, Descripción (si la tiene) y si está Pendiente o Completada.

Organización: La lista debe tener un orden lógico (por ejemplo, que las más nuevas salgan arriba, o que todas las pendientes salgan primero). Decidamos un orden entre todos.

Pensando en el Back-end: La función que devuelve las tareas debe proveer todos estos datos y, si es posible, ya ordenados.

Pensando en el Front-end: La interfaz debe ser capaz de mostrar toda esta información de forma clara y fácil de leer.
-✅ Puedo marcar tareas como completadas.Se debe poder cambiar el estado de una tarea a "Completada".

Cómo identificar la tarea: Esto se hará usando el ID de la tarea, o seleccionándola directamente en la interfaz.

Detalle Importante: Si intentan marcar una tarea que NO existe (ID incorrecto), el sistema debe dar un error claro y no hacer nada con las otras tareas.

Pensando en el Back-end: Necesitarán una función que reciba un ID y actualice el estado de la tarea, con su respectivo manejo de error para IDs no encontrados.

Pensando en el Front-end: La interfaz debe permitir al usuario seleccionar o ingresar un ID para marcar, y debe mostrar el mensaje de éxito o error.
-✅ Puedo eliminar tareas
Se debe poder borrar tareas definitivamente de la lista.

Cómo identificar la tarea: Igual que con marcar, esto se hará usando el ID de la tarea, o seleccionándola en la interfaz.

Detalle Importante: Si intentan borrar una tarea que NO existe (ID incorrecto), el sistema debe dar un error claro y no borrar ninguna otra tarea.

Pensando en el Back-end: Necesitarán una función que reciba un ID y elimine la tarea, con su respectivo manejo de error.

Pensando en el Front-end: La interfaz debe tener una forma de seleccionar una tarea para eliminarla y manejar los mensajes correspondientes.
