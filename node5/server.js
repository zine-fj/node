const express = require('express');
const app = express();
const mysql = require('mysql');

let User = require('./model/user');
let myUser = new User();

let Product = require('./model/Product');
let myProduct = new Product();

app.use(express.static('public'));

app.get('/api/getUsers',(req,res)=>{
    myUser.getUsers(res);
})
app.get('/api/getProductData',(req,res)=>{
    myProduct.getProductData(res);
})

app.listen(8060);

console.log('server runing at 8060');