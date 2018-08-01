estadoModel = require('../models/estadoModel')

module.exports.retornaEstados = async (req, res,next) => {

 result = await  estadoModel.retornarEstados()
      
    res.render('clientes', {estados: result})
}