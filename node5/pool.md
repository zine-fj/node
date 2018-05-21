## 连接池

###### (注意：本项目中没安装express等插件，若下载后可自行安装执行)

创建连接池
``` shell
const pool = mysql.createPool({
    port: '3306',
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'my1000',
    connectionLimit: 10
})
```
在连接池里拿一个连接用
``` shell 
pool.getConnection((err,connection)=>{
    if(err) {
        console.log(err)
    };
    // 数据库操作
    connection.query('select * from user',(err,results)=>{
        if(err) {
            console.log(err)
        };
        res.send(results);
        // 使用完后,释放连接
        connection.release();
    })
})
```

### 前后端分离
1. 前后端不分离：动态页面前后端代码混合在一起。
2. 前后端分离：通过api接口进行数据交互。




















