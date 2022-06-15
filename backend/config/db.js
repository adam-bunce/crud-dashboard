const mysql = require('mysql')
require('dotenv').config()


config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASENAME
}

let connection = mysql.createConnection(config)

connection.connect(function(err) {
    if (err) {
        console.log(err)
    }
    else{
        console.log("connected to MySQL DB")
    }
})


module.exports = {connection: mysql.createConnection(config)}
