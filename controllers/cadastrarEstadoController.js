var multiparty = require('multiparty')
mongo = require('../config/dbConnection')

module.exports.cadastrarEstado = function( req, res,next){

    var dadosForm = new multiparty.Form()
    dadosForm.parse(req, async function(err, campos, arquivos){
      if(err) throw err
        var db = mongo.getDbConnection()
        collection = db.collection('estados')
        await collection.insertMany([
            {
            name:'Diogo',
            age:35
            }
        ])
        console.log('usuario inserido com sucesso')

    })
   
   
    res.send('controler do cadastrar')

}