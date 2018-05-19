let http = require('http');

let fs = require('fs');
http.createServer((req, res) => {


    if (req.url != '/favicon.ico') {
        console.log(req.url);

        // 写法二 (可控性不强，推荐用写法一)
        // fs.readFile('.'+req.url,(err,data)=>{
        //     if(err) {
        //         res.write('404'); //输出到前端
        //         res.end();
        //         console.log(err); //打印到后台
        //     }
        //     res.write(data);
        //     res.end();
        // });
        
        // 写法一
        // 路由，判断用户请求的url，输出对应内容
        if (req.url == '/views/detail.html') {
            // 读取HTML文件
            fs.readFile('./views/detail.html', (err, data) => {
                if (err) throw err;
                res.write(data); //输出到前端
                res.end();
            });
        } else if (req.url == '/views/list.html') {
            // 读取HTML文件
            fs.readFile('./views/list.html', (err, data) => {
                if (err) throw err;
                res.write(data); //输出到前端
                res.end();
            });
        } else {
            res.write('404');
            res.end();
        }

    }


}).listen(8030);

console.log("server run at http://localhost:8030");