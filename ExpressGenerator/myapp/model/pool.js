const mysql = require("mysql");

// 创建连接池
const pool = mysql.createPool({
  port: "3306",
  host: "localhost",
  user: "root",
  password: "root",
  database: "myselfsql",
  connectionLimit: 10, // 最大连接数量
});

module.exports = pool