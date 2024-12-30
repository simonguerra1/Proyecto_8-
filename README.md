# API de Tiendas y Discos

Una API para gestionar tiendas de vinilos y sus colecciones de discos.

## Descripción

Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en dos entidades principales: Tiendas y Discos. También incluye un script de semillas para poblar la base de datos con datos iniciales.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <tu-repositorio>
   cd <nombre-del-directorio>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno en un archivo `.env`:
   ```plaintext
   DB_URL=<tu-url-de-mongodb>
   ```

## Estructura del Proyecto

- `src/api/models`: Modelos de MongoDB para Tiendas y Discos.
- `src/api/controllers`: Lógica para manejar las rutas y operaciones CRUD.
- `src/api/routes`: Define las rutas para Tiendas y Discos.
- `src/data`: Archivo con datos iniciales de discos (`discos.js`).
- `src/seeds`: Script para poblar la base de datos con datos iniciales.

## Uso

- Levanta el servidor con:
  ```bash
  npm start
  ```
- Endpoints disponibles:
  - **Tiendas**:
    - `GET /api/v1/tiendas`
    - `POST /api/v1/tiendas`
    - `PUT /api/v1/tiendas/:id`
    - `DELETE /api/v1/tiendas/:id`
  - **Discos**:
    - `GET /api/v1/discos`
    - `POST /api/v1/discos`
    - `PUT /api/v1/discos/:id`
    - `DELETE /api/v1/discos/:id`

## Poblar la Base de Datos

Ejecuta el script de semillas para poblar la base de datos con datos iniciales:

```bash
node src/seeds/disco.js
```

## Tecnologías Usadas

- Node.js
- Express.js
- MongoDB con Mongoose

## Contribuciones

Se aceptan pull requests. Para cambios importantes, por favor abre un issue primero para discutir lo que te gustaría cambiar.
