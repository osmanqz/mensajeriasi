
var mongoose = require('mongoose');

let bd = 'mensajeria'; //nombre de la base de datos
let port = '27017'; //pueto de la base de datos
let host = 'localhost'; //ubicacion de la base de datos


mongoose.connect('mongodb+srv://osman:123@cluster0.queqd.mongodb.net/mensajeria?retryWrites=true&w=majority', {
  
})
    .then(db => console.log('Base Conectada'))
    .catch(err => console.log(err));


//module.export = new Database();

