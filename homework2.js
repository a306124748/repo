// 1. 用 splice 实现 push、pop、shift、unshift方法 （***）

var arr=[2,4,6,8,10]

// push
function push(arr,a1){
  arr.splice(arr.length,0,a1)
  return arr.length;
}
console.log(push(arr,12)); //6
console.log(arr);// [2, 4, 6, 8, 10, 12]
 
 //pop 
 function pop(arr){
  return arr.splice(arr.length-1,1)[0];
 }
 console.log(pop(arr)); // 12
 console.log(arr); //[2,4,6,8,10]

// shift 
function shift(arr){
  return arr.splice(0,1)[0];
}
console.log(shift(arr));//2
console.log(arr);//[4,6,8,10]

//unshift
function unshift(arr,a1){
  arr.splice(0,0,a1);
  return arr.length;
}
console.log(unshift(arr,2)); //5
console.log(arr);//[2,4,6,8,10]


//2. 使用数组拼接出如下字符串 （***）
var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装']
};

function getTplStr(data){
  var arr=[];
  arr.push('<dl class="product">');
  arr.push('<dt>'+data.name+'</dt>');
  for(var i=0;i<data.styles.length;i++){
    arr.push('<dd>'+data.styles[i]+'</dd>');
  }
  arr.push('</dl>');
  return arr.join("\n");
}
var result = getTplStr(prod); 
console.log(result);

//result为下面的字符串
/*<dl class="product">
    <dt>女装</dt>
    <dd>短款</dd>
    <dd>冬季</dd>
    <dd>春装</dd>
</dl>*/

//3. 写一个find函数，实现下面的功能 （***）
var arr = [ "test", 2, 1.5, false ]
function find(arr,item){
    return arr.indexOf(item);
}

var arr = [ "test", 2, 1.5, false ]
find(arr, "test") // 0
find(arr, 2) // 1
find(arr, 0) // -1


/*4. 写一个函数filterNumeric，把数组 arr 中的数字过滤出来赋值给新数组newarr，
原数组arr不变 （****）*/
function filterNumberic(arr) {
  var newarr=[];
    for(var i=0; i<arr.length; i++){
        if(typeof(arr[i])==="number"){
        newarr.push(arr[i]);
        }
    }
    return newarr;
}

arr = ["a", "b", 1, 3, 5, "b", 2];
newarr = filterNumberic(arr);  //   [1,3,5,2]


/*5. 对象obj有个className属性，里面的值为的是空格分割的字符串(和html元素的class特性类似)，
写addClass、removeClass函数，有如下功能：(****)*/
var obj = {
           className: 'open menu'
       };
       function addClass(obj, value) {
           var arr = obj.className.split(" ");
           if (arr.indexOf(value) == -1) {
               arr.push(value);
               obj.className = arr.join(" ");
               return obj.className;
           }
           else {
               console.log("因为" + value + "已经存在，此操作无任何办法");
           }
       }
       function removeClass(obj, value) {
           var arr = obj.className.split(" ");
           if (arr.indexOf(value) != -1) {
               arr.splice(arr.indexOf(value), 1);
               obj.className = arr.join(" ");
               return obj.className;
           }
           else {
               console.log("因为"+value + "不存在，所以此操作无任何影响");
           }
       }
addClass(obj, 'new') // obj.className='open menu new'
addClass(obj, 'open')  // 因为open已经存在，所以不会再次添加open
addClass(obj, 'me') // me不存在，所以 obj.className变为'open menu new me'
console.log(obj.className)  // "open menu new me"

removeClass(obj, 'open') // 去掉obj.className里面的 open，变成'menu new me'
removeClass(obj, 'blabla')  // 因为blabla不存在，所以此操作无任何影响


/*6. 写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串，
如 (***)*/
1.方法1
function camelize(str){
    var arr=str.split("-");
    for(var i=1;i<arr.length; i++){
        arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1);    
    }
    return  arr.join("");
}
2.方法2
 function camelize(str){
  return str.replace(/\-(\w)/g,function (match,letter){
    return letter.toUpperCase()
  })
}

