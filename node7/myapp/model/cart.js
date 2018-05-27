let pool = require('./pool');

class Cart{
    constructor () {};

    getCartList (uid,callback) {
        pool.getConnection((err,connection)=>{
            if (err) throw err;
            // 关联查询购物车需要的数据
            connection.query(`select * from cart,product where uid=${uid} and product.pid=cart.pid`,(err,results)=>{
                if (err) throw err;
                callback(results);
                connection.release();
            })
        })
    }
}

module.exports = Cart;