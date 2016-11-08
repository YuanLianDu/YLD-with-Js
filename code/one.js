

/*********ES6 多行输出*****************************/
/*console.log(`ha
hah
a
`);*/


/*************************变量声明*****************************/
/*var one = 2;
var string = 'hello luo';
if(1 === one) {
  console.log(string);
}*/


/*************************数组、对象声明*****************************/
/*var arr = ['Yuan','female','18','coding'];
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
function introduction(arr) {
    for(var key in arr) {
        console.log(arr[key]);
    }
}
introduction(arr);
introduction(person);*/


/*************************Map,Set,iterable*****************************/
//for ... of循环是ES6引入的新的语法,具有iterable(ES6)类型的集合可以通过新的for ... of循环来遍历，
// 如Array、Map和Set都属于iterable类型。


//Map是一组键值对的结构，具有极快的查找速度。
/*var map = new Map([['yuan',20],['luo',30],['duo',40],['qi',50],['ba',60]]);
map.set('yuan',99);
console.log(map.has('luo'));
console.log((map.get('duo')));
console.log(map.delete('ba'));
console.log(map);*/

//Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。
var set = new Set([1,2,3]);
set.add("4");
set.delete(2);
//console.log(set);

/******************************for ... of*************************/
/*for(var s of set) {
    console.log(s);
}*/

/*******************************for ... in**************************/
//for ... in  0  1 2 age;
// for..of  a  b  c;
var array = ['a','b','c'];
array.age = 1;
/*for(var a in array) {
    console.log(a);
}*/



/***********************************iterable内置的forEach方法*****************************/
//更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。
// a  b  c
array.forEach(function(element,index,array) {
    console.log(element+index);
});




/***********************************高阶函数英文叫Higher-order function**********************/
//JavaScript的函数其实都指向某个变量。
// 既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。
function add(x,y,f) {
    return f(x) + f(y);
}
console.log(add(-5, 6, Math.abs));



function templateString() {

}