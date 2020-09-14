const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(cors());

const multiPartMiddleware = multipart({
    uploadDir: './subidas'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Endpoint para subir archivos 
app.post('/api/subir', multiPartMiddleware, (req, res) => {
    res.json({
        'message': 'Archivo subido correctamente!'
    });
})

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(PORT, ()=> console.log(`App running on port: ${PORT}`));