let express = require('express');
let mysql = require('mysql')

let app = express()
app.use(express.static('public'))

app.get('/getUsers',(req,res)=>{
    // 创建连接
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'myEnd',
        port: '3306'
    })
    // 连接数据库
    connection.connect(function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('success')
        }
    })
    // 数据库操作
    connection.query('select * from user',function(err,results) {
        console.log(results)
        res.send(results);
        res.end()
    })

    connection.end(function() {
        console.log('connection end')
    })

   
})

app.listen(5050)
console.log('server running at 5050')