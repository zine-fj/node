const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req,res)=>{ //res是给自己前端的响应
    if(req.url != '/favicon.ico') {
        console.log(req.url);
        let urlObj = url.parse(req.url,true);
        if(urlObj.pathname == '/movie') {
            fs.readFile('./views/movie.html',(err,data)=>{
                if(err) throw err;
                res.write(data);
                res.end()
            })
        }else if (urlObj.pathname == '/movie/api') {
            // 帮前端代理请求数据
            http.get('http://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290',(response)=>{ //别人给我服务器的响应
                let data = '';
                response.on('data',(chunk)=>{
                    data += chunk;
                });
                response.on('end',(chunk)=>{
                    console.log(data)
                    res.write(data); //把loho88的数据给自己的前端
                    res.end();
                })
            })
        } else {
            res.write('404 没找到');
            res.end();
        }
    }

}).listen(8040);

console.log('server runing at 8040');








