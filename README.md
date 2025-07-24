# gestor-tareas-simple-equipo3
## Participantes
- Cesar Martel 4 (Product Owner)
- Fellix torre 4 (Dev 1)
- Miguel Ruiz 4 (Dev 2)
- Nicolas  Meza 5 (Dev 3)
- Sebastian Rosas 4 (Scrum Master)
-------------------------------------------------------
## objetivo
1. Agregar tareas
- El usuario puede agregar tareas nuevas con un título no vacío.

- Si el título está vacío o contiene solo espacios, el sistema debe mostrar un mensaje de error claro.

- (Opcional): Se puede añadir una descripción adicional a la tarea.

- Cada tarea debe tener un ID único autogenerado.

Back-end:

- Validar el título.

- Generar automáticamente el ID.

Front-end:

- Campo para ingresar título (y descripción).

- Mostrar errores si el título es inválido.

2. Visualizar lista de tareas
-El usuario puede visualizar todas las tareas en una lista clara y ordenada.

Para cada tarea deben mostrarse:

- ID

- Título

-Descripción (si tiene)

- Estado: Pendiente o Completada

- El orden puede definirse en conjunto (por ejemplo: tareas más recientes primero, o pendientes primero).

Back-end:

- Retornar todas las tareas con sus datos, preferentemente ya ordenadas.

Front-end:

- Mostrar la lista de forma legible y con buen diseño.

3. Marcar tareas como completadas
- El usuario puede cambiar el estado de una tarea a "Completada".

- Se debe identificar la tarea por su ID.

- Si se intenta marcar una tarea con un ID inexistente, el sistema debe mostrar un mensaje de error claro y no afectar otras tareas.

Back-end:

- Función que reciba el ID, actualice el estado, y maneje errores.

Front-end:

- Permitir seleccionar una tarea y mostrar mensajes de éxito o error.

4. Eliminar tareas
- El usuario puede eliminar tareas permanentemente.

- Se identifican por su ID.

- Si se intenta eliminar una tarea con un ID inexistente, el sistema debe mostrar un mensaje de error claro y no eliminar nada más.

Back-end:

- Función que reciba el ID y elimine la tarea, con manejo de errores.

Front-end:

- Interfaz que permita seleccionar una tarea para eliminar y muestre los mensajes correspondientes.
