let http = require('http');  //commonjs规范 (node自带模块)
// ./ 当前目录下,不加 ./ 默认查找自认模块
let Product = require('./model/product');

let myPro = new Product();
//模块化开发的思想:功能拆分 => 结构清晰 => 工作分工
//服务器作用:响应用户请求
http.createServer((req,res)=>{
    //req 请求
    //res 响应
    console.log(req.url);
    res.write(JSON.stringify(myPro.getListData()));
    res.end();
}).listen(8020);

console.log("server run at http://localhost:8020");






















