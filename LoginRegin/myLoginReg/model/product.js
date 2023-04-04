const pool = require('./pool')

class Product {

  getProductData(callback) {
    pool.getConnection((err, conn) => {
      if (err) throw err;
      conn.query('select * from product', (err, result) => {
        if(err) throw err;
        callback(result)
        conn.release()
      })
    })
  }
}

module.exports = Product