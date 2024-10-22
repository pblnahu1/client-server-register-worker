# Sistema de Registros de Trabajadores

Esta es una aplicación de gestión de registros de trabajadores, implementada con **Angular** en el frontend y **PHP** con **MySQL** en el backend. La aplicación permite realizar un CRUD (Crear, Leer, Actualizar y Eliminar) de trabajadores, junto con características adicionales que pronto estarán disponibles como autenticación, edición de perfiles y administración de usuarios.

## Características

- **CRUD completo de trabajadores**: Crear, leer, actualizar y eliminar registros de trabajadores.
- **Autenticación** (pendiente): Sistema de login para trabajadores y administradores con manejo de sesiones y tokens JWT.
- **Edición de perfil** (pendiente): Los trabajadores pueden editar sus datos personales (nombre, teléfono, email).
- **Administración de usuarios** (pendiente): Los administradores tienen la capacidad de gestionar todos los trabajadores, editando o eliminando sus registros.
- **Seguridad** (pendiente): Implementación de roles de usuario y protección de rutas.

## Requisitos

- **Angular**
- **PHP**
- **MySQL**
- **Composer** (para manejar dependencias de PHP)
- **XAMPP** o cualquier servidor local de PHP con MySQL
- **Bootstrap o Tailwind**, el que prefieras

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/app-registros-trabajadores.git
```

### 2. Backend (Si usas Xampp, esta carpeta debe estar dentro de htdocs)
> 1. Ir al proyecto backend: 
```bash
cd backend
```
> 2. Configurar la BD:
```php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "app_registros_trabajadores";
```
> 3. Instalar las dependencias de PHP con Composer:
```bash
composer install
```
> 4. Importar el archivo SQL en tu servidor MySQL para crear la BD y las tablas necesarias (opcional):
```bash
mysql -u root -p app_registros_trabajadores < database.sql
```
> 5. Ejecutar el servidor PHP:
```bash
php -S localhost:8000
```
### 3.  Frontend (Angular)
> 1. Ir al proyecto frontend:
```bash
cd frontend
```
> 2. Instalas las dependencias de Angular:
```bash 
npm install 
```
> 3. Configura la URL del backend en el archivo `usuarios.service.ts`:
```typescript
private URL = "http://localhost:8000";
```
> 4. Levantar el servidor de desarrollo de Angular: `ng serve --open`

## Funcionalidades
### 1. Registro de Trabajadores
- El administrador puede agregar trabajadores con su nombre, teléfono, correo electrónico, puesto y estado de disponibilidad.
- Los administradores tienen control completo sobre los registros de todos los trabajadores.
- Junto con esto, al agregar, se almacena la fecha de registro y última actualización.

### 2. Inicio de Sesión (pendiente)
- El Administrador puede iniciar sesión con su email y contraseña.
- Se garantiza la protección de rutas mediante tokens JWT.

### 3. Edición de Perfil (pendiente)
- El Administrador puede editar su información personal.
- "               " puede cambiar su contraseña en cualquier momento.

### 4. Administración de Trabajadores
- Los administradores pueden ver, editar o eliminar cualquier registro de trabajador.
- Se ofrece una interfaz para la administración de trabajadores registrados en la BD.

### Más Funcionalidades que se pueden agregar (pendiente)
- Recuperación de contraseñas vía email.
- Mejoras en el sistema de roles, permitiendo una gestión más avanzada de permisos.
- Agregar un dashboard de estadísticas y gráficos para la administración.

### Contribuciones
Si deseas contribuir, por favor realiza un <b>fork</b> del proyecto, crea una rama con tu funcionalidad o mejora, y envía un <b>pull request.</b> Cualquier colaboración será bienvenida.
