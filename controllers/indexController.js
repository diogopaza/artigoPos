userDAO = require('../models/userModel')

module.exports.autenticar = function( req, res,next){

   dadosForm = req.body
   userDAO.autenticar(dadosForm, req, res)
}