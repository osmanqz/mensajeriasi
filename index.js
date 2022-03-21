var express = require('express'); // importamos el modulo express
var bodyParser = require('body-parser'); // para utilizar Post
var cors = require('cors');
const { json } = require('express');




var app = express(); //para armar todo el ResApi
var database = require('./modulos/database');
var mensajesRouter = require('./routes/mensajes'); //importamos las rutas



//Middleware
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(bodyParser.json());// para poblar la informacion que viene del cliente
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors());






app.use('/mensajes', mensajesRouter); //enrutador


//app.listen(8888,function(){
//   console.log('Servidor levantado en el puerto 8888')
//})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Servidor del backend levantado en puerto', port);
}); 
