const http = require("http");
const fs = require("fs");
const url = require("url");
const queryString = require('querystring')

http
  .createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {
      const urlObj = url.parse(req.url, true); // 格式化url字符串
      console.log("urlObj: ", urlObj);

      if (urlObj.pathname === "/views/login.html") {
        console.log("methods: ", req.method);

        if (req.method === "POST") {
          let data = "";
          req.on("data", function (chunk) {
            data += chunk;
          });
          req.on("end", function () {
            let postData = queryString.parse(data)
            loginFn(postData)
          });
        } else if (req.method === "GET") {
          loginFn(urlObj.query)
        }

        function loginFn(params) {
          const { username, password } = params;
          if (username === "admin" && password === "123") {
            res.write("login suc");
            res.end();
          } else {
            fs.readFile("./views/login.html", function (err, data) {
              if (err) throw err;
              res.write(data);
              res.end();
            });
          }
        }


      } else {
        res.write("404 not found");
        res.end();
      }
    }
  })
  .listen(8060);

console.log("server run at http://localhost:8060");
