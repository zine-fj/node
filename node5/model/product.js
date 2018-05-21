let pool = require('./pool');

class Product {
    constructor() {}

    getProductData(res) {
        // 在连接池里拿一个连接用
        pool.getConnection((err,connection)=>{
            if(err) {
                console.log(err)
            };
            connection.query('select * from product',(err,results)=>{
                if(err) {
                    console.log(err)
                };
                res.send(results);
                // 使用完后,释放连接
                connection.release();
            })
        })
    }
}

module.exports = Product;



















