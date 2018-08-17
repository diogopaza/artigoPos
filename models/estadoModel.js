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
                   
                   clientes:[]
            },
            {
                
                clientes:[]
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


module.exports.retornarEstado = async function(estado){
    
        
    var db = await mongo.getDbConnection()
    collection = db.collection('estados')

    var myDocs = await collection.find({ estado: estado }).toArray()
    return myDocs
        
    
      
    
    }