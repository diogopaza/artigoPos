
estadoModel = require('../models/estadoModel')

module.exports.retornaEstados = async (req, res,next) => {

 result = await  estadoModel.retornarEstados()
      
    res.render('clientes', {estados: result})
}

module.exports.retornaEstado = async (req, res,next) => {
        estado = req.query.estado
        result = await estadoModel.retornarEstado(estado)
        res.send(result)
        
    }
