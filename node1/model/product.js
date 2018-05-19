function Product() {}

// 获取列表数据的方法
Product.prototype.getListData = function() {

    return [
        {"name":"电脑"},
        {"name":"笔记本"}
    ]
}

// 暴露出口
module.exports = Product;













