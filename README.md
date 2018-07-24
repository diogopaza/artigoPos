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



