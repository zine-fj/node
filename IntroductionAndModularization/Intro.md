
# 简介和模块化
## nodejs
Nodejs是一个JavaScript的运行环境。实际上是对Google v8引擎进行了封装。v8引擎执行JavaScript速度非常快、性能好
Nodejs使用事件驱动，非阻塞I/O模型而得以轻量和高效，非常适合在分布式设备上运行数据密集型的实时应用

I/O：输入输出
### 特点
1. 使用js编写服务器端程序
1. 单线程、异步、事件驱动
1. 处理速度快，但内消耗多


## 如何运行
- 创建一个网络服务 server.js
```js
const http = require('http');

http.createServer((req, res) => {
  res.write('hello node');
  res.end(); 
}).listen(8060)
```
- 执行
```js
node server.js
```
- supervisor
由于每次node修改都需要重新运行，所以使用 supervisor
```js
npm i supervisor -g

// 运行
supervisor server
```

## why node
1. 使用js（前后端交互更友好）
1. 优秀包管理系统NPM（解决了依赖地狱）
1. 更好的使用前端开发工具（webpack，gulp...）
1. 现金的设计理念，异步化模型（更好的性能）

## npm
npm 是nodejs的包管理工具，是世界上最大的开放源代码的生态系统  

## 模块化
### cmd
同步，运行在服务端，很快

### amd
异步