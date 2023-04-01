function Product() {}

Product.prototype.getListData = function () {
  return [{ name: "电脑" }, { name: "手机" }];
};

module.exports = Product;
