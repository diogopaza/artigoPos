const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.set('views', '../views');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static( '../public'));
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');



app.use('/', indexRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000



app.listen(PORT, () => {
    console.log(`Servidor rodando na ${PORT}`)
})


module.exports = app