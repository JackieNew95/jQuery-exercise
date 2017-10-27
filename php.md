# php

必须在服务器环境下面才能运行

header('Content-type:text/html;charset=utf8');告诉浏览器用utf8显示PHP文件



字符的连接（相当于+号）：

​	.

属性（相当于.号）：

​	->

声明变量：（实际上不用声明直接写了用就行）

$



fetch_all：将结果集转换为关联数组

query('set names utf8');查询字符集转换成utf8编码



php写SQL语句要写双引号

页面上打印：

​	var_dump();





$_REQUEST不管传过来是什么方式的都能接收





遍历数组

count()用来得到数组长度

include//PHP互相引用PHP中间引用html





php里包含js

```php
echo "<script>location.href='main.php'</script>";
echo "<script>alert(1)</script>";
```

