const express = require("express");
const { Socket } = require("socket.io");

const app = express();

app.use(express.static("public"));

app.listen(8010, function () {
  console.log("server run at http://192.168.199.135");
});

// 服务端 Socket
var io = require("socket.io").listen(8020);
let users = {};
let index = 0;

// 建立连接
io.on("connection", function (socket) {
  // socket.send('欢迎光临 socket 服务端')
  let ip = socket.client.conn.remoteAddress;
  // 用户首次链接
  if (!users[ip]) {
    index++;
    users[ip] = {
      name: "萌新" + index,
    };
  }

  // 服务端 接收 客户端发的消息
  socket.on("message", function (data) {
    console.log("接收客户端发的消息：", data, " IP: ", ip);
    // 广播出去
    // socket.broadcast.send({
    //   userInfo: users[ip],
    //   msg: data,
    // });

    // 敏感词过滤
    if (data.indexOf("色") == -1) {
      socket.broadcast.send({
        userInfo: users[ip],
        msg: data,
      });
    } else {
      socket.broadcast.send({
        userInfo: {
          name: "系统消息：",
        },
        msg: "error: 聊天内容 不能输入敏感字",
      });
    }
  });

  // 服务端 监听 改名事件
  socket.on("changeName", function (newName) {
    // users[ip].name = newName;

    // 敏感词过滤
    if (newName.indexOf("色") == -1) {
      users[ip].name = newName;
    } else {
      socket.broadcast.send({
        userInfo: {
          name: "系统消息：",
        },
        msg: "error: 修改昵称 不能输入敏感字",
      });
    }
  });
});
