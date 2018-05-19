const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
http.createServer((req, res) => {

    if (req.url != '/favicon.ico') {
        console.log(url.parse(req.url,true));
        let urlObj = url.parse(req.url,true); //格式化url字符串 =>{pathname:"",query:{}}
        if (urlObj.pathname == '/views/login.html') {
            if(req.method == 'POST') {
                let data = '';
                //当post方式传参时候
                req.on('data',(chunk)=>{
                    data += chunk; //参数传递有可能通过碎片的方式传递
                });
                // 当post方式传参结束
                req.on('end',()=>{
                    let postData = querystring.parse(data); //格式化参数，字符串转对象
                    console.log(postData);
                    testLogin(postData); //调用检测登录的方法,post的参数
                });
            } else {
                testLogin(urlObj.query); //调用检测登录的方法,get的参数
            }
            // 检测登录方法
            function testLogin(params) {
                const {username,password} = params; //解构赋值,拿到用户名 密码
                if(username == 'admin' && password == '123') { //判断用户名密码是否正确
                    res.write('登录成功');
                    res.end();
                } else {
                    // 读取HTML文件
                    fs.readFile('./views/login.html', (err, data) => {
                        if (err) throw err;
                        res.write(data); //输出到前端
                        res.end();
                    });
                }
            }
            
        } else {
            res.write('404');
            res.end();
        }

    }


}).listen(8030);

console.log("server run at http://localhost:8030");