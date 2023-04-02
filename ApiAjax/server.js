const http = require("http");
const fs = require('fs')
const url = require('url')

const Product = require("./model/product");
const Car = require("./model/car");

http
  .createServer((req, res) => {
    // res.setHeader('content-type','text/heml;charset=UTF-8');

    res.setHeader('Access-Control-Allow-Origin', '*')

    let urlObj = url.parse(req.url,true);
    
    if (urlObj.pathname !== "/favicon.ico") {

    console.log('pathname: ', urlObj.pathname)

      if (urlObj.pathname === "/api/product") {
        let myPro = new Product();
        res.write(JSON.stringify(myPro.productListData()));
        res.end();
      } else if (urlObj.pathname === "/api/car") {
        let myCar = new Car();
        res.write(JSON.stringify(myCar.carListData()));
        res.end();
      } else if (urlObj.pathname === "/views/list") {
        fs.readFile('./views/list.html', function(err, data) {
          // console.log('data: ', data)
          res.write(data);
          res.end()
        })
      } else if (urlObj.pathname === "/getLoho88Data") {
        http.get('http://lh5.loho88.com/lh5/index/getLohoIndex', function(response) {
          let resData = '';
          response.on('data', function(chunk) {
            resData += chunk;
          })
          response.on('end', function() {
            res.write(resData);
            res.end();
          })
        })
      }
    }
  })
  .listen(8060);

console.log("http://localhost:8060");
