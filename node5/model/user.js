let pool = require('./pool');

class User {
    constructor() {}

    getUsers(res) {
        // 在连接池里拿一个连接用
        pool.getConnection((err,connection)=>{
            if(err) {
                console.log(err)
            };
            // 数据库操作
            connection.query('select * from user',(err,results)=>{
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

// 相当于
// User.prototype.getUsers = function() {}

module.exports = User;



















