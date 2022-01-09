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

connection.query(sql)
connection.end

app.get('/', (req,res) => {
    connection.query(select, function (err, rows, fields) {
        if (err) throw err;
        console.log(rows[0])
        res.end('<h1>Hello Victor</h1> <br> <h2>Nome gravado no BD: ' + Object.values(rows[0]) + '</h2>')
    })    
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})