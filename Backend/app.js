//importar os módulos baixados
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//instanciar o express
const app = express();

//setup app
app.use(express.json());
app.use(express.json({extends: true}));
app.use(cors({ origin: "*"}))

//importar as configurações do database
require('./DataBase/db');

// importar o modelo cliente
require('./Models/cliente')
const Cliente = mongoose.model("cliente");

//rota para listar cliente
app.get('https://jsonplaceholder.typicode.com/users/:ids', (req, res)=>{
  Cliente.findFive({_id:req.params.id}).then((cliente)=>{
    res.json(cliente);
  }).catch((err)=>{
    res.json({
      error:true,
      mensagem:`Erro ao consultar o cliente selecionado ${err}`
    });
  });
});

//rota para listar todos
app.get('https://jsonplaceholder.typicode.com/users ', (req, res) =>{
  Cliente.find({}).then((cliente) =>{
    res.json(cliente)
  });
})

//ouvir uma porta para ligar o servidor
app.listen(3000, () =>{
    console.log("Conectado a porta 3000")
})
