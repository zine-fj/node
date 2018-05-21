const mysql = require('mysql');
// 创建连接池
const pool = mysql.createPool({
    port: '3306',
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'my1000',
    connectionLimit: 10
})

module.exports = pool;