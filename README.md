<h1>Artigo final Pós Graduação WEBDEV Alfa </h1>

NodeJS uma breve história 

Em 2009 o Node.js foi desenvolvido por Ryan Dahl em torno do motor V8, essencialmente
como uma forma de rodar programas javascript fora do contexto de um browser.
O Node não foi o primeiro software do gênero o Rhino já era bastante utilizado e a própria Netscap tinha lançado 
o Enterprise Server no meio da década de 90.
Para rodar fora do navegador é preciso oferecer APIs(conjunto de rotinas e padrões de programação para acesso a um aplicativo) para interagir com o sitema - manipular arquivos e conexões de rede, por exemplo. O Node seguiu a filosofia assíncrona como o Javascript já usav'a no browser, essa foi a primeira inovação que definiu sua identidade. 
Em 2011 foi desenvolvido o npm, gerenciador de pacotes do Node. O npm é a materialização de um sonho da comunidade
Javascript em reutilização de software em larga escala fácil e sem dor de cabeça.

Comparação com outras linguagens

Dentre as vantagens de se utilizar o Node umas delas é o fato
de Javascript ser uma linguagem extremamente difundida, em aplicativos Web é atraente usar a mesma linguagem tanto no back-end como no front-end
Javascript é facil de rodar em qualquer lugar. Seja em um browser em um computador de mesa ou nuim dispositivo móvel.
Claro que nem tudo são flores, pois falta ao Javascript alguns recursos necessários para o desenvolvimento de sistemas
mais 'sérios' como sistemas ERP, já que o Javascript não possui classes poderosas o suficiente para criar novos tipós,com é possível criar com outras linguagens.

Nosso Sistema Web 

Nosso sistema terá uma tarefa simples, porém que englobara vários conceitos. Iremos cadastrar clientes para exibi-los em um site. Usaremos o framework Express e diversos módulos do Node.js além de Banco de Dados Orientado a Documentos.






<p>Instale o express com o comando a seguir:</p>
npm install express-generator -g

<p>Ferramenta geradora de aplicativos, express, para rapidamente criar uma estrutura básica de aplicativo.</p>
express artigo

O epxress generator irá criar uma pasta com o nome artigo(ou o nome que você escolher)
Para acessar a pasta(comandos via prompt do DOS)
cd pasta

Atualizando nossos pacotes
npm i 

Inicializando nossa aplicação
npm start


NODEMON

Um importante pacote que iremos instalar é o nodemon. Com ele não vamos precisar ficar reinicando 
nosso servidor em cada alteração que fizermos em nosso código

Instalar nodemon
npm install nodemon --save

** O atributo --save salva a referencia do nodemons em nosso package.json
com isso qualquer um que baixar nosso projeto ou nos baixarmos em outra máquina por exemplo
quando atualizarmos nossos pacotes com o comando npm install, nosso gerenciador de pacotes já irá saber 
que deve instalar o pacote do nodemon, neste caso.

Comando para inicializar nosso aplicativo

nodemon nome.js

No arquivo package.json podemos configurar nosso script start
para que que com o comando npm start nossa aplicação inicie automaticamente com 
o nodemon
Nosso script start deve ficar assim
 "start": "nodemon ./app"

CONFIGURANDO NOSSO SERVIDOR
Vamos criar uma pasta config e um arquivo server.js
Neste arquivos estarão nossas configurações do servidor express
e modulos de inicialização de nosso sistema

arquivo server.js

const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static( './public'));

module.exports = app

Como podemos ver no código acima com o Express
fica muito fácil configurar nosso servidor para receber
requisições HTTP
Nossa variavel express recebe o modulo express, logo abaixo executamos o módulo 
passando para a varável app
Para finalizar usamos o metódo listen que passa a ouvir nosso servidor na porta desejada,
retornando uma mensagem no nosso console.

APP.JS

Com nosso server criado vamos configurar o app.js
Esse é o arquivo de entrada onde iniciamos nosso sistema

var express = require('express');
var app = require('./config/server')

