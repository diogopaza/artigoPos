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






module.exports = app;
