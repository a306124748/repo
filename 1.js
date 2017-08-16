console.log(1+1);// 2
console.log("2"+"4");// 24
console.log(2+"4");// 24
console.log(+new Date()); // 1502678481763
console.log(+"4");// 4
var a=1;
a+++a;// 3
typeof a+2;//'number2'

var arr=[3,4,5];
var roots=arr.map(function(a){return a*a;});
console.log(roots);//[9,16,25]

var obj={
	name:'hunger',
	sex:'male',
	age:28
}
for(var a in obj){
	console.log(obj[a]);
}// hunger male 28

function isNumber(input){
         return typeof input==='number'
}
function isString(input){
   return typeof input==='string'
}
function isBoolean(input){
   return typeof input==='boolean'
}
function isFunction(input){
     return typeof input==='function'
}

var a = 2,
    b = "jirengu",
    c = false;
alert( isNumber(a) );  //true
alert( isString(a) );  //false
alert( isString(b) );  //true
alert( isBoolean(c) ); //true
alert( isFunction(a)); //false
alert( isFunction( isNumber ) ); //true


console.log(a);// undefined 变量提升。
var a=1;
console.log(a);// 1
console.log(b);// Uncaught ReferenceError: b is not defined