var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("end!");

//执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。

//Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，
//例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。

/*
以下为在异步模式下打开文件的语法格式：
fs.open(path, flags[, mode], callback)
参数
参数使用说明如下：
path - 文件的路径。
flags - 文件打开的行为。具体值详见下文。
mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
callback - 回调函数，带有两个参数如：callback(err, fd)。
*/

/*以下为通过异步模式获取文件信息的语法格式
fs.stat(path, callback)

以下为异步模式下写入文件的语法格式：
fs.writeFile(filename, data[, options], callback)

以下为异步模式下读取文件的语法格式：
fs.read(fd, buffer, offset, length, position, callback)

以下为异步模式下关闭文件的语法格式：
fs.close(fd, callback)

以下为异步模式下截取文件的语法格式：
fs.ftruncate(fd, len, callback)

以下为删除文件的语法格式：
fs.unlink(path, callback)

以下为创建目录的语法格式：
fs.mkdir(path[, mode], callback)

以下为读取目录的语法格式：
fs.readdir(path, callback)

以下为删除目录的语法格式：
fs.rmdir(path, callback)