var createError = require('http-errors');
var express = require('express');
var path = require('path'); // 路径
var cookieParser = require('cookie-parser'); // cookie 插件
var logger = require('morgan'); // 日志

var session = require('express-session');

//加载路由配置
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); // 创建应用

// view engine setup(视图引擎设置) //_dirname 当前路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // 视图引擎设置为ejs格式

app.use(logger('dev')); //使用日志插件
app.use(express.json()); //使用post参数插件
app.use(express.urlencoded({ extended: false })); //post参数编码操作设置
app.use(cookieParser()); // 使用cookie插件
app.use(express.static(path.join(__dirname, 'public'))); //静态目录
// 使用session插件
app.use(session({
  secret: '123123', // 生成cookie秘钥(会编码加密)
  name: 'u22', // cookie的名称
  cookie: {maxAge:1000 * 60 * 20}, // cookie过期时间
  resave: true, // 重新保存
  saveUninitialized: true // 自动初始化没有设置过的req.session
}))

// 插件(中间件)使用必须在路由配置之前

// 使用路由配置
app.use('/', indexRouter);
app.use('/users', usersRouter);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
