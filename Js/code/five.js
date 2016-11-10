/**
 * Created by yuan on 16/10/18.
 */

/*******************高阶函数*******************/

// 编写高阶函数，就是让函数的参数能够接收别的函数。

function add(a,b,f) {
    return f(a) + f(b);
}

console.log(add(1,-9,Math.abs));