## 登录和注册

### 登录
判断输入的用户名和数据库进行对比
1. 如果有该用户名，比较密码
1. 如果密码正确，登录成功
1. 如果密码错误，登录失败
1. 如果没有该用户名，提示用户不存在
```js
conn.query(`select * from user where username='${username}'`, (err, result)=> {
  // todo
})
```

### 注册
判断该用户名是否占用
1. 如果占用，提示用户名已存在
1. 如果没有占用，注册
```js
 conn.query(`insert into user(username, password) values('${username}', '${password}')`, (err, result) => {
  // todo
 })
```

## express-session
浏览器cookie与服务器session的链接
1. 安装
```js
npm i express-session
```
2. 配置插件
app.js中，中间件使用要在路由之前
```js
var session = require('express-session');

var session = require('express-session');
  app.use(session({
  secret: '123123', // 生成cookie秘钥(会编码加密)
  name: 'u22', // cookie的名称
  cookie: {maxAge:1000 * 60 * 20}, // cookie过期时间
  resave: true, // 重新保存
  saveUninitialized: true // 自动初始化没有设置过的req.session
}))
```

3. 登录成功时，保存该cookie信息到session中，并在路由中获取
```js
// 保存用户信息(其中user名字可以随便起)
req.session.user = results[0];
```
4. 在首页获取 req.session，查询用户信息
```js
let username;
if(req.session.user) { // 有user信息证明用户登录了
    username = req.session.user.username;
}
```
注：个人登录时会保存cookie在自己电脑中，所以当同样连接发给别人时，别人电脑没有该cookie信息，所以需要重新登录