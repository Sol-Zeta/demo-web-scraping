// Importo los paquetes npm, middlewares y constantes que voy a utilizar
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')

const PORT = process.env.PORT || 3000


// Ejecuto los middlewares necesarios

// CORS
app.use(cors())

// Para habilitar recepcion de JSONs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importo la ruta correspondiente a la parte del servidor que sirve estáticos y a la parte del servidor que es API REST

app.use('/', routes)

// Error Handler: 400
app.use((req, res, next) => {
    res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});

// Error Handler: 500 - Any server error
app.use(function(err, req, res, next) {
    res.status(500).send({ error: err });
});


app.listen( PORT, () => console.info(`App listening on port ${PORT}`))




