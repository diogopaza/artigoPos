var express = require('express');

var bodyParser = require('body-parser')
var mongo = require('./config/dbConnection')
var expressSession = require( 'express-session')
var app = require('./config/server')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(expressSession({
    
        secret:'asfafadsfads',
        resave:false,
        saveUninitialized:false
    
    }))

app.use('/', indexRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000
mydir = __dirname
console.log(mydir)

app.use( express.static( 'public'));


console.log(__dirname)
mongo.connect((err, db) => {

    
    app.listen(PORT, () => {
        console.log(`Servidor rodando na ${PORT}`)
    })

})


module.exports = app;
