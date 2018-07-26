var express = require('express');
var app = require('./config/server')
var bodyParser = require('body-parser')
var mongo = require('./config/dbConnection')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static( './public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000


mongo.connect((err, db) => {

    
    app.listen(PORT, () => {
        console.log(`Servidor rodando na ${PORT}`)
    })

})


module.exports = app;
