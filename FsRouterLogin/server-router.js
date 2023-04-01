const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {
      console.log("req.url: ", req.url);

      // 方法一
      // if (req.url === "/views/list.html") {
      //   fs.readFile("./views/list.html", function (err, data) {
      //     if (err) throw err;
      //     res.write(data);
      //     res.end();
      //   });
      // } else if (req.url === "/views/detail.html") {
      //   fs.readFile("./views/detail.html", function (err, data) {
      //     if (err) throw err;
      //     res.write(data);
      //     res.end();
      //   });
      // } else {
      //   res.write('404 not found')
      //   res.end()
      // }

      // 方法二
      fs.readFile('.' + req.url, function(err, data) {
        if (err) {
          res.write('404 not font')
          res.end()
        }
        res.write(data);
        res.end();
      })


    }
  })
  .listen(8060);

console.log("server run at http://localhost:8060");
