let pool = require('./pool');

class Product{
    constructor () {};

    getProductData (callback) {
        pool.getConnection((err,connection)=>{
            if (err) throw err;
            connection.query('select * from product',(err,results)=>{
                if (err) throw err;
                callback(results);
                connection.release();
            })
        })
    }
}

module.exports = Product;