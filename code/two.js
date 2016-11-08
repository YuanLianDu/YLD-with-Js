/**
 * Created by yuan on 16/10/7.
 */


/*******************函数************************/


/*******************chapter one 函数定义和调用************************/


/*************直接定义函数*****************/

/*function abs(x) {
    if(x >= 0) {
        return x;
    }else {
        return -x;
    }
}
console.log(abs(6));*/

/***************将函数赋给变量**************************/

var abs = function (x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }

    if(x >= 0) {
        return x;
    }else {
        return -x;
    }
};
//console.log(abs());



/*******************chapter two arguments************************/
//JavaScript还有一个免费赠送的关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。
// arguments类似Array但它不是一个Array：
//实际上arguments最常用于判断传入参数的个数
function foo(x) {
    for (var i=0; i<arguments.length; i++) {
        console.log(arguments[i]); // 10, 20, 30
    }
}
//foo(10, 20, 30);


/*********************chapter three rest参数 ********************************************/

/*one*/
function imRest(a,b) {
    var i,rest = [];

    if(arguments.length > 2) {
        for(i=2;i<arguments.length;i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a=' + a);
    console.log('b=' + b);
    console.log(rest);
}
// imRest('a','b','c','d');

function es6Rest(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

//es6Rest('a','b','c','d');

/*********practice计算传入的参数总和**************/
function sum(...rest) {
    var result=0;
    for(var key in rest){
        result += rest[key];
    }
    return result;
}
var i, args = [];
for (i=1; i<=100; i++) {
    args.push(i);
}
if (sum() !== 0) {
    alert('测试失败: sum() = ' + sum());
} else if (sum(1) !== 1) {
    alert('测试失败: sum(1) = ' + sum(1));
} else if (sum(2, 3) !== 5) {
    alert('测试失败: sum(2, 3) = ' + sum(2, 3));
} else if (sum.apply(null, args) !== 5050) {
    alert('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
} else {
    alert('测试通过!');
}



/*********return:JavaScript引擎有一个在行末自动添加分号的机制，这可能让你栽到return语句的一个大坑**************/

