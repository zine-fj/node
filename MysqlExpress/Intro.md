
## Express
基于 Node.js 平台，快速、开放、极简的 Web 开发框架。 [Express官网](https://www.expressjs.com.cn/)

- 安装
```js
npm init

npm i express
```

### 简单使用
```js
const express = require('express');

// 创建 express 的应用
const app = express();
// 让app使用了一个静态的文件目录，可以不写路由，直接获取
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('hello express')
})

app.listen(8050);
```
## mysql
想让数据库中数据表现在页面上，则需安装mysql插件
```js
npm i mysql
```
### 实现步骤
在 `app.get()` 中写以下代码
1. 创建链接
```js
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'myselfsql',
  port: '3306'
})
```
2. 连接数据库
```js
connection.connect(err => {
  if(err) {
    console.log('连接数据库 失败：', err)
  } else {
    console.log('连接数据库 成功')
  }
})
```
3. 数据库操作
```js
connection.query('select * from user', (err, result) => {
  if (err) {
    console.log('数据库操作 失败：', err)
  } else {
    console.log('数据库操作 成功：', result)
    res.send(result)

  }
})
```
4. 结束连接
```js
connection.end(() => {
  console.log('连接数据库 结束')
})
```
### 连接池
由于以上操作会比较频繁，所以使用连接池更加方便
```js
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
```

## phpstudy
phpStudy是一个PHP调试环境的程序集成包。该程序包集成最新的Apache+PHP+MySQL+phpMyAdmin+ZendOptimizer，一次性安装，无须配置即可使用，是非常方便、好用的PHP调试环境。

下载 [phpstudy](https://www.xp.cn/)

## phpMyAdmin
在 phpstudy 界面有个数据库工具，打开即为 phpMyAdmin 网页版

注：用户名密码均为 root

## 数据库
### 安装 mysql
```js
brew install mysql
```
### 打开数据库
在命令提示符中输入
```js
mysql -u root -p

// 用户名密码均为 root
```

### 数据库简单操作
注：要用 **;** 结尾。
#### 增
```js
// 创建数据库
create database myselfsql;

// 创建表
create table user (  
uid int(4) not null primary key auto_increment, 
username varchar(16) not null, 
password varchar(16) not null);

// 表中插入数据 方法一
insert into user values(1, 'fj', '123');

// 表中插入数据 方法二
insert into user(username, password) values('gx', '222'),('gxx', '333');
```
#### 删
```js
// 删除表
drop table user;

// 删除表中某数据
delete from user where username='gxx';
```
#### 改
```js
update user set password='000000' where username='fj';
```
#### 查
```js
// 显示当前所有数据库
show databases;

// 使用数据库
use myselfsql;

// 显示该数据库中表
show tables;

// 查看表结构
desc user;

// 查看表中数据（全部）
select * from user;

// 查看表中某数据 1
select username from user;

// 查看表中某数据 2
select * from user where uid=1;

// 多表关联查询
select * from cart,product where uid=1 and product.pid=cart.pid;
```

#### 其他
##### 中文乱码
如果插入数据有中文显示不出来时，可在命令行添加以下操作
```js
set character_set_client=gbk;

set character_set_results=gbk;
```

##### 前后端分离
- 前后端不分离  
服务器端渲染：在服务器端已经渲染好了，打开页面就是一个有数据的页面。 

1. 动态页面前后端代码混合在一起。（后端渲染）  
1. 有利于SEO优化。
1. 用户更容易找到你的界面
1. 项目很大时不好维护，且对服务器压力大

- 前后端分离  
客户端渲染：打开页面没有数据，通过ajax，通过循环往里面加字符串  
1. 通过api接口进行数据交互（前端渲染）  
1. 不利于SEO优化
1. 更好维护