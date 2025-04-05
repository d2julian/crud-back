## Parte backend del Crud

Este es el repositorio de la parte back de la tarea. La parte del frontend se encuentra [AQUÍ](https://github.com/d2julian/crud-front)

### Arrancar el proyecto

```bash
$ npm install
```

```bash
$ npm run start
```

### Desarrollo de la tarea.

Para el desarrollo del backend, se ha seguido una arquitectura RESTful y patrón MVC.
Las entidades son Hotel, Client, Booking, dónde Hotel y Client tienen una relación 1->N con Booking.

La tarea se ha realizado en express, como base de datos se ha usado better-sqlite3 y como ORM sequelize.
No he hecho la parte de cargar un fichero, no estoy seguro si era necesario, ya que he escogido la opción de base de datos en vez de un filesystem y la especificación de las tablas están en el propio Model.
Al arrancar la aplicación, se lanza también el script insert_dummy_data.ts que inserta un par de datos de prueba.

Librerías:

- express: Framework de nodejs para agilizar el trabajo.
- better-sqlite3: Base de datos dónde guardar los hoteles / clientes / reservas.
- sequelize: ORM para hacer consultas más fácilmente a la base de datos.
- express-validator: Para validar que los datos que nos llegan por post / put / patch son correctos, y de no serlo, lanzar un bad request.

### Cosas a mejorar.

- No se han hecho tests.

- Añadir comentarios

- Usando la librería express-validator ahora solo se están validando los POST. Habria que hacer un validador diferente para los PUT.

- Cuando falla una operación, simplemente se devuelve un 500 con el mensaje de error. Si se intenta eliminar un hotel que tiene una reserva, se devuelve un error genérico de fk del propio sequalize. Habria que devolver algo mas descriptivo.

- DTOs. En Hotel y Client se está devolviendo la entidad directamente, no se está mapeando a un DTO. Esto no es correcto, ya que estamos devolviendo todos los campos de la tabla, y alguno podría ser un campo comprometido. Para el Booking, si que lo mapeo, ya que quiero devolver el nombre del hotel y del cliente.

- En general, es mejorable, creo que en esta tarea me he enfocado mucho más en el front que en el back.
