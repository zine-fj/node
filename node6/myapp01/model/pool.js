const mysql = require('mysql');

let pool = mysql.createPool({
    port: '3306',
    host: 'localhost',
    database: 'my1000',
    user: 'root',
    password: 'root',
    connectionLimit: 10
});

module.exports = pool;














