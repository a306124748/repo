// 1.<ul class="ct">
//   <li>生活</li>
//   <li>总是</li>
//   <li>美好</li>
// </ul>
//   <script>
//     todo..
//   </script>
//    代码要求：点击相应的元素，控制台打印出元素的内容。
方法1：
var lst = document.getElementsByTagName('li')
for (var i=0;i< lst.length;i++){
 lst[i].addEventListener('click',function f(e){
  console.log(this.innerText)
})
}
方法2：
var lst = document.getElementsByClassName('ct')[0]
lst.addEventListener('click',function f(e){
  if(e.target.nodeName==='LI'){
    console.log(e.target.innerText)
  }
})


//   2.  <ul class="ct">
//   <li>生活</li>
//   <li>总是</li>
//   <li>美好</li>
// </ul> 
// <input class="ipt-add-content" placeholder="添加内容"/>
// <button id="btn-add-start">开头添加</button>
// <button id="btn-add-end">结尾添加</button>
// <script>
// //todo..
// </script>
// 补全代码，要求：当点击按钮开头添加时在<li>生活</li>元素前添加一个新元素，内容为用户输入的非空字符串；当点击结尾添加时在<li>总是</li>后添加用户输入的非空字符串。
//                     当点击每一个元素li时控制台展示该元素的文本内容。
代码预览：http://js.jirengu.com/yubumaguvu/2/edit

var ol=document.getElementsByTagName('ul')[0],
    oi=document.getElementsByTagName('li'),
    input=document.getElementsByTagName('input')[0],
    start=document.getElementById('btn-add-start'),
    end=document.getElementById('btn-add-end')
start.addEventListener('click',function(){
   if(!input.value){
  alert("请输入内容")
  }else{
  var li=document.createElement('li')
  li.innerText=input.value
  ol.insertBefore(li,oi[0])
  }                                 
})
end.addEventListener('click',function(){
   if(!input.value){
  alert("请输入内容")
  }else{
    var li=document.createElement('li')
    li.innerText=input.value
    ol.appendChild(li)
  } 
})
ol.addEventListener('click',function(e){
  if(e.target.nodeName==='LI'){
    console.log(e.target.innerText)
  }
})


// 3.<ul class="ct">
//   <li data-img="http://owkli9j79.bkt.clouddn.com/12.jpg">鼠标放置查看图片1</li>
//   <li data-img="http://owkli9j79.bkt.clouddn.com/7f901d17gw1eakjv8dzu2j20c10i2jrw.jpg">鼠标放置查看图片2</li>
//   <li data-img="http://owkli9j79.bkt.clouddn.com/Koala.jpg">鼠标放置查看图片3</li>
// </ul>
// <div class="img-preview"></div>
// <script>
// //todo...
// </script>
//   补全代码，要求：当鼠标放置在li元素上，会在img-preview里展示当前li元素的data-img对应的图片。

代码预览：http://js.jirengu.com/yubumaguvu/3/edit

var ol=document.querySelector('.ct'),
    div=document.querySelector('.img-preview'),
    img=document.createElement('img')    
ol.addEventListener('mouseover',function(e){
  img.src=e.target.getAttribute('data-img')
  div.appendChild(img)
})


