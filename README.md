<p align="center">
    <img src="./static/img/icon.png" width="100"/>
</p>

# Secret Chat 馃挰

### Esta aplicaci贸n fue creada para participar en la hackaton organizada por [midudev](https://twitch.tv/midudev)

<br>

### Con esta aplicaci贸n puedes acceder a funcionalidades como:
* Crear tu propia cuenta
* Acceder a conversaciones ya existentes o crear una nueva con nombres clave
* Conversar en tiempo real con los miembros del chat
* Ver los participantes de la conversaci贸n
* A帽adir 铆conos a tus mensajes
* Cambiar el tema de la aplicaci贸n
* Buscar una conversaci贸n

<br>

## Tecnolog铆as
* Nodejs + EJS
* React + Webpack
* CSS Modules
* Sequelize + SQLite
* Cypress
* Twilio
* Font awesome
* Railway

<br>

## Referencias
* [Repositorio base de midudev](https://github.com/midudev/chat-hackathon)
* [Dise帽o en el que me bas茅](https://dribbble.com/shots/15568094-Messaging-Dark-Light-Theme-Exploration/attachments/7352252?mode=media)

<br>

# Ejecut谩ndolo

### Es necesario tener una cuenta de twilio y solicitar las siguientes claves:
* sid de cuenta
* api key
* api secret
* sid de servicio

### Descargas el proyecto de github
```bash
git clone https://github.com/Rolando1010/Secret-Chat
```

### En la ra铆z del proyecto creas un archivo llamado .env y estableces lo siguiente
```env
TWILIO_ACCOUNT_SID=[sid de cuenta]
TWILIO_API_KEY=[api key]
TWILIO_API_SECRET=[api secret]
SERVICE_SID=[sid de servicio]
```

### Desde una terminal ingresas a la ra铆z del proyecto, instalas las dependencias y ejecutas el proyecto
```bash
cd Secret-Chat
npm install
npm start
```

Tienes otros comandos a disposici贸n para realizar otras actividades
```bash
# Ejecutar el proyecto
npm start

# El proyecto se ejecuta en modo desarrollo y cada vez que realices un cambio en un archivo el servidor se reinicia
npm run dev

# Se ejecuta webpack, cada vez ue realices un cambio se vuelve a empaquetar la secci贸n de React
npm run web

# Genera el empaquetado de react para producci贸n
npm run web:build

# Ejecutar los test de cypress en la terminal
npm test

# Ejecutar los test de cypress en su interfaz de usuario
npm run test:ui
```