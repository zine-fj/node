const express = require('express');
let app = express();

app.use(express.static('public'));

app.listen(8010,function() {
    console.log('server run at http://10.227.247.111')
});

// server socket
var io = require('socket.io').listen(8020);
var users = {};
var index = 0;
io.on('connection',function(socket) { // 页面刷新就会响应
    // socket.send('服务端->客户端'); // 服务端发送消息

    // 获取IP地址
    console.log(socket.client.conn.remoteAddress);
    var ip = socket.client.conn.remoteAddress;
    
    // 用户首次链接
    if(!users[ip]) {
        index++;
        users[ip] = {
            name: '萌新' + index
        }
    } 
    

    socket.on('message',function(data) { // 服务端接收消息
        // 当服务端接收到消息的时候应该把消息广播给其他人
        console.log(data);
        if(data.indexOf('香') == -1) {
            socket.broadcast.send({
                userInfo: users[ip],
                msg: data
            });
        } else {
            socket.send({
                userInfo: {
                    name: '系统消息：'
                },
                msg: 'error:不能输入敏感字!'
            });
        }
        

        // 监听改名事件
        socket.on('changeName',function(newName) {
            if(newName.indexOf('香') == -1) {
                users[ip].name = newName;
            } else {
                socket.send('error: 不能输入敏感字!');
            }
            
        })
    })
})

