const express = require('express')
const bodyParsee = require('body-parser')
const app = express();

const userRouter = require('./src/routes/userRoute')
app.user(userRouter);

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url = 'mongodb://localhost:27017/Fatec'
const mongoDB = url;
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console,'Erro ao conectar ao MongoDb'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// mongodb://localhost:27017/

app.listen(3000, ()=>{
    console.log("Servidor em execução na porta 3000")
})