# Tuten test react

Web app construida con React.js, es una aplicación sencilla que consta de un login a una API mediante la cual recibe un token de autorización para poder visualizar data a través de la cual es capaz de realizar búsquedas mediante el uso de filtros.

La aplicación consta de los siguientes componentes:

```
Tuten-test-react
 src
   -App.js
   components
     BookingsGrid
      -BookingsGrid.css
      -BookingsGrid.jsx
     Filters
      -Filters.css
      -Filters.jsx
     LoginBox
      -LoginBox.css
      -LoginBox.jsx
   pages
     -Bookings.jsx
     -Bookings.css
     -Login.jsx
     -Login.css
   redux
      actions
        -ActionCreators.js
        -ActionTypes.js
      reducers
        -Bookings.js
        -Email.js
        -Token.js
      store
        -confugureStore.js
        -store.js


```

Los pasos que se siguieron para crear la aplicación se pueden ver reflejados en el historial de _git_ en el repositorio de Github. Pero básicamente se siguió el esquema a continuación:

1. Creación de la aplicación base
2. Creación de las páginas contenedoras
3. Creación de los componentes básicos
4. Configuración de redux como controlador del estado de la aplicación
5. Creación y configuración del store
6. Creación del scafolding de los action types, action creators y reducers
7. Conexión de los componentes al store
8. Elaboración de los action creators y reducers
9. Estudiar la API
10. Consumir uno de los servicios disponibles
11. Construir los filtros de para la data
12. Generar los stylos necesarios

## Instalación

Use npm como package manager.

```bash
git clone https://github.com/simonmontaggioni/tuten-test-react.git
```

## Uso

```bash
cd tuten-test-react

npm install
npm start
```

Abrir la siguiente url [http://localhost:3000](http://localhost:3000) en el navegador

Datos para acceder a la aplicación:

- User: testapis@tuten.cl
- Password: 1234

Datos para testear búsqueda:

- Email: contacto@tuten.cl

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
