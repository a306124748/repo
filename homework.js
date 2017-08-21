
/**
 * 1. 以下代码输出什么， 为什么？
 */
function getInfo(name, age, sex){
	console.log('name:',name);
	console.log('age:', age);
	console.log('sex:', sex);
	console.log(arguments);
	arguments[0] = 'valley';
	console.log('name', name);
}

getInfo('hunger', 28, '男');
/*
name: hunger  
age: 28
4 sex: 男
Arguments[3] 
0:"valley" (因为arguments已经将name改写成valley)
1:28
2:"男"
name valley (因为arguments已经将name改写成valley)
*/
getInfo('hunger', 28);
/* 
name:huger
age:28
sex:undefined (因为变量只有输入两个值，sex没有值)
Arguments[2]
0:"valley"
1:28
name valley
 */
getInfo('男');
/*
name: 男
age: undefined
sex: undefined
Arguments[1]
0:"valley"
name valley
*/

/**
 * 2. 写一个函数，返回参数的平方和？如 （难度**）
 */
function sumOfSquares(){
	var sum=0;
	for(i=0;i<arguments.length;i++){
        sum+=Math.pow(arguments[i],2);
  	}
  	return sum;
}
sumOfSquares(2,3,4);   // 29
sumOfSquares(1,3);   // 10


/**
 * 3.如下代码的输出？为什么 （难度*）
 */
console.log(a);//undefined ，因为变量提升，但没有赋值。
var a = 1;
console.log(b);//ReferenceError,b没有声明


/**
 * 4.如下代码的输出？为什么 （难度*）
 */
sayName('world');
sayAge(10);
function sayName(name){
	console.log('hello ', name);
}
var sayAge = function(age){
	console.log(age);
};
/* 
hello world  (因为函数声明会将函数声明整个sayName函数提升到代码前端，因此执行时会输出正常结果)
TypeError（sayAge 是函数表达式，只是将 var sayAge提升到代码前端，因此执行时会报错）
*/


/**
 * 5.如下代码的输出？为什么 （难度**）
 */
function fn(){}
var fn = 3;
console.log(fn); // 3 （因为函数可以作为参数，可以赋值，两个相同的函数，后定义的函数覆盖先定义的函数）

/**
 * 6.如下代码的输出？为什么 （难度***）
 */
function fn(fn2){
   console.log(fn2);
   var fn2 = 3;
   console.log(fn2);
   console.log(fn);
   function fn2(){
    	console.log('fnnn2');
    }
 }
fn(10);
相当于
function fn(fn2){
   var fn2  // 变量提升
    function fn2(){
    	console.log('fnnn2');
    }  // 函数声明提升
   console.log(fn2); // 输出函数fn2
    fn2 = 3;
   console.log(fn2); // 赋值
   console.log(fn); // 输出函数fn
  
 }
/* 
function fn2(){
    	console.log('fnnn2');
    }
 3
 function fn(fn2){
   console.log(fn2);
   var fn2 = 3;
   console.log(fn2);
   console.log(fn);
   function fn2(){
    	console.log('fnnn2');
    }
 }
*/

/**
 * 7.如下代码的输出？为什么	（难度***）
 */
var fn = 1;
function fn(fn){
     console.log(fn);
}
console.log(fn(fn));
/* 
    输出结果：报错，fn is not a function
    相当于：
     var fn；
     function fn(fn){
         console.log(fn);
    }
     fn=1;
     console.log(fn(fn)); 
*/ 

/**
 * 8.如下代码的输出？为什么	（难度**）
 */
console.log(j); // undefined （变量提升，但赋值没有提升）
console.log(i); // undefined
for(var i=0; i<10; i++){
	var j = 100;
}
console.log(i); //10 （for循环到10时已经不满足条件，于是结束循环）
console.log(j); // 100 

/**
 * 9.如下代码的输出？为什么	（难度****）
 */
fn();
var i = 10;
var fn = 20;
console.log(i);
function fn(){
	console.log(i);
	var i = 99;
	fn2();
	console.log(i);
	function fn2(){
		i = 100;
	}
}
/*
var i;
var fn;
function fn(){
	var i;
	function fn2(){
		i = 100;
	}
	console.log(i); // undefined （变量提升，但赋值没有提升）
	 i = 99;
	fn2();
	console.log(i);	// 100 （fn2执行后i为100，覆盖了i = 99）
}
fn()；
i=10;
fn=20;
console.log(i); // 10 

*/


/**
 * 10.如下代码的输出？为什么	（难度*****）
 */
var say = 0;
(function say(n){
	console.log(n);
	if(n<3) return;
	say(n-1);
}( 10 ));
console.log(say); // 赋值为0.
// 10 9 8 7 6 5 4 3 2 0
// say函数是立即执行函数，因此会马上执行，if循环到n=2时，结束循环。里面的变量不会影响外面的变量。