const express = require('express');
//创建express的应用
const app = express();
// 让app使用了一个静态的文件目录
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('hello express');
})
app.listen(8050);
console.log('server runing at 8050');









