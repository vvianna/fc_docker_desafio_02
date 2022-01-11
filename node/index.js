const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Victor')`
const select = `SELECT name FROM people`

app.get('/', (req,res) => {
    connection.query(sql)
    const result = connection.query(select, function (err, result, fields){
        if (err) throw err;
        Object.keys(result).forEach(function(key) {
            var row = result[key];
            console.log(row.name)
    })

    var listaNomes = []
    result.forEach(function(nome, i ){
        listaNomes.push('<li>' + nome.name + '</li>');
    })

    res.send('<h1>Full Cycle Rocks!</h1>'
    + '<h2>- Lista de nomes cadastrada no banco de dados.</h2>'
    + listaNomes.join(""))
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port + '. Somente via NGINX')
    console.log('Acessar via NGINX :  http://localhost:8080')
})