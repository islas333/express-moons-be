# SmileCenters API

API REST para gestionar los SmileCenters utilizando Node.js, Express, TypeScript y Parse.

## Descripción

Este proyecto es una API REST que permite gestionar los SmileCenters. Utiliza Node.js, Express y TypeScript para el backend, y Parse para la base de datos.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/islas333/express-moons-be.git
   cd smilecenters-api

## Instalación

2. Instala las dependencias:
   ```sh
   npm install
   ```

## Ejecución

1. Compila el código TypeScript:
   ```sh
   npm run build
   ```

2. Inicia el servidor en modo de desarrollo:
   ```sh
   npm run dev
   ```

3. Inicia el servidor en modo de producción:
   ```sh
   npm start
   ```

### Notas:

- Asegúrate de reemplazar `"tu-app-id"` y `"tu-javascript-key"` con tus credenciales reales.
- Puedes agregar más detalles a las rutas de la API según las funcionalidades que tengas implementadas.
- Si tienes más rutas o funcionalidades, asegúrate de documentarlas en la sección de "Rutas de la API".

Este `README.md` proporciona una guía clara sobre cómo configurar, ejecutar y utilizar tu API REST, así como una visión general de la estructura del proyecto.

## Rutas de la API

### Obtener todos los SmileCenters

- **URL**: `/api/smilecenters`
- **Método**: `GET`
- **Respuesta exitosa**:
  - **Código**: `200 OK`

- **Contenido de ejemplo**:
  ```json
  {
    "objectId": "12345",
    "Center_Name": "Smile Center 1",
    "Zone": "Zone 1",
    "Services":  ["Service 1", "Service 2"],
    "Calendar_Id": "cal_12345",
    "Apointment_Type_Id": "apt_12345",
    "Moons_Center": true,
    "Center_Type": "Type 1",
    "Street": "Street 1",
    "City": "City 1",
    "Neighborhood": "Neighborhood 1",
    "Region": "Region 1",
    "State": "State 1",
    "Country": "Country 1",
    "Notes": "Notes 1",
    "Center_Desc": "Description 1",
    "Apt": "Apt 1",
    "Map_URL": "http://map.url",
    "Phone": "123-456-7890",
    "promo": "Promo 1",
    "whatsAppLink": "http://whatsapp.link"
  }
  ```

## Obtener paises 

- **URL**: `/api/countries`
- **Método**: `GET`
- **Respuesta exitosa**:
  - **Código**: `200 OK`

- **Contenido de ejemplo**:
  ```json
  {
    "Country": "Colombia"
  },
  {
    "Country": "México"
  },
  {
    "Country": "Peru"
  }
  ```

## Obtener center types

- **URL**: `/api/centertypes`
- **Método**: `GET`
- **Respuesta exitosa**:
  - **Código**: `200 OK`

- **Contenido de ejemplo**:
  ```json
  {
    "Center_Type": "Centro Aliado"
  },
  {
    "Center_Type": "Doctores Moons"
  }
  ```

## Obtener zones

- **URL**: `/api/zones`
- **Método**: `GET`
- **Respuesta exitosa**:
  - **Código**: `200 OK`

- **Contenido de ejemplo**:
  ```json
  {
    "Center_Type": "Pereira"
  },
  {
    "Center_Type": "Zona Centro"
  },
  {
    "Center_Type": "Polanco"
  },
  ```

## Obtener services

- **URL**: `/api/services`
- **Método**: `GET`
- **Respuesta exitosa**:
  - **Código**: `200 OK`

- **Contenido de ejemplo**:
  ```json
  {
    "service": "fullprimera"
  },
  {
    "service": "fullseguimiento"
  },
  {
    "service": "refinamiento"
  },
  ```

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la aplicación.\
  - `config/`: Contiene la configuración de la aplicación.
  - `controllers/`: Contiene los controladores de la aplicación.
  - `models/`: Contiene los modelos de la aplicación.
  - `routes/`: Contiene las rutas de la aplicación.
  - `services/`: Contiene los servicios de la aplicación.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, sigue los pasos a continuación para contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto
Para cualquier consulta o sugerencia, puedes contactarme en [tuemail@example.com](mailto:tuemail@example.com).
