var mongoose = require('mongoose');

var esqueme = new mongoose.Schema({

    nombre: String,
    correo: String,
    mensaje: String,
    telefono: String


});

module.exports = mongoose.model("mensajes", esqueme)