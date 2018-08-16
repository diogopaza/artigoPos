mongo = require('../config/dbConnection')


module.exports.cadastrarEstadoModel = async function(estado, bandeira){

    var db = mongo.getDbConnection()
    collection = db.collection('estados')

    await collection.insertMany([
        {
        estado:estado,
        bandeira: bandeira,
        cidades:[
            {
                   nomeCidade:'Cascavel',
                   clientes:{ nomeCliente:'Bar', enderecoCliente:'xxxxxx'}
                   
            },
            {
                nomeCidade:'Londrina',
                clientes:{ nomeCliente:'Igreja', enderecoCliente:'yyyyy'}
            }
        

        
        ]
    }
    ])
  
}



module.exports.retornarEstados = async function(){

    
    var db = await mongo.getDbConnection()
    collection = db.collection('estados')

    var myDocs = await collection.find({}).toArray()
    return myDocs
    

  

}


module.exports.retornarEstado = async function(){
    
        
     console.log('retornar estado')
        
    
      
    
    }