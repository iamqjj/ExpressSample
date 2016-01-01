var events = require('events'); 
var emitter = new events.EventEmitter(); 

emitter.on('someEvent', function(arg1, arg2) { 
	console.log('listener1', arg1, arg2); 
}).on('someEvent', function(arg1, arg2, arg3) { 
	console.log('listener2', arg1, arg2 , arg3); 
}); 
emitter.emit('someEvent', 'arg1 ', 'arg2 ' , 'arg3'); 

console.log(events.EventEmitter.listenerCount(emitter, 'someEvent'));

/*
Emitter object method
addListener(event, listener)
on(event, listener)
once(event, listener)
removeListener(event, listener)
removeAllListeners([event])
setMaxListeners(n) 提高监听器的默认限制的数量。
listeners(event)
emit(event, [arg1], [arg2], [...])  按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。

Emitter class method
listenerCount(emitter, event)


EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。
当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃


*/