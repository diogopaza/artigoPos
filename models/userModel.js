mongo = require('../config/dbConnection')


module.exports.autenticar = async function(user, req, res){
   
    db = mongo.getDbConnection()
    db.collection('user', function(err, collection){
  
        collection.find(user).toArray(function(err, result){
            
          
            if(result != undefined){
               // req.session.autorizado = true
                res.send('usuario logado')
            }else{
                res.send('não é possível efetuar login')
            }
        })

   })
    

 

}