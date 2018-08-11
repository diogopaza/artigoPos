mongo = require('../config/dbConnection')


module.exports.autenticar = async function(user, req, res){
   
    db = mongo.getDbConnection()
    db.collection('user', function(err, collection){
  
        collection.find(user).toArray(function(err, result){
            
            console.log(user)
            if(result[0] != undefined){
                console.log(result)
                req.session.autorizado = true
                res.render('cadastrar' )
            }else{
                res.send('Login inválido')
            }
        })

   })
    

 

}