## 登录 注册
###### (注意：本项目中没安装express等依赖包，若下载后可自行安装执行。)
###### (在node7中安装experss、express-gennerator；在myapp中需安装所有依赖包，另需安装mysql、express-session)
登录注册的详细内容请看代码。大致思路为(一般写在user的模板中):  
1. 登录时查询数据库，判断是否有该用户，有则登录成功，没有则登录失败。一般通过返回msgCode数字来说明登录状态。
``` shell
    // 查询用户
    `select * from user where username='${username}'`
    // 其中返回的results[0].password。代表输入的密码
```
2. 注册时首先要查询数据库，判断是否已经存在要注册的用户名，若已经存在则提示用户名已存在，若没有则开始注册，并在数据库中插入注册内容。一般也通过返回msgCode数字说明注册状态。
``` shell
    // 查询用户
    `select * from user where username = '${username}'`
    // 将注册内容插入数据库
    `insert into user(username,password) values('${username}','${password}')`
```

## express-session
浏览器cookie与服务器session的链接。
1. 安装。
``` shell
    yarn add express-session
```
2. 配置插件(app.js中，注意：中间件使用要在路由之前!)。
``` shell
    var session = require('express-session');

    app.use(session({
    secret: '123123', // 生成cookie秘钥(会编码加密)
    name: 'u22', // cookie的名称
    cookie: {maxAge:1000 * 60 * 20}, // cookie过期时间
    resave: true, // 重新保存
    saveUninitialized: true // 自动初始化没有设置过的req.session
    }))
```
3. 在登录成功的时候保存该cookie信息到session中，并在路由中获取。
``` shell
    // 注意要接收 req 参数(user.js中)
    // 保存用户信息(其中user名字可以随便起),要在回调函数[res]之前
    req.session.user = results[0];
```
4. 在首页的时候获取req.session，查询用户信息
``` shell
    let username;
    if(req.session.user) { //有user信息证明用户登录了
        username = req.session.user.username;
    }
```
注：个人登录时会保存cookie在自己电脑中，所以当同样连接发给别人时，别人电脑没有该cookie信息，所以需要重新登录







