const express = require('express')
const bodyParsee = require('body-parser')
const app = express();

app.listen(3000, ()=>{
    console.log("Servidor em execução na porta 3000")
})