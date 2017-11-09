module.exports.jogo = function(application, req, res){
    
    if (req.session.autorizado) {
        res.render('jogo', {imgCasa: req.session.casa});
    }else{
        res.send('nao autorizado');
        
    }
        
}

module.exports.sair = function(application, req, res){
    
    req.session.destroy(function(err){
        res.render("index", {validacao:{}});
    });
}