const mysql = require('mysql');

const pool = mysql.createPool({
    prot: '3306',
    database: 'my1000',
    host: 'localhost',
    user: 'root',
    password: 'root',
    connectionLimit: 10
})

module.exports = pool;














