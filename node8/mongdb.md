## mongdb(没有数据库事务)
1. 介绍
MongoDb是一个基于分布式文件存储的数据库。由C++语言编写，语法类似js。适合大数据存储，旨在为WEB应用提供可扩展的高效性能数据存储解决方案。  
1. 集中式文件存储数据库：将数据都存储在一个地方(100W的数据库)，随着数据量的增加，需要不断更换数据库；且需要做备份，防止数据库出错造成的影响。
2. 分布式文件存储数据库：将数据分散存储在不同地方(10W的数据库)，分别管理，方便维护。
特点：高性能、容易不熟、容易使用，存储数据非常方便。  
对mongodb创建一个数据库存储的文件夹，要求在系统的目录下创建一个文件夹data，在data文件夹下创建一个db。
2. 术语介绍
  1. SQL:    database(数据库)、table(表)、         row(行)、      column(字段(列))、index(索引)、 primary key(主键)
  2. mongoDB:database(数据库)、collection(集合{})、document(文档)、fieled(域)、      index(索引)、primary key(主键，_id作为主键)

3. 使用
  1. 安装之后(一步步安装即可)。
  2. 在D盘(其他盘也可以)根目录下创建文件夹data，在data文件夹下创建db文件夹
  3. 安装之后在bin文件夹中cmd，并执行mongod.exe --dbpath "D:\data\db"，此时为运行状态，不能关闭。  
  注：一种快捷方式执行3操作：先在桌面新建1.txt文件，在里面输入cd C:\ProgramFiles\MongoDB\Server\3.6\bin  
  mongod --dbpath "E:\data\db"，然后将其保存为1.bat文件，点击后即可进入运行状态。
  4. 在bin文件中cmd，执行mongo.exe，进入mongodb控制台。

#### mongdb命令行操作
1. 显示数据库
``` shell
    show dbs
```
2. 显示数据库状态
``` shell
    // 默认为test
    db.stats()
```
3. 检查当前所用数据库
``` shell
    // 默认为test
    db
```
4. 使用和创建数据库
``` shell
    use mydb
```
5. 在库中创建集合(表)
``` shell
    // 方法一
    db.createCollection("mycol")
    // 方法二，插入数据的同时自动创建
    db.mycol01.insert({"a":1})
```
6. 显示集合
``` shell
    show collections
```
7. 删除集合(删)
``` shell 
    db.mycol.drop()
```
8. 显示表格记录(查)
``` shell 
    // 查询数据(文档)
    db.mycol.find()
    db.mycol.find().toArray() // 转数组
    db.mycol.findOne() // 返回上一条记录
    // 查询需要的字段({}默认代表全部，1代表显示，0代表不显示)
    db.mycol.find({},{'title':1}) // 只显示id和title 
    db.mycol.find({},{'title':1,_id:0}) // 只显示title
    db.mycol.find({'title':'angular'},{v:1,_id:0}) // 显示title为angular中v
    db.mycol.find({'title':'angular'}).pretty() // 美化格式
```
9. 增
``` shell
    // 单个添加
    db.mycol.insert({title:'mongo'},{title:'react'},{title:'vue'})
    // 多条插入，不加[]，默认插入第一条
    db.mycol.insert([{},{},{}])
```
10. 改
``` shell
    // 更改一个(默认第一个)
    db.mycol.update({title:'node'},{$set:{title:'angular'}})
    // 更改多个
    db.mycol.update({title:'node'},{$set:{title:'angular'}},{multi:true})
```
11. 删
``` shell
    // 默认全部删除
    db.mycol.remove({'title':'angular'})
    //删除一个
    db.mycol.remove({'title':'angular'},1)
```

#### 安装mongodb图形化工具
1. 下载地址 [robo3T](https://robomongo.org/download)
2. 安装后点击create，在mongodb打开的情况下链接即可显示数据库

#### 在node中使用mongodb
1. 安装express
``` shell
    yarn add express
```
2. 安装mongodb mongoskin
``` shell
    yarn add mongodb mongoskin
```

























