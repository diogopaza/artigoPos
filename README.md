<h1>Artigo final Pós Graduação WEBDEV Alfa </h1>
<h2>Estudo Tecnólogico e Desenvolvimento FULL-STACK JAVASCRIPT com NODE.js um  um Sistema WEB</h2>



NodeJS uma breve história 

Em 2009 o Node.js foi desenvolvido por Ryan Dahl em torno do motor V8, essencialmente
como uma forma de rodar programas javascript fora do contexto de um browser.
O Node não foi o primeiro software do gênero o Rhino já era bastante utilizado e a própria Netscap tinha lançado 
o Enterprise Server no meio da década de 90.
Para rodar fora do navegador é preciso oferecer APIs(conjunto de rotinas e padrões de programação para acesso a um aplicativo) para interagir com o sitema - manipular arquivos e conexões de rede, por exemplo. O Node seguiu a filosofia assíncrona como o Javascript já usava no browser, essa foi a primeira inovação que definiu sua identidade. 


V8
O V8 é o engine(motor) Javascript criado pela Google escrito em C++ para ser usado no browser Chrome. Em 2008 a Google tornou o V8 open source e passou a chamá-lo de Chromium project. Essa mudança possibilitou que a comunidade entendesse como o javascript é interpretado e compilado por essa.

NPM( Node Package Manager)
Em 2011 foi desenvolvido o npm, gerenciador de pacotes do Node. O npm é a materialização de um sonho da comunidade
Javascript em reutilização de software em larga escala fácil e sem dor de cabeça.
Com certeza o npm é uma das grandes forças do Node.js, pois muitas linguagens tentaram e não conseguiram o Node resolveu com o npm:
um sistema fácil de usar;
fácil de colaborar;
e não cria problemas;

Um aspecto fundamental do npm é que por padrão os pacotes são instalados na pasta corrente, se você tiver 50 aplicativos diferentes pode instalar as depêndencias de cada um em sua própria pasta, mesmo que cada aplicativo exija uma versão diferente de um mesmo módulo de terceiros, não haverá conflitos. 



Comparação com outras linguagens

Dentre as vantagens de se utilizar o Node umas delas é o fato
de Javascript ser uma linguagem extremamente difundida, em aplicativos Web é atraente usar a mesma linguagem tanto no back-end como no front-end
Javascript é facil de rodar em qualquer lugar. Seja em um browser em um computador de mesa ou em um dispositivo móvel.
Claro que nem tudo são flores, pois falta ao Javascript alguns recursos necessários para o desenvolvimento de sistemas
mais 'sérios' como sistemas ERP(), já que o Javascript não possui classes poderosas o suficiente para criar novos tipos,com é possível criar com outras linguagens.
A grande desvantagem do Javascript é ser uma linguagem interpretada oque coloca ela em desvantagem quando comparada com linguagens compiladas, pois cada linha de código precisa ser interpretada enquanto o código é executado. Com o Node o V8 compila o código para linguagem de máquina que otimiza drasticamente a execução usando heurísticas, permitindo que a execução seja feito em código compilado e não interpretado.
E a grande vantagem a escabilidade visto que o node.js é single-thread, diferente de outras linguagnes que cada conexão nova cria uma thread que potencialmente tem axedo a ela 2MB ou seja em um servidor com 8GB de RAM você terá um limite fisíco de 4.000 conexões e caso sua aplicação necessite aumentar você vai precisar adicionar mais e mais servidores. 


Continuando nossos estudos do Node.js

Grande parte das características e principalmente das vantagens do Node.js se devem ao funcionamento do seu loop single-thread principal e como ele se relaciona com as demais partes do Node.
A maioria dos backends por trás dos websites mais famosos não fazem computação complicada.A maior parte das operações são de leitura e escrita em disco, ou seja esperando sua vez de ler e escrever no disco.  Processar dados ou seja executar algoritimos é algo extremamente mais rápido do qualquer operação IO(Input & Output). Por exemplo ao executar um ping no site do google.com, um dos mais rápidos sites do mundo em tempo deresposta a latência méida é de 37ms, daria para executar cerca de 80 milhoes de operações em uma CPU,  ou seja enquanto fazemos uma chamada para a internet poderiamos fazer 80 milhões de coisas.
Por exemplo ao ler um arquivo em Java estamos efetuando uma operação bloqueante, seu programa não pode fazer mais nada exceto esperar a comunicação com rede ou disco terminar.Para resolver esse problema o Node.js usa um princípio semelhante ao setTimeout(func, x) do Javascript, onde a função passada como primeiro parâmetro é delegada para outra thread executar apos x milisegundos, liberando a thread principal para continuar seu fluxo de execução

Node.js Event Loop
Event Loop é o nome que se da ao ciclo de eventos que acontece infinitamente enquanto há callbacks e eventos sendo processados na aplicação.

Arquitetura baseado em eventos de I/O assíncrono não bloqueante

Nenhuma operação de I/O irá interromper o fluxo do thread principal. Ou seja todas as requisições serão executadas e nenhuma delas será capaz de interromper o processamento de outras. Não bloqueante no nosso caso é sinônimo de assíncrono. 
Essa é a característica que torna ao Node.js tão poderoso, trabalhar de forma não bloqueante facilita a execução paralela e o aproveitmento de recursos.
Em linguagens como PHP por exemplo para realizarmos uma operação matemática, ler um arquivo de disco e transformar o resultado em uma String, cada ação será executada apenas depois que a ação anterior for encerrada. No Node.js nós temos funções que são passadas por parâmetro para serem chamadas quando a ação é é finalizada. Essas funções são chamadas de callbacks.
Oque o node.js faz é criar um laço onde toda e qualquer operação assíncrona de entrada e saída gera um evento. Cada chamada a uma função externa ao thread principal pendura uma função de callback neste laço. Assim que o evento ocorre o callback correspondente é chamado.



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
Para trabalhar com Node.js e streams basicamente você deve ler um arquivo, imagem e gravar esses dados em uma variavel, depois cria uma outra varável que irá receber esses dados, essa stream. E por último é só criar a stream.


A API FETCH
A API Fetch fornece uma interface Javascript para acessar e manipular partes do pipeline HTTP, tais como pedidos e repostas. Ele também fornece o método global fetch().
Este tipo de funcionalidade era feita anteriormente utilizando o XMLHttpRequest.

Express-Session

Para registrar e efutar login de nossos usuário vamos usar o módulo express-session

Middlewares no express

Middleware é todo tipo de função que está entre um pedido HTTP e a resposta final que o servidor envia de volta para o cliente. Ao o conceito de interceptar requisições damos o nome de middleware.
Middlewares no node são funções que podem tratar os inputs e outputs das rotas antes e depois que uma rota é processada
Para invocar novos middlewares no express usamos a função use
Lembrando que a ordem que o middleware é chamado tem importância, caso você injete uma middleware na ordem errada, sua aplicação pode não responder corretamente e até parar de processador a rota corretamente.




importar o modulo express-session
O módulo express é um middleware ou seja precisamos seta-lo para o nosso
framework faça seu uso









