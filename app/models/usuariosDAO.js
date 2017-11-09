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

usuariosDAO.prototype.autenticar = function(dados, req, res){
    
    this._connection.open(function(err, mongoClient){
        mongoClient.collection("usuarios", function(err, collection){
            collection.find({usuario: dados.usuario, senha: dados.senha}).toArray(function(err, result){
                
                if (result[0] != undefined) {
                    req.session.autorizado = true;
                    req.session.usuario = result[0].usuario;
                    req.session.casa = result[0].casa;
                }
                
                if (req.session.autorizado) {
                    res.redirect('jogo');
                }else{
                    res.render('index', {validacao:{}});
                }
            });
            
            mongoClient.close();
            
        });
    });
}

module.exports = function(){
    return usuariosDAO;
}