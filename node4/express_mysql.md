## express  
初始化当前文件夹：
``` shell
npm init
```  
安装express：
``` shell
yarn add express
```  
---
## 想让数据库中数据表现在页面上，则需安装mysql插件
 安装mysql：
 ``` shell
 yarn add mysql
 ``` 
###### (注意：本项目中没安装express，若下载后可自行安装执行)
在server文件中引入mysql,然后操作如下


1. 创建连接  
``` shell    
    let connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'my1000',
        port:'3306'
    })
```  
2. 连接数据库
``` shell  
    connection.connect((err)=>{
        if(err) {
            console.log(err)
        } else {
            console.log('success')
        }
    });
```  
3. 数据库操作
``` shell
    connection.query('select * from user',(err,results)=>{
        res.send(results);
    });
```      
4. 结束连接  
``` shell
    connection.end(()=>{
        console.log('connection end')
    });
``` 
