## fs

读写功能

```js
// 异步
fs.readFile(url,(err,data)=>{
    回调
})
// 同步
let data = fs.readFileSync(url)

fs.writeFile(url,写入的内容,(err)=>{})
```

### Chrome页面的json文件乱码
``` shell
res.setHeader('content-type','text/heml;charset=UTF-8');
```
加上之后会导致fs读取文件失败，会读取整个HTML页面

## router

路由功能。根据 req.url 判断地址

路由的实质：响应用户请求，给用户想要的内容（解析 url 输出相应内容）

## url
```js
 // 格式化url字符串
const urlObj = url.parse(req.url, true);
if (urlObj.pathname === "/views/login.html") {
  // todo
}
```
### get

1. 引入 node 提供的 url 对象

```js
let url = require("url");
```

2. 使用 url.parse 格式化 request.url 得到 url 对象

```js
let urlObj = url.parse(req.url, true);

let getData = urlObj.query;
```

### post

因为 post 的参数是单独发送的，所以需要通过 req.on('data', callback) 来监听

1. 定义空字符串接收数据

```js
let post = "";
```

2. 当使用 post 方式传参时，把参数拼接起来

```js
req.on("data", function (chunk) {
  post += chunk;
});
```

3. 当参数发送结束，打印 post 参数

```js
req.on("end", function () {
  console.log(post);
});
```

4. 通过 node 的 querystring 对象格式化字符串参数

```js
let queryString = require("querystring");

req.on("end", function () {
  console.log(queryString.parse(data));
});
```
