const http = require('http');
const url = require('url');
const fs = require('fs');
// 数据接口实现
const Product = require('./model/product');
const Cart = require('./model/cart')

http.createServer((req,res)=>{ //res是给自己前端的响应
    if(req.url != '/favicon.ico') {
        console.log(req.url);
        let urlObj = url.parse(req.url,true);
        if(urlObj.pathname == '/api/productData') {
            let myPro = new Product();
            res.write(JSON.stringify(myPro.getListData()));
            res.end()
        } else if (urlObj.pathname == '/api/cartData') {
            let myCart = new Cart();
            res.write(JSON.stringify(myCart.getListData()));
            res.end()
        } else if (urlObj.pathname == '/views/list.html') {
            fs.readFile('./views/list.html',(err,data)=>{
                if (err) throw err;
                res.write(data);
                res.end();
            })
        } else if (urlObj.pathname == '/loho88/search/') {
            // 帮前端代理请求数据
            http.get('http://m.loho88.com/search/?e=222&page=1',(response)=>{ //别人给我服务器的响应
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








