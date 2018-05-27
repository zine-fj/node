var express = require('express');
var router = express.Router(); // app的路由

let Pro = require('../model/product');
let User = require('../model/user');
let Cart = require('../model/cart');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  let username;
  if(req.session.user) { //有user信息证明用户登录了
    username = req.session.user.username;
  }
  res.render('index', { title: 'my Show',username });
});

// product
router.get('/product',(req,res,next)=>{
  let myPro = new Pro();
  if(req.session.user) {
    myPro.getProductData((productData)=>{
      res.render('product', { title: 'product',productData});
    })
  } else {
    res.render('product', { title: 'product 未登录',productData:[]});
  }
 
});

// cart
router.get('/cart',(req,res,next)=>{
  let myCart = new Cart();
  if(req.session.user) { //有user信息证明用户登录了
    uid = req.session.user.uid;
    myCart.getCartList(uid,(cartData)=>{
      res.render('cart', { title: 'cart',cartData});
    })
  } else {
    res.render('cart', { title: 'cart 未登录',cartData:[]});
  }
});

// reg
router.get('/reg', function(req, res, next) {
  res.render('reg', { title: 'reg' ,msg:{}});
});
router.post('/reg', function(req, res, next) {
  let myUser = new User();
  //调用数据模块，注册
  myUser.reg(req.body,(msgCode)=>{
    console.log(msgCode);
    let msg = {
      msgCode,
      msgInfo: msgCode?'注册成功':'用户名已存在'
    }
    res.render('reg', { title: 'reg' ,msg});
  })
});

// login
router.get('/login', function(req, res, next) {
  console.log(req.query); // get方式的参数
  res.render('login', { title: 'login',msg:{}}); // get方式给一个默认的msg
});
router.post('/login', function(req, res, next) {
  console.log(req.body); //post方式参数

  let myUser = new User();
  //调用数据模块，检测用户名密码是否正确
  myUser.login(req,(msgCode)=>{
    let msg = {
      msgCode,
      msgInfo: msgCode == 1?'登录成功':msgCode == 2?'密码错误':'用户名不存在'
    }
    res.render('login', { title: 'login',msg });
  }); 
  
});

module.exports = router;
