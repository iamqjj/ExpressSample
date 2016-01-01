// 输出全局变量 __filename 的值 表示当前正在执行的脚本的文件名
//__dirname 表示当前执行脚本所在的目录。

console.log( __filename );

//setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)
//clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器
function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);
// 清除定时器
clearTimeout(t);

/*
setInterval(cb, ms)
setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
*/

/*
onsole.log([data][, ...])
console.info([data][, ...])
console.error([data][, ...])
console.warn([data][, ...])
console.dir(obj[, options])
console.time(label)
console.timeEnd(label)
console.trace(message[, ...])
console.assert(value[, message][, ...])
*/

console.log('byvoid%diovyb', 1991); 
console.time("获取数据");
//
// 执行一些代码
// 
console.timeEnd('获取数据');

/*process  进程操作
事件 
exit
当进程准备退出时触发。
2	beforeExit
当 node 清空事件循环，并且没有其他安排时触发这个事件
3	uncaughtException
当一个异常冒泡回到事件循环
4	Signal 事件
当进程接收到信号时就触发。

属性
stdout，stderr，stdin，argv，execPath，execArgv，env，exitCode，version，
versions，config，pid，itle，arch当前 CPU 的架构，platform，mainModule

*/

process.on('exit', function(code) {
  
  console.log('退出码为:', code); //退出状态码 1-12
});
console.log("程序执行结束");