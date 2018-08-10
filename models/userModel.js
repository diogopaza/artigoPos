mongo = require('../config/dbConnection')


module.exports.autenticar = async function(user, req, res){
    console.log( user)
    db = mongo.getDbConnection()
    db.collection('user', function(err, collection){
  
        collection.find(user).toArray(function(err, result){
            res.send(result)
        })

   })
    

 

}