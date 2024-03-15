const mysql = require('mysql');

const conecta = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dblist'
})

conecta.connect((err) => {
    if (err){
        console.log("Erro ao conectar ao banco de dados", err);
        return;
    }
    console.log('Banco conectado com sucesso!');
})

module.exports = conecta;