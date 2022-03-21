
var mongoose = require('mongoose');

let bd = 'mensajeria'; //nombre de la base de datos
let port = '27017'; //pueto de la base de datos
let host = 'localhost'; //ubicacion de la base de datos

class Database {

    constructor() {
        this.conectar();
    }

    conectar() {
        mongoose.connect('mongodb+srv://osman:123@cluster0.dad8y.mongodb.net/mensajeria?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
            .then(result => console.log('Se conectó a mongodb'))
            .catch(error => console.log(error));
    }

}

module.export = new Database();

