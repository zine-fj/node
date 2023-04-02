
## 跨域
基本是谁做服务器就让谁解决，让后端解决。

### jsonp
1. 只有jsonp的接口，才能通过jsonp去调用
1. 要返回一个函数调用才可以

例如：https://www.baidu.com/sugrec?prod=pc&wd=1&cb=callback

```js
let oScript = document.createElement('script');  
let url = 'http://localhost:8060/api/productData';  
oScript.src = 'url?cb=callback';  

function callback(data) {  
    console.log(data);  
    var str = '';  
    data.forEach((ele,index)=>{  
        str += `<li>${ele.name}</li>` 
    });  
    oList.innerHTML = str;  
}  
```
### 后端允许跨域

```js
res.setHeader('Access-Control-Allow-Origin', '*')
```

### 服务器代理请求
ajax受同源策略限制，但是服务器端不受其限制
1. 在页面中写需要请求的地址
```js
// getLoho88Data 可以随便命名，只是为了服务端判断，然后服务端根据判断，去进行允许 原网址跨域
http://localhost:8060/getLoho88Data
```
2. 在服务端判断地址
```js
urlObj.pathname === "/getLoho88Data"
```
3. 通过 http.get 获取数据
```js
// 此时地址为真实获取数据地址（需要解决的跨域地址）
let url = 'http://lh5.loho88.com/lh5/index/getLohoIndex'
http.get(url, function(response) {
  let resData = '';
  response.on('data', function(chunk) {
    resData += chunk;
  })
  response.on('end', function() {
    res.write(resData);
    res.end();
  })
})
```