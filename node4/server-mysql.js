const express = require('express');
const mysql = require('mysql');
//创建express的应用
const app = express();

// 让app使用了一个静态的文件目录
app.use(express.static('public'));

app.get('/api/getUsers',(req,res)=>{

    // 1、创建连接
    let connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'my1000',
        port:'3306'
    })
    // 2、连接数据库
    connection.connect((err)=>{
        if(err) {
            console.log(err)
        } else {
            console.log('success')
        }
    });
    // 3、数据库操作
    connection.query('select * from user',(err,results)=>{
        res.send(results);
    });
    // 4、结束连接
    connection.end(()=>{
        console.log('connection end')
    });

})
app.listen(8050);
console.log('server runing at 8050');









