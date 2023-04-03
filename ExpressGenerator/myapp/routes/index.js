var express = require('express');
var router = express.Router();

let Product = require('../model/product')

/* GET home page. */
router.get('/', function(req, res, next) {

  // let indexData = [
  //   {name: '电脑'},
  //   {name: '手机'},
  //   {name: '平板'},
  // ]

  let myPro = new Product()
  myPro.getProduct(function(indexData) {
    res.render('index', { title: 'Express',htmlStr:"<a href='javascript:alert(1);'>点击</a>", indexData});
  })
  
});

router.get('/cart', function(req, res, next) {
  res.render('cart', { title: '购物车页面' });
});

module.exports = router;
