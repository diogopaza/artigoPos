var express = require('express');
var router = express.Router();
cadastrar = require('../controllers/cadastrar')
retornaClientesEstados = require('../controllers/retornaClientesEstados')
retornaCidades = require('../controllers/retornaClientesCidades')
retornarEstadoModel = require('../models/estadoModel')
indexController = require('../controllers/indexController')
fs = require('fs')


var path_public = __dirname + '/public'


router.get('/', function(req, res, next) {
 
  res.render('index', { title: 'Express' });
});

router.get('/cadastrar', function(req, res, next){

  cadastrar.cadastrar(req, res, next)

})

router.post('/cadastrarEstado', function(req, res, next){
  
  cadastrar.cadastrarEstado(req, res,next)

})


router.get('/clientes', function(req, res, next){
  
 retornaClientesEstados.retornaEstados(req, res, next)

})

router.post('/cadastrarCidade', function(req, res, next){
 
  cadastrar.cadastrarCidade(req, res,next)
  
  })



router.get('/retornarEstados', async function(req, res, next){
  
   estados = await retornarEstadoModel.retornarEstados(req, res, next)
   
   res.send(estados)
  })


router.get('/retornarEstado', async function(req, res, next){
  
    estado = await retornaClientesEstados.retornaEstado(req, res, next)
  })

router.post('/retornarCidades', async function(req, res, next){
    
      res.send('estou retornando cidades')
    })

  router.post('/autenticar',  function(req, res, next){
    
   indexController.autenticar(req, res, next)
   
  })


module.exports = router;
