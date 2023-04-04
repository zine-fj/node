const express = require("express");

const app = express();

app.use(express.static("public"));

const User = require("./model/user");
const myUser = new User();

const Product = require("./model/product");
const myProduct = new Product();

app.get("/api/getUser", (req, res) => {
  myUser.getUser(res);
});

app.get("/api/getProduct", (req, res) => {
  myProduct.getProduct(res);
});

app.listen(8060);

console.log("http://localhost:8060");
