let pool = require('./pool');

class Product{
    constructor () {};
    getProductData (callback) {
        pool.getConnection((err,connection)=>{
            if(err) throw err //抛出错误，如果错误后面不执行
            connection.query('select * from product',(err,results)=>{
                if(err) {
                    console.log(err)
                };
                console.log(results);
                // 获取到数据以后，调用回调，传入商品数据
                callback(results);
                connection.release();
            })
        })
    }
}

module.exports = Product;













