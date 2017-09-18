/*
 * 提示: el为dom元素，cls为操作的class， el.className获取el元素的class.从元素的className里面提取出class。
 */
 var reg=function(cls){
  return new RagExp('(^|\\s+)'+cls+'(\\s+|$)','g');
 }
 function hasClass(el,cls){
  return reg(cls).test(el.className);
 }
 function addClass(el,cls){
  if(!hasClass(el,cls)){
    el.className+=''+cls;
  }
}
function removeClass(el,cls){
    el.className=el.className.replace(reg(cls),'');
}

 /* 写一个函数isEmail(str)，判断用户输入的是不是邮箱  */
function isEmail(str){
  return /^\w+@\w+\.+\w/.test(str);  
}

 /* 写一个函数isPhoneNum(str)，判断用户输入的是不是手机号*/
function isPhoneNum(str){
 return /^1[1-9]\d{9}$/.test(str)
}
 /* 写一个函数isValidUsername(str)，判断用户输入的是不是合法的用户名（长度6-20个字符，只能包括字母、数字、下划线）*/
 function isValidUsername(str){
  return /^\w{6,20}$/.test(str)
 }
 /* 写一个函数isValidPassword(str), 判断用户输入的是不是合法密码（长度6-20个字符，只包括大写字母、小写字母、数字、下划线，且至少至少包括两种）
 * 
 */
 function isValidPassword(str){
  if(/^[a-zA-Z0-9_]{6,20}$/.test(str)){
    if(/^[a-z]{6,20}$/g.test(str) || /^[A-Z]{6,20}$/g.test(str) || /^\d{6,20}$/g.test(str) || /^[_]{6,20}$/g.test(str)){
      return false;
    }else{return true;}
  }else{return false;}
 }


 /**
  * 写一个正则表达式，得到如下字符串里所有的颜色（#121212）
  */

  var re = /*正则...*//#[a-fA-F0-9]{6}/gi;
  
  var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fddee #fd2 ";
  
  alert( subj.match(re) ) ; // #121212,#AA00ef


 /**
  * 下面代码输出什么? 为什么? 改写代码，让其输出hunger, world.
  */

  var str = 'hello  "hunger" , hello "world"';
  var pat =  /".*"/g; // 修改：var pat=/".*?"/g;
  str.match(pat); //[""hunger" , hello "world""] 因为.匹配除换行符之外的任何字符。并且正则表达式在默认情况下，是贪婪模式，会尽可能多的匹配。


  /**
   * 补全如下正则表达式，输出字符串中的注释内容. (可尝试使用贪婪模式和非贪婪模式两种方法)
   */
  str = '.. <!-- My -- comment \n test --> ..  <!----> .. '
  re = /.. your regexp ../ 
  
  str.match(re) // '<!-- My -- comment \n test -->', '<!---->'
贪婪模式:
str = '.. <!-- My -- comment \n test --> ..  <!----> .. ';
re =/<[^<]*>/g;
str.match(re);
非贪婪模式：
str = '.. <!-- My -- comment \n test --> ..  <!----> .. ';
re =/<[\w\W]*?>/g;
str.match(re);
  /**
   * 补全如下正则表达式
   */
  var re = /* your regexp */ /<[^>]+>/g;
  var str = '<> < a href="/"> <input type="radio" checked> <b>';
  str.match(re); // '< a href="/">', '<input type="radio" checked>', '<b>'