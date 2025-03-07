# to-do-list-egsi

## 1. Descripción del Proyecto

**to-do-list-egsi** es una aplicación web de lista de tareas (to-do list) construida con React, TypeScript y Vite. Esta aplicación permite a los usuarios gestionar sus tareas de manera eficiente, proporcionando una interfaz intuitiva para crear, editar, completar y eliminar tareas. Además, incorpora un sistema de autenticación para proteger el acceso a las tareas de cada usuario.

**Problema que resuelve:**

*   Organizar tareas pendientes.
*   Proporcionar una interfaz de usuario amigable para la gestión de tareas.
*   Permitir que cada usuario tenga su propia lista de tareas protegida mediante un sistema de login.

**Características principales:**

*   **Gestión de Tareas:** Permite a los usuarios crear, editar, completar y eliminar tareas.
*   **Autenticación de Usuarios:** Solo los usuarios autenticados pueden acceder a la lista de tareas.
*   **Interfaz Intuitiva:** Diseño simple y fácil de usar.
*   **Protección de Rutas:** Las rutas están protegidas, garantizando que solo los usuarios autenticados puedan acceder a ellas.

**Tecnologías Utilizadas:**

*   **React:** Librería de JavaScript para construir interfaces de usuario.
*   **TypeScript:** Lenguaje de programación que añade tipado estático a JavaScript, mejorando la calidad del código.
*   **Vite:** Herramienta de construcción que ofrece un entorno de desarrollo rápido y eficiente.
*   **React Router:** Para la gestión de rutas dentro de la aplicación.
*   **Axios:** Cliente HTTP basado en promesas para realizar peticiones a la API.
*   **react-hot-toast:** Librería para mostrar notificaciones de una manera visualmente atractiva.

## 2. Instalación y Configuración

Sigue estos pasos para instalar y configurar el proyecto localmente:

**Requisitos previos:**

*   **Node.js:** Versión 18.x o superior. Puedes verificar tu versión con el comando `node -v`.
*   **npm:** Viene incluido con Node.js. Puedes verificar tu versión con el comando `npm -v`.

**Pasos de Instalación:**

1.  **Clonar el Repositorio:**

    ```bash
    git clone https://github.com/josewebfreelance/to-do-list-egsi.git
    cd to-do-list-egsi
    ```

2.  **Instalar Dependencias:**

    ```bash
    npm install
    ```

3.  **Variables de Entorno:**

    *   Crea un archivo `.env` en la raíz del proyecto.
    *   Define las siguientes variables de entorno:
        *   `VITE_BASE_URL`: URL base de la API (ej: `http://localhost:3000/api`). En el código se usa la constante `BASEURL`, que se puede encontrar en la carpeta `utilities`.
        *   **Nota:** `VITE_` es el prefijo necesario para Vite.

4.  **Ejecutar localmente:**

    ```bash
    npm run dev
    ```

    Esto iniciará el proyecto, con un servidor de desarrollo de Vite en `http://localhost:5173`.

## 3. Endpoints de la API (Próximamente)

*Nota:* Actualmente el proyecto no tiene una API propia. Esta sección se completará una vez que la API esté implementada. Aquí se listarán los endpoints con sus respectivos métodos HTTP, parámetros y ejemplos de respuestas.

Ejemplo hipotético:

| Endpoint         | Método | Descripción                             | Parámetros             | Respuesta (JSON)                                                                                            |
| :--------------- | :----- | :-------------------------------------- | :--------------------- | :---------------------------------------------------------------------------------------------------------- |
| `/api/tasks`     | GET    | Obtiene todas las tareas del usuario.   | Ninguno                | `[{ "id": 1, "title": "Tarea 1", "completed": false }, { "id": 2, "title": "Tarea 2", "completed": true }]` |
| `/api/tasks`     | POST   | Crea una nueva tarea.                   | `title`                | `{ "id": 3, "title": "Nueva tarea", "completed": false }`                                                   |
| `/api/tasks/:id` | PUT    | Actualiza una tarea existente.          | `title`, `completed`   | `{ "id": 3, "title": "Tarea editada", "completed": true }`                                                  |
| `/api/tasks/:id` | DELETE | Elimina una tarea por su identificador. | Ninguno                | `{"message": "Tarea eliminada correctamente"}`                                                              |
| `/api/login`     | POST   | Iniciar Sesión                          | `username`, `password` | `{"token": "JWT TOKEN"}`                                                                                    |

## 4. Páginas

La aplicación cuenta con las siguientes páginas principales:

*   **Página de Inicio de Sesión (`/login`):**
    *   Permite a los usuarios ingresar sus credenciales (nombre de usuario y contraseña) para acceder a la aplicación.
    *   Si el usuario ya está logueado, lo redirige a la página de tareas.
    *   Componentes principales: `LoginPage`.
*   **Página de Tareas (`/tasks`):**
    *   Muestra la lista de tareas del usuario autenticado.
    *   Permite crear, editar, completar y eliminar tareas.
    *   Solo accesible para usuarios autenticados.
    *   Componentes principales: `TasksPage`.
