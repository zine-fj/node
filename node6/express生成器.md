## express生成器
###### (注意：本项目中没安装express等依赖包，若下载后可自行安装执行)

###### 此生成器 前后端不分离，用的这种模板引擎方式，有利于搜索引擎优化(PC端大部分前后端未分离)

#### 简单教程
具体教程可参考官网:express。
1. 安装: 
``` shell
// 局部安装(必要时可先安装express)
yarn add express-generator 或者 npm i express-generator
// 全局安装
yarn global add express express-generator 或者 npm i express-generator -g
```
2. 创建应用。
``` shell
express myapp (默认使用jade模板,比ejs强大)
express myapp -e (使用ejs模板,实用性高)
```
3. 在该应用中安装依赖包。
``` shell
npm i 或者 yarn
```
4. 开始执行(默认端口号:3000)。
``` shell
npm start 或者 supervisor ./bin/www
```
#### 创建的应用中各个文件夹的含义  
1. bin,启动文件。
2. node_modules,安装的依赖包。
3. public,静态文件，可在里面添加页面。
4. routes,路由文件。
5. views,路由对应渲染的页面。

#### ejs模板引擎的嵌套常见语法
有时候编辑器报错但仍能执行、注释的内容无用，仍能执行。
1. js表达式直接写在开始符和结束符里面。
``` shell
<% for(let i=0; i < 10; i++) { %>
    //content
<% } %>
```
2. 数据需要在前面加 '='。
``` shell
<%= title %>
```
3. html的解析在前面加 '-'。
``` shell
// 默认情况下不能执行脚本语言(js),但是特殊情况时可以用
// 路由js中: 
 res.render('index', {title: 'Express hello',htmlStr:"<a href='javascript:alert(1);'>点击</a>"})
// 页面ejs中: 
<%-htmlStr %>
```
4. 开始符和结束符内都不可以嵌套。
``` shell
// 以下写法错误:
<% for(let i=0; i < 10; i++) {
    //content
 } %>
```
5. 可以通过 include 模板名 加载其他模板。
``` shell
// 在views中创建公用的public.ejs文件,则在需要用时可以:
<% include public %>
```