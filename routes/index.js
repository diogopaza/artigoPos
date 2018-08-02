var express = require('express');
var router = express.Router();
cadastrar = require('../controllers/cadastrar')
retornaClientesEstados = require('../controllers/retornaClientesEstados')
retornaCidades = require('../controllers/retornaClientesCidades')

fs = require('fs')


var path_public = __dirname + '/public'


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cadastrar', function(req, res, next){

  res.render('cadastrar')

})

router.post('/cadastrarEstado', function(req, res, next){
  
  cadastrar.cadastrarEstado(req, res,next)

})
module.exports = router;

router.get('/clientes', function(req, res, next){
  
 retornaClientesEstados.retornaEstados(req, res, next)

})

router.post('/cadastrarCidade', function(req, res, next){
  
  cadastrar.cadastrarCidade(req, res,next)
  
  })

router.get('/retornaClientesCidades', function(req, res, next){

   retornaCidades.retornarCidades(req, res, next)
})





module.exports = router;
