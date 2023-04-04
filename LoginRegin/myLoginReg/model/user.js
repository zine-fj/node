const pool = require('./pool')

class User {
  login(req, callback) {
    const {username, password} = req.body;

    pool.getConnection((err, conn) => {
      if(err) throw err;
      conn.query(`select * from user where username='${username}'`, (err, result)=> {
        if(err) throw err;
        console.log('login result: ', result);
        if (result.length) {
          if (result[0].password === password) {
            // 保存用户信息(其中user名字可以随便起),要在回调函数之前
            req.session.user = result[0];
            // 登录成功
            callback(1)
          } else {
            // 密码错误
            callback(2)
          }
        } else {
          // 用户不存在
          callback(0)
        }
        conn.release()
      })
    })
  }

  reg(params, callback) {
    const {username, password} = params;
    pool.getConnection((err, conn) => {
      if(err) throw err;
      // 先判断用户名是否占用
      conn.query(`select * from user where username='${username}'`, (err, result)=> {
        if(err) throw err;
        if (result.length) {
          // 用户名已存在
          callback(0);
          conn.release()
        } else {
          conn.query(`insert into user(username, password) values('${username}', '${password}')`, (err, result) => {
            if(err) throw err;
            callback(1)
            conn.release()
          })
        }
      })

    })
  }
}

module.exports = User;