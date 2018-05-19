## 文件读写(fs)  

### 读文件
 异步 
``` shell 
fs.readFile(url,(err,data)=>{
    回调
})
```
 同步  
``` shell
let data = fs.readFileSync(url)
```
###  写入文件
``` shell
fs.writeFile(url,写入的内容,(err)=>{})
```
##  路由
实质上是响应用户请求，给用户想要的内容(解析url输出相应内容)
