$('.ul1+ul').css('background','blue')//里面的属性只有一条的时候可以这么写

jQuery中无论是否能获取到元素都会返回真值，所以判断是要用length

$()函数的基本用法:

- 获取元素（选择器、范围）
- 创建元素（尖括号）
- 添加事件（函数）
- 打包（DOM元素）
- 打包函数（用来添加事件）
- 空的（返回空的jQuery对象）





# 完成后再执行

```
	$(document).ajaxComplete(function () {
        tips.animate({width:'100%'},function(){
          tips.animate({height:10})
        })//在后面加一个函数
    });
```



```
	$(document).ajaxComplete(function () {
        tips.animate({width:'100%'}).queue(function () {
            $(this).width(0);
        });//通过队列实现完成上移动作后再执行某动作，animate自己就是fx队列里的，并且自带一次dequeue
    });
```

```
	$(document).ajaxComplete(function () {
        tips.animate({width:'100%'}).animate({width:'100%'})
    });animate自己就是fx队列里的,可以直接接着写就会先执行前面的再执行后面的，并且自带一次dequeue
```

```
	$(document).ajaxComplete(function () {
        tips.animate({width:'100%'}).animate({width:'100%'})。queue(function(){
          alert(1);
        })
    });animate自己就是fx队列里的,可以直接接着写就会先执行前面的再执行后面的，并且自带一次dequeue
```

```
 	$(document).ajaxComplete(function () {
        tips.animate({width:'100%'}).animate({width:'100%'}).queue(function(){
          alert(1);
          $(this).dequeue;
        }).queue(function(){
          alert(2);
        })
    });animate自己就是fx队列里的,可以直接接着写就会先执行前面的再执行后面的，并且自带一次dequeue,再加就得自己写dequeue
```



















