function usuariosDAO(connection){
    this._connection = connection();
}

usuariosDAO.prototype.inserirUsuario = function(usuario){
    this._connection.open(function(err, mongoClient){
        mongoClient.collection("usuarios", function(err, collection){
            collection.insert(usuario);
            
            mongoClient.close();
            
        });
    });
}

module.exports = function(){
    return usuariosDAO;
}