camelize("background-color") == 'backgroundColor'
camelize("list-style-image") == 'listStyleImage'

//7. 如下代码输出什么？为什么? (***)
arr = ["a", "b"];
arr.push( function() { alert(console.log('hello hunger valley')) } );
arr[arr.length-1]() 
// 弹框显示：undefined，因为console.log('hello hunger valley')返回值是undefined。
// 控制台显示:hello hunger valley





/*8. 写一个函数filterNumericInPlace，过滤数组中的数字，
删除非数字。要求在原数组上操作 (****)*/
function filterNumericInPlace(arr) {
  for(i=arr.length-1;i>=0;i--){
    if (typeof arr[i] !== 'number'){
    arr.splice(i,1);
    }
  }
}
arr = ["a", "b", 1, 3, 4, 5, "b", 2];
//对原数组进行操作，不需要返回值
filterNumericInPlace(arr);
console.log(arr)  // [1,3,4,5,2]


//9. 写一个ageSort函数实现数组中对象按age从小到大排序 （***）
1.function ageSort(people) {
  people.sort(function(a,b){return a.age - b.age;});
  return people;
}
2.function ageSort(arr){
  var i=arr.length-1;
  while(i>0){
    var pos=0;
    for(var j=0;j<i;j++)
      if (arr[j].age>arr[j+1].age) {
        pos=j;
        var tmp=arr[j];arr[j]=arr[j+1];arr[j+1]=tmp;
      }
      i=pos;
  }
  return arr;
}

var john = { name: "John Smith", age: 23 }
var mary = { name: "Mary Key", age: 18 }
var bob = { name: "Bob-small", age: 6 }
var people = [ john, mary, bob ]
ageSort(people) // [ bob, mary, john ]



/*10. 写一个filter(arr, func) 函数用于过滤数组，接受两个参数，
第一个是要处理的数组，第二个参数是回调函数(回调函数遍历接受每一个数组元素，
当函数返回true时保留该元素，否则删除该元素)。实现如下功能： （****）
*/
1.function filter(arr,func) {
   return arr.filter(func);
}

2.function filter(arr,fun){
  for(var i=0;i<arr.length;i++){
    if (fun(arr[i])!==true){
      arr.splice(i,1);
      i--;
    }
  }
return arr;
}

function isNumeric (el){
    return typeof el === 'number';
}
arr = ["a",3,4,true, -1, 2, "b"]

arr = filter(arr, isNumeric) ; // arr = [3,4,-1, 2],  过滤出数字
arr = filter(arr, function(val) { return  typeof val === "number" && val > 0 });
// arr = [3,4,2] 过滤出大于0的整数



//字符串
//1.写一个 ucFirst函数，返回第一个字母为大写的字符 （***）
function ucFirst(str) {
  return str[0].toUpperCase()+str.slice(1);
}
ucFirst("hunger") == "Hunger"

/*2.写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，
会把str截断到maxlength长，并加上...，如 （****）*/
function truncate(str,maxlength) {
  if(str.length>=maxlength){
    str=str.slice(0,maxlength)+"...";
  }
  return str;
}
truncate("hello, this is hunger valley,", 10) == "hello, thi...";
truncate("hello world", 20) == "hello world"

//数学函数
//1. 写一个函数，获取从min到max之间的随机整数，包括min不包括max （***）
 function ran(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
 }

//2. 写一个函数，获取从min都max之间的随机整数，包括min包括max （***）
function randomNum(min,max) {
  return Math.floor(Math.random() * (max - min+1) + min);
}

//3. 写一个函数，获取一个随机数组，数组中元素为长度为len，最小值为min，最大值为max(包括)的随机整数 （***）
function randomArr(len,min,max) {
  var arr=[];
  for(var i=0;i<len;i++){
    arr.push(Math.floor(Math.random()*(max-min+1)+min));
  }
  return arr;
}

//4. 写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。
var str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function getRandStr(len){
  var arr=[];
  for(var i=0;i<len;i++){
    arr[i]=str[Math.round(Math.random()*str.length)];
  }
  return arr.join("");
}
 getRandStr(10); // 0a3iJiRZap