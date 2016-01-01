// inherits
var util = require('util'); 
function Base() {  
} 
Base.prototype.showName = function() { 
	console.log(this.name);
}; 
function Sub() { 
	this.name = 'sub'; 
};
util.inherits(Sub, Base); 

//util.inspect(object,[showHidden],[depth],[colors])
//是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。

//util.isArray(object)
//util.isRegExp(object)
var util = require('util');
util.isRegExp(/some regexp/);
  // true
util.isRegExp(new RegExp('another regexp'))
  // true
util.isRegExp({})
  // false

//util.isDate(object)
//util.isError(object)

/*
1	OS 模块
提供基本的系统操作函数。
2	Path 模块
提供了处理和转换文件路的工具。
3	Net 模块
用于底层的网络通信。提供了服务端和客户端的的操作。
4	DNS 模块
用于解析域名。
5	Domain 模块
简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的。
*?