const PORT = process.env.PORT || 3000

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na ${PORT}`)
})

Como vemos acima basicamente ele recupera nosso server atraves da variavel app
e inicializa nosso servidor na porta desejada.




module.exports = app;



ENGINE DE VIEW
São os mecanismos de modelo para renderizar nossas views com o Express

No nosso caso vamos usar a Engine de View EJS 

Instalando o módulo do ejs:

npm i ejs --save

Devemos configurar nosso mecanismo de visualização

app.set('view engine', 'ejs')

**Após feita essa configuração não precisamos carregar o modulo
o express carrega internamente

Feito isso devemos mostrar ao express onde carregar nossas views

app.set('views', './views')



BODY-PARSER
Dentro do nosso vamos precisar receber as informações vindas da nossa view
Para atualizar nossos dados do model
Para receber essas requisições precisamos instalar o modulo body-parser
Que recebe as informações vindas pela metodo post e faz o tratamento delas

Instalar móudlo

npm install body-parser --save



MÓDULO MULTIPARTY

Para enviar nossos arquivos das nossas views para nosso servidor
vamos precisar do modulo multiparty já que que precisamos usar o atributo 
enctype= multipart/form-data no nosso FORM dos nossos formulários. Este atributo 
básicamente diz para não mexer em nada, ou seja nossos arquivos(imagens) vão chegar com o caminho 
nome, tamanho tudo do jeito que precisamos para salvar.

npm install multiparty --save

Dentro do modelo MVC temos o C de controller
Então criaremos nossa pasta controller na raiz do nosso projeto
E depois criaremos o arqui cadastrarEstadoController.js 

var multiparty = require('multiparty')

module.exports.cadastrarEstado = function( req, res,next){

    var dadosForm = new multiparty.Form()
    dadosForm.parse(req, function(err, campos, arquivos){
      
    })
   
   
    res.send('controler do cadastrar')

}

MONGODB

Agora precisamos persistir nossos dados. Para isso utilizaremos o módulo mongodb nativo,
para fazer a conexão com nosso banco de dados MONGODB
Dentro da pasta config vamos criar o arquivo dbConnection.js para fazer a comunicação com
nosso banco.

Lembrando que nosso servidor precisa estar rodando em nosso sistema operacional

Instalar mongodb

npm install mongodb --save

Arquivo dbConnection.js

var MongoClient = require('mongodb').MongoClient

var db;

exports.connect = async function(callback){

    await MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, function(err, dbConnection){
    if (err) console.log('erro no instanciar mongo')
        console.log('Conectado ao MongoDB')
        db = dbConnection.db('bancoMongoPos')
        callback(err, dbConnection)
    })
}

exports.getDbConnection = function(){
    return db
}

O arquivo dbConnection.js exporta duas funcções a função connect vamos 
inicializar junto ao nosso arquivo app.js e dentro da chamda do metodo connect
vamos inicializar nosso servidor web.

Veja como fica nosso app.js
Lembrando de importar o mongodb

mongo.connect((err, db) => {
  
    app.listen(PORT, () => {
        console.log(`Servidor rodando na ${PORT}`)
    })

})

Assim ao inicializarmos nosso sistema já verificamos nossa conexão com o banco de dados

Avançando mais um pouco

MÓDULO FS 
A maneira de se trabalhar com arquivos externos no node é o uso do file system
Para usar esse módulo temos que importa o ('fs')

STREAM
É uma forma de representar uma sequencia de bits
Podem ser entendidas como coleções de dados, exatamente como Arrays ou Objetos, mas a diferença
é que os dados em uma stream podem não estar todos diponiveis de uma vez, além disso também não precisam 
utilizar memória, ou seja, não é necessário que esses bits sejam armazenados na RAM.
Isso torna as streams ferramentas poderosas para o desenvolvimento em grandes massas de dados, pois
podemos trabalhar em pequenos pedaços(chunks como são chamados) e continuamente sem precisar salvar nada em memória
Outra grande vantagem que ganhamos é a capacidade de podermos enviar o resultado de uma stream direto para outra.
res.send() é um exemplo de stream















