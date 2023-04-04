
## HTTP 超文本传输协议
HTTP 是基于请求-响应形式，短连接，无状态的协议

## Socket
Socket 连接属于请求-响应形式，长连接，理论上客户端和服务器端一旦建立连接将不会主动断开此连接。服务端可主动将消息推送给客户端。

1. Html5的websocket技术，兼容部分浏览器
1. Socket.io 基于websoket的封装，兼容各个浏览器

### 用法
- 安装
```js
// 注意此时用的是 2.1.1 版本
npm i socket.io
```
- 创建 web 网络服务 用来响应资源请求
```js
const express = require('express')
const { Socket } = require('socket.io')

const app = express()

app.use(express.static('public'))

app.listen(8010, function() {
  console.log('server run at http://192.168.199.135:8010')
})
```
- 服务端 socket
```js
var io = require('socket.io').listen(8020);

// 建立连接
io.on('connection', function(socket) {
  // 服务端 接收 客户端发的消息
  socket.on('message', function(data) {
    // 广播出去
    socket.broadcast.send(data)
  })
})
```
- 客户端 socket
```html
<script src="js/socket.io.js"></script>
<script>
  let socket = io.connect('http://192.168.199.135:8020')

  // 客户端 接收 服务端的消息
  socket.on('message', function(data) {
    console.log(data)
  })
</script>
```

- 获取IP地址
```js
socket.client.conn.remoteAddress
```

- 触发事件
```js
// 客户端
nameBtn.click(function () {
  socket.emit("changeName", newName);
});
// 服务端
socket.on("changeName", function (newName) {
  // todo
})
```