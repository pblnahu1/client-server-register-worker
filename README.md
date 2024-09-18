# App de Registros de Trabajadores

Esta es una aplicación de gestión de registros de trabajadores, implementada con **Angular** en el frontend y **PHP** con **MySQL** en el backend. La aplicación permite realizar un CRUD (Crear, Leer, Actualizar y Eliminar) de trabajadores, junto con características adicionales como autenticación, edición de perfiles y administración de usuarios.

## Características

- **CRUD completo de trabajadores**: Crear, leer, actualizar y eliminar registros de trabajadores.
- **Autenticación**: Sistema de login para trabajadores y administradores con manejo de sesiones y tokens JWT.
- **Edición de perfil**: Los trabajadores pueden editar sus datos personales (nombre, teléfono, email).
- **Administración de usuarios**: Los administradores tienen la capacidad de gestionar todos los trabajadores, editando o eliminando sus registros.
- **Seguridad**: Implementación de roles de usuario y protección de rutas.

## Requisitos

- **Angular** (v14+)
- **PHP** (v7.4+)
- **MySQL** (v5.7+)
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
> 4. Importar el archivo SQL en tu servidor MySQL para crear la BD y las tablas necesarias:
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
- Los trabajadores pueden registrarse con su nombre, teléfono y correo electrónico.
- Los administradores tienen control completo sobre los registros de todos los trabajadores.

### 2. Inicio de Sesión
- Los trabajadores pueden iniciar sesión con su email y contraseña.
- Se garantiza la protección de rutas mediante tokens JWT.

### 3. Edición de Perfil
- Cada trabajador puede editar su información personal, como el nombre, teléfono y correo electrónico.
- Los trabajadores pueden cambiar su contraseña en cualquier momento.

### 4. Administración de Trabajadores
- Los administradores pueden ver, editar o eliminar cualquier registro de trabajador.
- Se ofrece una interfaz para la administración de trabajadores registrados en la BD.

### Próximas Funcionalidades (To-Do)
- Recuperación de contraseñas vía email.
- Mejoras en el sistema de roles, permitiendo una gestión más avanzada de permisos.
- Agregar un dashboard de estadísticas para la administración.

### Contribuciones
Si deseas contribuir, por favor realiza un <b>fork</b> del proyecto, crea una rama con tu funcionalidad o mejora, y envía un <b>pull request.</b> Cualquier colaboración será bienvenida.
