// 下面的代码输出多少？修改代码让fnArr[i]() 输出 i。使用**两种以上的**方法
 var fnArr = [];
    for (var i = 0; i < 10; i ++) {
        fnArr[i] =  function(){
    	    return i;
        };
    }
console.log( fnArr[3]() );// 10 因为i是全局变量，遍历后i为10，输出结果都为10.
// 修改方法1：
var fnArr=[];
for (var i=0;i<10;i++){
	fnArr[i]=function(n){
		return function(){
			return n;
		}
	}(i)
}
console.log(fnArr[3]());

// 修改方法2：
var fnArr=[];
for (var i=0;i<10;i++){
	fnArr[i]=(function(){
		var n=i;
		return function(){
			return n;
		}
	})();
}
console.log(fnArr[3]());
// 修改方法3：
var fnArr=[];
for (var i=0;i<10;i++) {
    (function (i) {
        fnArr[i]=function(){
            return i;
        };
    })(i)
}
console.log(fnArr[3]());

// 使用闭包封装一个汽车对象，可以通过如下方式获取汽车状态
var Car = (function () {
    var speed = 0;
    return {
        setSpeed: function (n) {
            Car.speed = n;
        },
        getSpeed: function () {
            return Car.speed;
        },
        accelerate: function () {
            Car.speed+=10;
        },
        decelerate: function() {
            Car.speed-=10;
        },
        getStatus: function() {
            if (Car.speed>0) {
                return 'running';
            }
            return 'stop';
        }
    }
})();

Car.setSpeed(30);
Car.getSpeed(); //30
Car.accelerate();
Car.getSpeed(); //40;
Car.decelerate();
Car.decelerate();
Car.getSpeed(); //20
Car.getStatus(); // 'running';
Car.decelerate(); 
Car.decelerate();
Car.getStatus();  //'stop';
//Car.speed;  //error

// 写一个函数使用`setTimeout`模拟`setInterval`的功能
方法1：
var i=1;
var timer=setTimeout(function(){
	alert(i++);
	timer=setTimeout(arguments.callee,2000);
},2000) ;
方法2：
var n=0;
 function func() {
      setTimeout(function(){
        alert(n++);
        func();
      },1000);
    }

// 写一个函数，计算setTimeout平均[备注：新加]最小时间粒度 
var start=new Date();
  var i=0;
  var clock=setTimeout(function(){
        i++;
        if(i===100){
          clearTimeout(clock);
          var end=new Date();
          console.log((end-start)/i);
        }
        rscript = setTimeout(arguments.callee,0);
      },0)

// 下面这段代码输出结果是? 为什么?

setTimeout(function(){
    a = 2;
    console.log(a);// 2
}, 0);
var a ;
console.log(a);// undefined
a = 3;
console.log(a);//3
// 执行结果为：undefined 3 2。 因为setTimeout的运行机制就是当前脚本的同步任务和”任务队列”中已有的事件，全部处理完以后，才会执行setTimeout(func,0)指定的任务。

// 下面这段代码输出结果是? 为什么?
var flag=true;
setTimeout(function(){
    flag = false;
},0)
while(flag){}
console.log(flag);
// 没有输出结果。因为运行顺序是：while、console.log、setTimeout回调函数。
// 所以while一直是true，会进入死循环。

// 下面这段代码输出？如何输出`delayer: 0, delayer:1...`（使用闭包来实现）
for(var i=0;i<5;i++){
	setTimeout(function(){
         console.log('delayer:' + i );
		
	}, 0);
	console.log(i);
}
// 执行结果：0 1 2 3 4 delayer：5
//修改方案：
1.
for(var i=0;i<5;i++){
	setTimeout(function(i){
         console.log('delayer:' + i );
		
	}, 0,i);
	console.log(i);
}

2.
for(var i=0;i<5;i++){
  (function func(n){
  	setTimeout(function(){
         console.log('delayer:' + n );
		
	}, 0)
  })(i);
  console.log(i);
}