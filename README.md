# gestor-tareas-simple-equipo3
## Participantes
- Cesar Martel 4 (Product Owner)
- Fellix torre 4 (Dev 1)
- Miguel Ruiz 4 (Dev 2)
- Nicolas  Meza 5 (Dev 3)
- Sebastian Rosas 4 (Scrum Master)
-------------------------------------------------------
## objetivo
Desarrollar una aplicación sencilla para la gestión de tareas, donde el usuario pueda:

- Agregar tareas nuevas.

- Visualizar una lista organizada.

- Marcar tareas como completadas.

- Eliminar tareas existentes.
Este proyecto aplica buenas prácticas de Scrum y técnicas de XP como TDD, Pair Programming y Refactorización.
-------------------------------------------------------
##Funcionalidades y criterios
1. Agregar tareas
- Crear tareas con título obligatorio (no vacío ni solo espacios).

- Campo opcional para descripción.

 -Mensaje de error si el título no es válido.

Back-end: validación del título y generación del ID.

Front-end: formulario de entrada y manejo de errores.

2. Visualizar lista de tareas
- Mostrar lista de tareas con: ID, Título, Descripción (si tiene) y Estado (Pendiente/Completada).

- Lista ordenada (por ejemplo: pendientes primero o tareas más recientes).

Back-end: devolver tareas con datos completos y ordenados.

Front-end: vista clara, limpia y legible.

3. Marcar tareas como completadas
- Cambiar estado de una tarea a “Completada” .

Back-end: función para actualizar estado, con manejo de errores.
Front-end: interfaz para marcar tarea y mostrar mensajes de resultado.

4. Eliminar tareas
- Eliminar tarea permanente.

Back-end: función de eliminación con validación.

Front-end: botón o acción para eliminar y mostrar mensajes.
-------------------------------------------------------
##Sprint Planning (Planificación del Sprint)
| Tarea                                   | Responsable       | Técnica XP aplicada    |
| --------------------------------------- | ----------------- | ---------------------- |
| Configurar estructura base del proyecto | Dev 1             | TDD + Pair Programming |
| encargado del back-end con javaScript   | Dev 2             | TDD                    |
| encargado del estilo de la apilicacion  | Dev 3             | TDD                    |
| Crear pruebas unitarias                 | Todos             | TDD                    |
| Refactorizar código repetido            | Dev 2 + Dev 3     | Refactor               |
| Grabar fragmento de Pair Programming    | PO + Devs         | Evidencia XP           |
| Crear README con historia y criterios   | PO + Scrum Master | Documentación          |
| Preparar video final con explicación    | Todo el equipo    | Entregable obligatorio |
