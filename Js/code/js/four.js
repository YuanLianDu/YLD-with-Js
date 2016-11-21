/**
 * Created by yuan on 16/10/16.
 */

/***********************方法***********************/

/*
 var xiaoming = {
 name: "xiaoming",
 birth:1990,
 age: function () {
 var y = new Date().getFullYear();
 return y-this.birth;
 }
 };

 console.log(xiaoming.age());*/

/*1、this的指向，根据情况而定*/

/*2、捕获this，用that*/

/*var xiaoming = {
 name: "xiaoming",
 birth:1990,
 age: function() {
 var that = this;
 function getBirthFromAge() {
 var y = new Date().getFullYear();
 return y -  that.birth;
 }
 return getBirthFromAge();
 }
 };
 console.log(xiaoming.age());*/

/*3、控制this的指向，apply(),call()*/

//apply(),把参数打包成array传入
//call(),把参数按顺序传入

/*
 function getAge() {
 var y = new Date().getFullYear();
 return y-this.birth;
 }

 var xiaoming =  {
 name: "xiaoming",
 birth:1990,
 age: getAge
 }

 console.log(xiaoming.name);
 console.log(xiaoming.age());
 console.log(getAge.apply(xiaoming,[]));
 console.log(getAge.call(xiaoming,null));

 console.log(Math.max(3, 5, 4));
 console.log(Math.max.apply(null,[3, 5, 4]));
 console.log(Math.max.call(null,3, 5, 4));*/

/*装饰器，计算函数的调用次数*/

var count = 0;
var oldParseInt = parseInt;
window.parseInt = function () {
    // console.log(arguments);
    count += 1;
    return oldParseInt.apply(null, arguments);
}

parseInt('10');
parseInt('20');
parseInt('30');
console.log(count);
