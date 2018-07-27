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
        var name_image =  arquivos.foto[0].originalFilename
        var bandeira = 'public/img/' + name_image   
       
        rstream =  await fs.createReadStream(arquivos.foto[0].path)
        wstream =  await fs.createWriteStream(name_image) 
        await rstream.pipe(wstream)
       
        
         //move a foto atual para nosso pasta de imagens
         fs.rename( name_image , bandeira, function(err){
            if (err) console.log(err) 
                console.log('Bandeira gravada com sucesso')
              
        })
    
       
        await collection.insertMany([
            {
            estado: campos.nomeEstado,
            bandeira: bandeira
            }
        ])
        
        console.log(bandeira)

   
   
})
    res.send('controler do cadastrar')

}