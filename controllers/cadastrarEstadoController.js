var multiparty = require('multiparty')
cadastrarEstadoModel = require('../models/cadastrarEstadoModel')

fs = require('fs')

module.exports.cadastrarEstado = function( req, res,next){

    var dadosForm = new multiparty.Form()
    dadosForm.parse(req, async function(err, campos, arquivos){
      if(err)  throw err
        
        //conecta ao mongo e passa a collection estados
      
        var name_image =  arquivos.foto[0].originalFilename
        var bandeira = 'public/img/' + name_image   
        var estado =  campos.nomeEstado
        rstream =  await fs.createReadStream(arquivos.foto[0].path)
        wstream =  await fs.createWriteStream(name_image) 
        await rstream.pipe(wstream)
       
        
         //move a foto atual para nosso pasta de imagens
         fs.rename( name_image , bandeira, function(err){
            if (err) console.log(err) 
                console.log('Bandeira gravada com sucesso')
              
        })

        cadastrarEstadoModel.cadastrarEstadoModel(estado, bandeira, function(err){
            if (err) console.log('erro ao inserir no mongo')
                console.log('inserido com sucesso no mongo')
        }) 
   
})
    res.send('controler do cadastrar')

}