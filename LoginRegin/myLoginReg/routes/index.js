var express = require("express");
var router = express.Router();

const User = require("../model/user");
const myUser = new User();
const Product = require("../model/product");
const myPro = new Product();
const Cart = require("../model/cart");
const myCart = new Cart();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.session);
  let username;
  if (req.session.user) {
    //有user信息证明用户登录了
    username = req.session.user.username;
  }
  res.render("index", { title: "my Show", username });
});

// cart
router.get("/cart", (req, res, next) => {
  
  if (req.session.user) {
    //有user信息证明用户登录了
    uid = req.session.user.uid;
    myCart.getCartList(uid, (cartData) => {
      res.render("cart", { title: "cart", cartData });
    });
  } else {
    res.render("cart", { title: "cart 未登录", cartData: [] });
  }
});

// product
router.get('/product',(req,res,next)=>{
  if(req.session.user) {
    myPro.getProductData((productData)=>{
      res.render('product', { title: 'product',productData});
    })
  } else {
    res.render('product', { title: 'product 未登录',productData:[]});
  }
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login", msg: {} });
});
router.post("/login", function (req, res, next) {
  console.log("login: ", req.body);
  myUser.login(req, function (msgCode) {
    let msg = {
      msgCode,
      msgInfo:
        msgCode == 1 ? "登录成功" : msgCode == 2 ? "密码错误" : "用户名不存在",
    };
    res.render("login", { title: "Login", msg });
  });
});

router.get("/reg", function (req, res, next) {
  res.render("reg", { title: "Reg", msg: {} });
});

router.post("/reg", function (req, res, next) {
  myUser.reg(req.body, (msgCode) => {
    let msg = {
      msgCode,
      msgInfo: msgCode ? "注册成功" : "用户名已存在",
    };
    res.render("reg", { title: "reg", msg });
  });
});

module.exports = router;
