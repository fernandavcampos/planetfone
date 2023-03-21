//importar o mongoose
const mongoose = require('mongoose');

const Cliente = new mongoose.Schema({
    id:{
        type: Number,
        require:true
    },
    name: {
        type: String,
        require: true
    },

    username:{
        type: String,
        require:true
    },

    email:{
        type: String,
        require:true
    }


});

mongoose.model("cliente", Cliente)