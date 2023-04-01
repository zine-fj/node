

// 最简单的一个node实例
// const http = require('http'); // commonjs规范

// http.createServer((req, res) => {
//   res.write('hello node111');
//   res.end(); 
// }).listen(8060)


// 引入模块化
const http = require('http'); // commonjs规范

const Product = require('./model/product');
const myPro = new Product();
console.log(myPro.getListData())

http.createServer((req, res) => {
  // 输出必须是一个字符串  
  let strData = JSON.stringify(myPro.getListData())
  res.write(strData);
  res.end(); 
}).listen(8060)

console.log('server run at http://localhost:8060')  