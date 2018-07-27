var multiparty = require('multiparty')
mongo = require('../config/dbConnection')
fs = require('fs')

module.exports.cadastrarEstado = function( req, res,next){

    var dadosForm = new multiparty.Form()
    dadosForm.parse(req, async function(err, campos, arquivos){
      if(err) throw err
        
        //conecta ao mongo e passa a collection estados
        var db = mongo.getDbConnection()
        collection = db.collection('estados')
        rstream = fs.createReadStream(arquivos.foto[0].path)
        wstream = fs.createWriteStream('imagemBandeira.jpg') 
        rstream.pipe(wstream)
        var bandeira = 'public/img/nova.jpg'
       
       
        /*
        var path_atual_image =  arquivos.foto[0].path
        //move a foto atual para nosso pasta de imagens
        fs.rename( path_atual_image , bandeira, function(err){
            if (err) console.log(err) 
              
        })
    
        await collection.insertMany([
            {
            estado: campos.nomeEstado,
            bandeira:35
            }
        ])
        */
        console.log(bandeira)

    })
   
   
    res.send('controler do cadastrar')

}