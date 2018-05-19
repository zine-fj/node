
## nodejs
Nodejs是一个JavaScript的运行环境。实际上是对Google v8引擎进行了封装。v8引擎执行JavaScript速度非常快、性能好
Nodejs使用事件驱动，非阻塞I/O模型而得以轻量和高效，非常适合在分布式设备上运行数据密集型的实时应用
特点:使用js编写服务器端程序单线程、异步、事件驱动、处理速度快、但耗内存多

npm 是nodejs的包管理工具，是世界上最大的开放源代码的生态系统  

安装 supervisor，提高node的运行效率，不用每次修改都重启服务（必须全局安装）  
cnpm -g install supervisor  
node server => supervisor server  

前后端交互必须通过字符串  

模块化：把相同功能代码写在一起  
一个模块应当为一个文件，最后设置一个出口就行了  

AMD:异步的模块规范，回调（回调是异步的标志）  

commonjs:同步的，没有回调。  

同步在浏览器上是没发用的，但是在服务器上是可以的。  
服务器端的模块规范都是同步的（因为很快就加载好了）  

nodejs模块加载（遵循commonjs规范）  






















