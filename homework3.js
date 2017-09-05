/* eslint-disable */



/**
 * 时间对象、引用类型
 */

/**
 * 1. console.log输出什么，为什么
 */
var obj1 = {a:1, b:2};
var obj2 = {a:1, b:2};
console.log(obj1 == obj2); //fasle (因为对象是引用类型，虽然内容一样，但是存储地址不一样)
console.log(obj1 = obj2); //Object {a: 1, b: 2} （赋值使变量引用同一个对象）
console.log(obj1 == obj2);// true （因为obj1和boj2经过赋值，现在已经引用的是同一个对象）


/**
 * 2. 距离某个日子还有多久
 */
 function getIntv(date){
  var then=new Date(date);
  var diff=new Date(date)-Date.now();
  var day=Math.floor(diff/(1000*60*60*24));
  var hour=Math.floor((diff-day*1000*60*60*24)/1000/60/60);
  var min=Math.floor((diff-(day*24+hour)*1000*60*60)/1000/60);
  var sec=Math.floor((diff-(day*24*60*60*1000+hour*60*60*1000+min*60*1000))/1000);
  return "距离除夕还有"+day+"天"+hour+"小时"+min+"分钟"+sec+"秒";
 }

var str = getIntv("2018-02-15");
console.log(str);  // 距除夕还有 20 天 15 小时 20 分 10 秒

/**
 * 3. 把数字日期改成中文日期
 */
 function getChsDate(str){
  var d=new Date(str),
   arr =['零','一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五','二十六','二十七','二十八','二十九','三十','三十一'],
  year=d.getFullYear()+'',
  month=d.getMonth()+1+'',
  date=d.getDate()+'',
  a='';
  for(var i=0;i<year.length;i++){
    a=a+arr[year[i]];
 }
 return a+'年'+arr[month]+'月'+arr[date]+'日';
}
var str = getChsDate('2015-01-08');
console.log(str);  // 二零一五年一月八日


/**
 * 4. 写一个函数获取n天前的日期
 */
var lastWeek =  getLastNDays(7); 
var lastMonth = getLastNDays(30); 
function getlastdNDays(number){
  var a=new Date();
  var b=new Date(t.getTime()-number*24*60*60*1000);
  return b.getFullYear()+'-'+(b.getMonth()+1)+'-'+b.getDate();
}
console.log(lastWeek);
console.log(lastMonth);

/**
 * 5. 完善如下代码，用于获取执行时间如：
 */
var Runtime = (function(){
    var t1,t2,t3;
    var obj = {
        start: function(){
              //code here ...， 当前时间
              t1=Date.now();
        },
        end: function(){
             //code here ...  结束时间
              t2=Date.now();
        },
        get: function(){
             //code here ...  获取执行时间
             t3=t2-t1;
             return t3;
        }
    };
return obj;
}());
Runtime.start();
for (var i=0;i<1000;i++){
  console.log(1);
}
Runtime.end();
console.log(  Runtime.get() );

/**
 * 6. 楼梯有20级，每次走1级或是2级，从底走到顶一共有多少种走法？用代码（递归）实现
 */
function f(num){
  if(num===1){
    return 1;
  }else if(num===2){
    return 2;
  }else{
    return f(num-1) +f(num-2);
  }
}
 console.log(f(20));//10946      

/**
  * 7. 写一个json对象深拷贝的方法，json对象可以多层嵌套，值可以是字符串、数字、布尔、json对象中的任意项（PS:尝试另外一种方法 var obj2 = JSON.parse( JSON.stringify(obj1) ）
  */
  方法1：
  var obj1={
    name:'xiao',
    age:22,
    other:{
      hobby:'reading'
    }
  }
  var obj2=JSON.parse(JSON.stringify(obj1));
 console.log(obj2.name);// xiao
 obj2.name='ling';
  console.log(obj2.name);//ling
  console.log(obj1.name);//xiao 

方法2：就是把对象的属性遍历一遍，赋给一个新的对象。
var m={
  name:'xiao',
    age:22,
    other:{
      hobby:'reading'
    }
}
function s(obj1){
  var obj2={};
  for(var key in obj1){
    if(typeof obj1[key]==='onject'){
      obj2[key]=s(obj1[key])
    }else{
      obj2[key]=obj1[key];
    }
  }
  return obj2;
}