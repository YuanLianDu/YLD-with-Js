# 高阶函数

高阶函数(`Higher-order function`)：一个函数就可以接收另一个函数作为参数.





## Practice

1、利用reduce()求积：

```javascript
'use strict';
function product(arr) {
    return arr.reduce(function(x,y) {
        return x*y;
    });
}

 // 测试:
    if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
        alert('测试通过!');
    }
    else {
        alert('测试失败!');
    }

```


2、不要使用JavaScript内置的parseInt()函数，利用map和reduce操作实现一个string2int()函数

```javascript
'use strict';
function string2int(s) {
    var array = s.split("").map(function(x){
          return x-0;
      });
    var result = array.reduce(function(x,y) {
        return x*10+y;
    });

    return result;
}

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        alert('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        alert('请勿使用Number()!');
    } else {
        alert('测试通过!');
    }
}
else {
    alert('测试失败!');
}

```

3、请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']

```javascript
'use strict';
function normalize(arr) {
    var normal = arr.map(function(x) {
          var lower = x.toLowerCase().split("");
          lower[0] = lower[0].toUpperCase();
     console.log(lower);
          var result = lower.reduce(function(x,y){
          return x+y;
    });
          return result;
    });

    return normal;
}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    alert('测试通过!');
}
else {
    alert('测试失败!');
}
```

4、
```
'use strict';

var arr = ['1', '2', '3'];
var r;
r = arr.map(parseInt);
alert('[' + r[0] + ', ' + r[1] + ', ' + r[2] + ']');
```

output :  `[1, NaN, NaN]`;

为什么？？？？？？？？？？

正确答案：

```
'use strict';

var arr = ['1', '2', '3'];
var r;
r = arr.map(Number);
alert('[' + r[0] + ', ' + r[1] + ', ' + r[2] + ']');
```


解释：map函数，有三个参数，map(currentValue,index,array)

通常使用parseInt时,只需要传递一个参数.但实际上,parseInt可以有两个参数.第二个参数是进制数.可以通过语句"alert(parseInt.length)===2"来验证.
// map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素, 元素索引, 原数组本身.
// 第三个参数parseInt会忽视, 但第二个参数不会,也就是说,parseInt把传过来的索引值当成进制数来使用.从而返回了NaN.
parseInt(string, radix)默认接受两个参数，第一个是转换的string,第二个是转换进制radix
string     必需。要被解析的字符串。
radix   可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN.