mongo = require('../config/dbConnection')
db = mongo.myDB()

module.exports.cadastrarEstadoModel = async function(connection, user){
    collection = db.db('user')
    res.send('estou no user model')

}