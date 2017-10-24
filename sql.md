## SQL

### 查找

​     查  什么信息 从  哪个表

```sql
select * from student;
```

### 修改(更新)

​      更新    哪个表  设置  字段 =值     当        条件

```
update student set age = 22 where id = 2;
```

### 插入

> 插入顺序可以和表里不一样，但是前后要对应

​          插入到      哪张表                                 字段                                   值为                                值

```sql
insert into student (id,name,sex,age,classes,address,tel) values (1,"张三","男",18,"WUIF1707-1","山西省","12345678900"),(2,"张八","男",18,"WUIF1707-1","山西省","12345678900")
```

### 删除

> 一定记住加条件！不然就全删了

​     删除    从        哪张表      当                    条件

```sql
delete from `student` where `id` = 5
```

## cmd

### 连接

```
mysql -uroot -p;
```

### 查看库

```
show database;
```

### 选择

```
use 数据库名字;
```

### 查看表

```
show tables;
```

### 查看表的结构

```
desc 表名字
```

例子：

```sql
mysql> show databases;
mysql> use ajaxtest
mysql> show tables;
mysql> desc student;
mysql> select * from student;
mysql> select name,sex,age from student;
mysql> update student set age=22 where id = 3 ;
mysql> update student set name="孙七" where id=4;
mysql> insert into student (id,name,sex,age,classes,address,tel)values(5,"赵六","男",20,"WUIF1707-1","山西省",75849379004);
mysql> delete from student where id = 4;
```



