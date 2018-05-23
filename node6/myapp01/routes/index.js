var express = require('express');
var router = express.Router();

let Product = require('../model/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let myPro = new Product();
  //异步的，可以等获取商品以后(就会执行那个函数)，再渲染页面
  myPro.getProductData((indexData)=>{
    res.render('index', { title: 'Express hello',htmlStr:"<a href='javascript:alert(1);'>点击</a>",indexData });
  }); 
  
});

// 购物车
router.get('/cart',function(req,res,next) {
  res.render('cart',{title: '购物车页面'})
})

module.exports = router;
