/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
    console.log('a');
    var db = new mongo.Db(
            'got', //nome do banco
            new mongo.Server(
                    'localhost', //endereço do servidor
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