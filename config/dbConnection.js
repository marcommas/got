/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){

    var db = new mongo.Db(
            'got', //nome do banco
            new mongo.Server(
                    'localhost', //endereço do servidor
//                    'mongodb://192.168.20.172/',
//                    '192.168.20.172',
                    27017, //porta conexão
                    {}
                ),
            {}
        );

    return db;
}


module.exports = function(){
    
    return connMongoDB;
    
}