const mysql = require('mysql')

const pool = mysql.createPool({
  port: '3306',
  database: 'myselfsql',
  host: 'localhost',
  user: 'root',
  password: 'root',
  connectionLimit: 10
})

module.exports = pool;