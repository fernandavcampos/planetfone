// importar o mongoose
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/admin', {
    useNewUrlParser :true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Conectado ao Mongodb')
}).catch((err)=>{
    console.log(`Erro: ${err}`)
})