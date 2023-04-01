
const http = require('http');
const fs = require('fs')

http.createServer(function(req, res) {

  // 读取文件
  fs.readFile('./views/1.html', function(err, data) {
    if(err) throw err;
    res.write(data)
    res.end()
  })
  // 写文件
  fs.writeFile('./views/1.txt', 'fs writeFile 写入内容', function(err) {
    console.log('写：', err)
  })

  
}).listen(8060)

console.log('server run at http://localhost:8060')