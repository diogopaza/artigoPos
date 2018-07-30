estadoModel = require('../models/estadoModel')

module.exports.retornaEstados = async (req, res,next) => {

 result = await  estadoModel.retornarEstados()
        console.log(result[0].bandeira)
    res.render('clientes', {estados: result})
}