var express = require('express');
var router = express.Router();
var mensajes = require('../models/mensajes'); // esquema de los mensajes o estrutura.
var mongoose = require('mongoose');



//Guardar un mensaje
router.post('/', function(req,res){
mensajes.insertMany({

    nombre: req.body.nombre,
    correo: req.body.correo,
    mensaje: req.body.mensaje,
    telefono: req.body.telefono

})
.then(result=>{
    res.send(result)
    res.end();
})
.catch(error=>{
    res.send(error)
    res.end();
})



});

//Mostrar un mensaje
router.get('/', function(req,res){
    mensajes.find({},{})
    .then(result=>{
        res.send(result)
        res.end();
    })
    .catch(error=>{
        res.send(error)
        res.end();
    })
    
    
    
    });


module.exports = router;