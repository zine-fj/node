let pool = require('./pool');

class User{

    login(req,callback) {
        const {username,password} = req.body;
        pool.getConnection((err,conn)=>{
            if(err) throw err;
            // 判断用户名和密码是否正确
            // select * from user where username='ajiao'
            // select * from user where username='"+ ajiao +"'
            conn.query(`select * from user where username='${username}'`,(err,results)=>{
                if(err) throw err;
                console.log(results);
                if(results.length) {
                    // 用户名存在
                    if(results[0].password == password) {
                        //如果密码也一直，登录成功
                        // 保存用户信息(其中user名字可以随便起),要在回调函数之前
                        req.session.user = results[0];

                        callback(1);
                        
                    } else {
                        // 密码错误
                        callback(2);
                    }
                } else {
                    // 用户名不存在
                    callback(0);
                }
                conn.release();
            })
        })
    }

    reg(params,callback) {
        const {username,password} = params;
        pool.getConnection((err,conn)=>{
            if(err) throw err;
            // 先判断用户名是否占用
            let sqlLook = `select * from user where username = '${username}'`;
            console.log(sqlLook);
            conn.query(sqlLook,(err,results)=>{
                if(results.length) {
                    // 用户名已存在
                    callback(0)
                    conn.release();
                } else {
                    conn.query(`insert into user(username,password) values('${username}','${password}')`,(err,results)=>{
                        if(err) throw err;
                        callback(1);
                        conn.release();
                    })
                }
            })
            
        })
    }
}

module.exports = User;