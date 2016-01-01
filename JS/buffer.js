//buf.write(string[, offset][, length][, encoding])
//buf.toString([encoding][, start][, end])

var buf = new Buffer("www.runoob.com", "utf-8");
var buf2 = new Buffer("end", "utf-8");
buf.write("hello");
console.log( buf.toString('ascii',0,5));   
console.log( buf.toString('utf8'));   
console.log( buf.toJSON());
var buf2 = Buffer.concat([buf,buf2]);
console.log( buf2.toString());  

var result = buf.compare(buf2);
if(result < 0) { console.log("equal"); }


/*
buf.write(string[, offset][, length][, encoding])
buf.toString([encoding][, start][, end])
buf.toJSON()
Buffer.concat(list[, totalLength])
buf.compare(otherBuffer);
buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
buf.slice([start][, end])
buf.length;
*/
