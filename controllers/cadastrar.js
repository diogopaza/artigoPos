var multiparty = require('multiparty')
cadastrarEstadoModel = require('../models/estadoModel')

fs = require('fs')

module.exports.cadastrarEstado = function( req, res,next){

    var dadosForm = new multiparty.Form()
    dadosForm.parse(req, async function(err, campos, arquivos){
      if(err)  throw err
        
        //conecta ao mongo e passa a collection estados
      
        var name_image =  arquivos.foto[0].originalFilename
        var bandeira = 'img/' + name_image  
        var gravarImagemBandeira =  'public/img/' + name_image
        var estado =  campos.nomeEstado
        rstream =  await fs.createReadStream(arquivos.foto[0].path)
        wstream =  await fs.createWriteStream(name_image) 
        await rstream.pipe(wstream)
       
        
         //move a foto atual para nosso pasta de imagens
         fs.rename( name_image , gravarImagemBandeira, function(err){
            if (err) console.log(err) 
                console.log('Bandeira gravada com sucesso')
              
        })

        cadastrarEstadoModel.cadastrarEstadoModel(estado, bandeira)
          
   
})
    res.send('controler do cadastrar')

}

module.exports.cadastrarCidade = function( req, res,next){

    var dadosForm = new multiparty.Form()
    dadosForm.parse(req, async function(err, campos, dados){
        if (err) throw err

        console.log(campos)

    })
    res.send('estou no controller cadastar cidade')

}