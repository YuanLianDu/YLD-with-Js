七天学会nodeJs 笔记


# 2016-11-28

## 使用Buffer类处理二进制数据

1、创建Buffer对象

 + 指定缓存区大小 `new Buffer(size)` 
    - 代码：`buf = new Buffer(128); buf.length`
    - 输出：`128`  
 + 用一个数组初始化缓存区 `new Buffer(array)`
    - 代码： `buf = new Buffer(0,1,2,3)`
    - 输出： `<Buffer 00 01 02 03>`
 + 使用一个字符串来初始化缓存区 `new Buffer(str,[encoding])`
    - 代码：`buf = new Buffer('0123abcd','utf8')`
    - 输出：`<Buffer 30 31 32 33 61 62 63 64>`

 `buff.fill(value,[offset], [end])`,指定相关位置的数值。  

  + value,指定的值。必填
  + offset，起始位置；end，结束位置；可选参数


2、字符串的长度与缓存区的长度

字符串对象的length属性值获取的是**文字个数**；以文字为单位
字符串对象的length属性值获取的是**缓存区的长度**，即**缓存区的字节数**；以字节为单位

```
> str = '我喜爱编程';
'我喜爱编程'
> buf = new Buffer(str);
<Buffer e6 88 91 e5 96 9c e7 88 b1 e7 bc 96 e7 a8 8b>
> str.length
5
> buf.length
15
> 

```


字符串对象一旦不创建不能修改；
Buffer对象，可以被修改；通过序号可以修改某个字节处的数据；

```
> str = '我喜爱编程';
'我喜爱编程'
> str[2] = '欢';
'欢'
> str
'我喜爱编程'


> buf = new Buffer(str);
<Buffer e6 88 91 e5 96 9c e7 88 b1 e7 bc 96 e7 a8 8b>
> buf[2] = 0;
0
> buf
<Buffer e6 88 00 e5 96 9c e7 88 b1 e7 bc 96 e7 a8 8b>
> 

```


字符串对象处理字符方法：

+  搜索字符`indexOf`,`match`,`search`
+ 替换文字`replace`
+ 取出部分字符 `substring`
+ 取出指定区域的数据`slice`

Buffer对象只有一个方法,取出指定区域的数据`slice`.但是Buffer的`slice`并不是复制缓存区中的数据，而是与该数据**共享内存区域**。
**如果修改`slice`方法取出的数据，则缓存区中保存的数据也会被修改。**

```
> str = '我喜爱编程';
'我喜爱编程'

>  buf = new Buffer(str);
<Buffer e6 88 91 e5 96 9c e7 88 b1 e7 bc 96 e7 a8 8b>

>  str.slice(2,4);
'爱编'

> subBuf = buf.slice(2,4);
<Buffer 91 e5>

> subBuf
<Buffer 91 e5>

> subBuf[0] = 0;
0

> subBuf
<Buffer 00 e5>

> buf
<Buffer e6 88 00 e5 96 9c e7 88 b1 e7 bc 96 e7 a8 8b>

```

3、Buffer对象与字符串之间的相互转换

 + `buf.toString([encoding],[start],[end])`;将buffer对象转化为字符串
 + `buf.write(string,[offset],[length],[encoding])`;向buffer对象写入字符串
 + `StringDecoder`将Buffer中的数据转化为字符串。与`buf.toString`作用相同,但是对`utf8`编码支持更好
 
   - 使用场合：将多个buffer对象中的二进制数据转化为文字 
 
 ```
  str1 = new Buffer([0xe6,0x88,0x91,0xe5,0x96]);  //给予五个字符
 <Buffer e6 88 91 e5 96>
 > str2 = new Buffer([0x9c,0xe7,0x88,0xb1]);  //给予四个字符
 <Buffer 9c e7 88 b1>
 > str1.toString();
 '我��'             //打印出乱码
 > str2.toString();
 '�爱'              //打印出乱码
> var StringDeocder = require("string_decoder").StringDecoder;
undefined
> var decoder = new StringDeocder();
undefined
> decoder.write(str1);  //正常打印
'我'
> decoder.write(str2); //正常打印
'喜爱'
> 

 ```


4、Buffer对象与Number对象之间的相互转化



5、Buffer对象与Json对象之间的相互转化

+ JSON.stringfy(buf);buf转化为字符串
+ JSON.parse(json);字符串转化为数组

6、复制缓存数据

buf.copy(targetBuffer,[targetBuffer],[sourceStart],[sourceEnd])

7、Buffer类的类方法

+ `isBuffer(obj)`
+ `byteLength(string,[Encoding])`
+ `concat(list,[totalLength])`
+ `isEncoding(encoding)`


问题：

1、命令行程序，制作软链接失败？？？？（代码的组织和部署）