*   **Protección de Rutas**
    *   La ruta `/tasks`, esta protegida mediante el componente `ProtectedRoutes`, este validara si el usuario esta logueado y tiene acceso a la pagina.
    *   La ruta `/login`, esta protegida mediante el componente `PublicRoutes`, este validara si el usuario ya esta logueado, y lo redirigira a la pagina `/tasks`.

## 5. Componentes

La aplicación utiliza los siguientes componentes principales:

*   **`AppRoutes`:**
    *   **Función:** Define las rutas principales de la aplicación.
    *   **Props:** Ninguna.
    *   **Ejemplo de uso:**

    ```jsx
    <AppRoutes />
    ```

*   **`ProtectedRoutes`:**
    *   **Función:** Protege una ruta, validando si el usuario tiene acceso.
    *   **Props:**
        *   `children`: Componente a renderizar.
    *   **Ejemplo de uso:**

    ```jsx
    <ProtectedRoutes>
        <TasksPage/>
    </ProtectedRoutes>
    ```

*   **`PublicRoutes`:**
    *   **Función:** Protege una ruta publica, validando si el usuario ya tiene session, en caso de que si, lo redirige a `/tasks`.
    *   **Props:**
        *   `children`: Componente a renderizar.
    *   **Ejemplo de uso:**

    ```jsx
    <PublicRoutes>
        <LoginPage/>
    </PublicRoutes>
    ```

*   **`EntryPointApp`:**
    *   **Función:** Componente principal, inicia la aplicación y contiene el enrutador y el Theme.
    *   **Props:** Ninguna.
    *   **Ejemplo de uso:**

    ```jsx
    <EntryPointApp />
    ```
*   **`LoginPage`:**
    *   **Función:** Componente para la pantalla de login
    *   **Props:** Ninguna
*   **`TaskPage`:**
    *   **Función:** Componente para la pantalla principal de la aplicacion, muestra la lista de tareas del usuario.
    *   **Props:** Ninguna

*   **`AppTheme`:**
    *   **Función:** Provee el tema a la aplicación, se encarga de la apariencia visual.
    *   **Props:**
        * `children`: Componente a renderizar.

En este ejemplo se puede observar, que `useUserStore` contiene el estado del usuario, su token, funciones para setear el usuario, el token, y para cerrar sesión.
En la funcion `setToken`, podemos observar que al actualizar el token, se ejecuta `setTokenInSessionStorage`, persistiendo el token en el `sessionStorage`.
En la funcion `logout`, se setea `null` el usuario y el token, ademas se ejecuta `setTokenInSessionStorage`, pasando `null` para eliminar el token del `sessionStorage`.

## 6. Dependencias

A continuación, se listan las dependencias del proyecto y sus versiones:

**Dependencias de Producción:**

*   **react:** ^18.2.0
    *   La librería principal de React para construir la interfaz de usuario.
*   **react-dom:** ^18.2.0
    *   El DOM para React.
*   **react-router-dom:** ^6.21.3
    *   Permite gestionar las rutas del proyecto.
*   **axios:** ^1.6.7
    *   Cliente HTTP basado en promesas para realizar peticiones a la API.
*   **react-hot-toast:** ^2.4.1
    *   Librería para mostrar notificaciones.
*   **zustand**: ^4.5.0
    *  Libreria para gestionar el estado de la aplicación

**Dependencias de Desarrollo:**

*   **@types/react:** ^18.2.43
    *   Tipos de TypeScript para React.
*   **@types/react-dom:** ^18.2.17
    *   Tipos de TypeScript para React DOM.
*   **@vitejs/plugin-react:** ^4.2.1
    *   Plugin de Vite para React.
*   **typescript:** ^5.2.2
    *   Lenguaje TypeScript.
*   **vite:** ^5.0.8
    *   Herramienta de desarrollo para proyectos web.

**Explicación de Dependencias Relevantes:**

*   **React y React-DOM:** La base para la construcción de la interfaz de usuario.
*   **React Router:** Permite la navegación entre diferentes vistas dentro de la aplicación sin recargar la página.
*   **Axios:** Facilita las peticiones HTTP, incluyendo la gestión de headers y la interceptación de peticiones.
*   **react-hot-toast:** Provee un manera sencilla de mostrar notificaciones.
*   **Vite:** Entorno de desarrollo rapido.
*   **Typescript:** Nos proporciona tipado estatico.
* **Zustand**: Para gestionar el estado de la aplicación.

## 7. Uso

**Ejecutar la aplicación en modo desarrollo:**

1.  Asegúrate de haber seguido los pasos de instalación.
2.  Ejecuta el comando:

    ```bash
    npm run dev
    ```

    Esto iniciará el servidor de desarrollo en `http://localhost:5173`.

**Ejemplo de uso:**

1.  Abre el navegador en `http://localhost:5173`.
2.  Si no estás logueado, serás redirigido a la página de inicio de sesión (`/login`).
3.  Una vez logueado, serás redirigido a la página de tareas (`/tasks`).
4.  Si intentas acceder a la ruta `/tasks` sin estar logueado, serás redirigido a la pagina `/login`.
5.  Si estas logueado, e intentas ingresar a la ruta `/login`, serás redirigido a la pagina `/tasks`.
