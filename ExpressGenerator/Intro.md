
## Express生成器
- 安装
```js
npm i express express-generator -g
```
- 创建应用
```js
express myapp (默认使用jade模板,比ejs强大)
express myapp -e (使用ejs模板,实用性高)
```
- 在该应用中安装依赖包
``` js
npm i
```
- 运行(默认端口号:3000)
``` js
npm start 或者 supervisor ./bin/www
```

## ejs模板引擎的嵌套常见语法
有时候编辑器报错但仍能执行、注释的内容无用，仍能执行。
1. js表达式直接写在开始符和结束符里面。
``` js
<% for(let i=0; i < 10; i++) { %>
    //content
<% } %>
```
2. 数据需要在前面加 '='。
``` js
<%= title %>
```
3. html的解析在前面加 '-'。
``` js
// 默认情况下不能执行脚本语言(js),但是特殊情况时可以用
// 路由js中: 
 res.render('index', {title: 'Express hello',htmlStr:"<a href='javascript:alert(1);'>点击</a>"})
// 页面ejs中: 
<%- htmlStr %>
```
4. 开始符和结束符内都不可以嵌套。
``` js
// 以下写法错误:
<% for(let i=0; i < 10; i++) {
    //content
 } %>
```
5. 可以通过 include 模板名 加载其他模板。
``` js
// 在views中创建公用的public.ejs文件,则在需要用时可以:
<% include public %>
```
