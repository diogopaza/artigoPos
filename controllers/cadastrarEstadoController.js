var multiparty = require('multiparty')

module.exports.cadastrarEstado = function( req, res,next){

    var dadosForm = new multiparty.Form()
    dadosForm.parse(req, function(err, campos, arquivos){
      
    })
   
   
    res.send('controler do cadastrar')

}