<h1>Artigo final Pós Graduação WEBDEV Alfa </h1>

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



