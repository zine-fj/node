const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.static("public"));

// 创建连接池
const pool = mysql.createPool({
  port: "3306",
  host: "localhost",
  user: "root",
  password: "root",
  database: "myselfsql",
  connectionLimit: 10, // 最大连接数量
});

app.get("/api/getUsers", (req, res) => {
  // 在连接池里 拿 一个连接来使用
  pool.getConnection((err, connection) => {
    if (err) {
      console.log("err: ", err);
    }

    connection.query("select * from user", (err, result) => {
      if (err) {
        console.log("err-1: ", err);
      }

      res.send(result);
      // 使用完以后，释放连接
      connection.release();
    });
  });
});

app.listen(8060);

console.log("http://localhost:8060");
