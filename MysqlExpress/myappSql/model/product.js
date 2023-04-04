const pool = require("./pool");

class Product {
  constructor() {}
  getProduct(res) {
    // 在连接池里 拿 一个连接来使用
    pool.getConnection((err, connection) => {
      if (err) {
        console.log("err: ", err);
      }

      connection.query("select * from product", (err, result) => {
        if (err) {
          console.log("err-1: ", err);
        }

        res.send(result);
        // 使用完以后，释放连接
        connection.release();
      });
    });
  }
}

module.exports = Product;
