let http = require('http');

let fs = require('fs');
http.createServer((req,res)=>{
    // 读取HTML文件
    fs.readFile('./views/1.html',(err,data)=>{
        if(err) throw err;
        res.write(data); //输出到前端
        res.end();
    });
    // 写文件
    fs.writeFile('./views/1.txt','fs write 写入内容',(err)=>{
        console.log(err)
    })
    
}).listen(8030);

console.log("server run at http://localhost:8030");


