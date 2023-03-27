## API sistema de prestado de Libros(Mangas)


### API realizada para test de IziMedia

### Hacer correr el proyecto:

- NPM RUN START -> Ejecuta tanto las "migrations" como los "seeders" para luego hacer correr la API Nodemon en el puerto 3001.
- NPM RUN disassemble -> Elimina todas las tablas para reinciar la api con el paso anterior.
- NPM RUN DEV -> Levanta la API con Nodemon en el puerto 3001.

**_Para que el proyecto funcione_**:

- Debe estar creada una base de dato en MySQL llamada mangadb.
- Se debe agregar los datos de credenciales de nuestro MySQL en el ENV.

nota: Se dejó el .ENV a propósito para manterner los datos de configuración en github.

---
### Descrición de la API:

- La API es un servicio que permite a personas conseguir libros desde una biblioteca.
- La API cuenta con las siguientes entidades:

  - Entidad USERS -> Primera sección del registro.
  - Entidad Profiles -> Segunda sección del registro (Completa información personal)
  - Entidad Loans -> Sección que guarda el registro de los prestamos de libros.
  - Entidad Mangas -> Sección en dode se guardan atributos de los libros.
    - Entidad Author -> Obecede al autor del libro
    - Entidad Literary_genres -> Obedece al género literario del libro.

- Estructura de la API (3 capaz):
  - Controlador: Sección de manejo de petición HTTP
  - Servicio: Sección de manejo de solicitudes y procesamiento de funcionalidades (tareas).
  - Modelo (ORM): Sección de manejo del modelo del negocio.


---

### Diagrama o Modelo de Base de Datos(Diagrams):

<details><summary> MOSTRAR </summary>

![Image text](https://github.com/FelipeGaticaL/test-izimedia/blob/main/public/ERD%20Diagrams.jpg)

</details>

### ERD en MySQL:

<details><summary> MOSTRAR </summary>

![Image text](https://github.com/FelipeGaticaL/test-izimedia/blob/main/public/ERD%20MySql.JPG)

</details>

---

### Información por defecto:

Al inciar el proyecto se creará información sobre libros y sus atributos, como así también se generará data de los siguientes usuarios:

```json
{
  "email": "alexis.sanchez@gmail.com",
}
{
  "email": "mario.bros@gmail.com",
}
{
  "email": "hasbulla@gmail.com",
}

```

---
## Para las peticiones HTTP se utilizó una extensión en Visual Studio llamada THUNDER CLIENTE

### Se creó las siguiente colección de peticiones:

<details><summary> MOSTRAR </summary>


![Image text](https://github.com/FelipeGaticaL/test-izimedia/blob/main/public/Coleccion_Http.JPG)

![Image text](https://github.com/FelipeGaticaL/test-izimedia/blob/main/public/ExtendPeticionHttp.JPG)

</details>

---
### Peticiones HTTP ejemplos:

### User:

<details><summary> MOSTRAR PETICIONES DE USER </summary>

---

- Titulo: **User Register**
- Funcionalidad: Registra un usuario Email y Contraseña.
- Request: http://localhost:3001/api/user/register/
- Method: POST
- JSON Body:

```json
{
  "email": "prueba1@gmail.com",
  "password": "password1234"
}
```
---

- Titulo: **User Login**
- Funcionalidad: Login de usuario
- Request: http://localhost:3001/api/user/login/
- Method: GET
- JSON Body:

```json
{
  "email": "alexis.sanchez@gmail.com",
  "password": "Masterdog1234"
}
```
---

- Titulo: **Get All Users**
- Funcionalidad: Obtiene todos los User y sus Profile
- Request: http://localhost:3001/api/user/users/
- Method: GET
- JSON Body: Empty

---

- Titulo: **Post Profile**
- Funcionalidad: Crea un nuevo Profile de un User ya existente.
- Request: http://localhost:3001/api/user/profile/
- Method: POST
- JSON Body:

```json
{
  "name": "Prueba1",
  "last_name": "ApellidoPrueba",
  "gender": "Masculino",
  "addres": "Villa 1234",
  "city": "Santiago",
  "country": "Chile",
  "age": 78,
  "user_id": 4
}
```

---

- Titulo: **Delete User**
- Funcionalidad: Elimina un User y su Profile en modalidad CASCADE
- Request: http://localhost:3001/api/user/delete/
- Method: DELETE
- JSON Body:

```json
{
"id": 4
}
```

---

- Titulo: **Update Profile**
- Funcionalidad: Actualiza los datos de un Profile Existente
- Request: http://localhost:3001/api/user/update/
- Method: PUT
- JSON Body:

```json
{
"name": "Alexis",
"last_name": "Sanchez",
"gender": "Masculino",
"addres": "Alemania 581", /* --> Elemento cambiado */
"city": "Marsella",
"country": "Francia",
"age": 32,
"user_id": 1
}
```

</details>

### Loan:

<details><summary> MOSTRAR PETICIONES DE LOAN </summary>

---

- Titulo: **Create Loan**
- Funcionalidad: Crear un préstamo de un Manga asociado a un Usuario. Disminuye en las unidades que se solicita un libro (Manga), pero no permite si esto significa **< 0**
- Request: http://localhost:3001/api/loans/create-loan
- Method: POST
- JSON Body:

```json
{
    "manga_id": 1,
    "profile_id": 1,
    "loan_date": "2023-03-20",
    "return_date": "2023-03-27",
    "status": "Activo",
    "quantity_loan": 1
}
```

---

- Titulo: **Update Loan**
- Funcionalidad: Actualiza un préstamo (Loan), **si esto significa un cambio en la referencia con un libro (manga_id), se incrementa y decrementa los libros que se estan cambiando en la entidad MANGA**.
**
- Request: http://localhost:3001/api/loans/update
- Method: PUT
- JSON Body:

```json
{
    "id":2,
    "manga_id": 2,
    "profile_id": 1,
    "loan_date": "2023-03-20",
    "return_date": "2023-03-28",
    "status": "Activo",
    "quantity_loan": 1
}

```

---

- Titulo: **Delete Loan**
- Funcionalidad: Se elimina un registro de Loan, y **se devuelve la cantidad de un libro a la entidad Manga**
- Request: http://localhost:3001/api/loans/delete
- Method: DELETE
- JSON Body:

```json
{
  "id":1
}

```

---

- Titulo: **Get All Loans**
- Funcionalidad: Se llaman los datos relaciondos de las entidades Loan, Profile, User y Manga.
- Request: http://localhost:3001/api/loans/get-loans
- Method: GET
- JSON Body: Empty

</details>

### Manga:

<details><summary> MOSTRAR PETICIONES DE MANGA </summary>

---

- Titulo: **Get All Mangas**
- Funcionalidad: Se llaman los datos relaciondos de las entidades Manga, Literary genres y Authors.
- Request: http://localhost:3001/api/loans/get-loans
- Method: GET
- JSON Body: Empty

</details>