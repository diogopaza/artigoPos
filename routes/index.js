var express = require('express');
var router = express.Router();
cadastrarEstadoController = require('../controllers/cadastrarEstadoController')
fs = require('fs')


var path_public = __dirname + '/public'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cadastrar', function(req, res, next){

  res.render('cadastrar')

})

router.post('/cadastrarEstado', function(req, res, next){
  
  cadastrarEstadoController.cadastrarEstado(req, res,next)

})
module.exports = router;
