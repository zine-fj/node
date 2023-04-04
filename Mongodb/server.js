let express = require('express');
let mongodb = require('mongodb');
let mongoskin = require('mongoskin');
let app = express();

let db = mongoskin.db('mongodb://localhost:27017/mydb');

db.bind('mycol');

app.get('/',(req,res)=>{
    res.send('hello mongodb');
})

app.get('/getData',(req,res)=>{
    db.mycol.insert({"title":"my-mongo"},(err,info)=>{
        console.log(err,info)
    })
    // db.mycol.find().toArray((err,resultss)=>{
    //     console.log(err,results);
    // })
    res.send('hello');
})

app.listen(8080)
console.log('server runing at 8080')











