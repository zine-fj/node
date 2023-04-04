const express = require('express')
const mysql = require('mysql')

const app = express();

app.use(express.static('public'))

app.get('/api/getUsers', (req, res)=> {
  // 创建链接
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'myselfsql',
    port: '3306'
  })
  // 连接数据库
  connection.connect(err => {
    if(err) {
      console.log('连接数据库 失败：', err)
    } else {
      console.log('连接数据库 成功')
    }
  })
  // 数据库操作
  connection.query('select * from user', (err, result) => {
    if (err) {
      console.log('数据库操作 失败：', err)
    } else {
      console.log('数据库操作 成功：', result)
      res.send(result)

    }
  })
  // 结束连接
  connection.end(() => {
    console.log('连接数据库 结束')
  })
})

app.listen(8060)

console.log('http://localhost:8060')