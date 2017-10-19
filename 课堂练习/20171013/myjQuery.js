function aa (select){
	if(typeof select == 'string'){//当参数为字符串时，可能为选择器，可能为标签
		let reg=/^<[a-z][a-z1-6]{0,10}>$/;//正则表达式，判断是否为标签
		if(reg.test(select)){//如果是标签，那么创建一个指定元素
			this[0]=document.createElement(select.slice(1,-1));
			this.length=1;
		}else{//如果不是标签，即为选择器，那么将获取指定的元素
			let eles=document.querySelectorAll(select);//获取所有等于传进来的标签的元素
			for(let i=0;i<eles.length;i++){
				this[i]=eles[i];//将每个元素添加成为一个属性
			}
			this.length=eles.length;//一共获取了几个元素			
		}
	}else if(typeof select == 'function'){//当参数为函数时，调用这个函数
		document.addEventListener('DOMContentLoaded',function(){
			select();
		},false)
	}else if(typeof select=='object'&& select.nodeType==1){//当参数为DOM对象时，获取并保存该元素
		this[0]=select;
		this.length=1;
	}
}
aa.prototype.each=function(callback){
	for(let i=0;i<this.length;i++){
		callback(i,this[i]);
	}
}//为每个获取到的元素循环执行调用的函数
aa.prototype.css=function(attrObj){
	this.each(function(index,obj){
		for(let j in attrObj){
			obj.style[j]=attrObj[j];
		}
	})
	return this;//为了实现链式调用
}//设置样式
aa.prototype.html=function(value){
	this.each(function(index,obj){
		obj.innerHTML=value;
	})
	return this;
}//设置内容
aa.prototype.click=function(callback){
	this.each(function(index,obj){
		obj.addEventListener('click',function(){
			callback.call(obj);
		})
	})
	return this;
}//添加点击事件
aa.prototype.addClass=function(classes){
	this.each(function(index,obj){
		obj.classList.add(classes);
	})
	return this;
}//添加类
aa.prototype.appendTo=function(selector){
	let parents=document.querySelectorAll(selector);
	let element=this[0];
	this.length=parents.length;
	for(let i=0;i<parents.length;i++){
		let copy=element.cloneNode(true);
		this[i]=copy;
		parents[i].appendChild(copy);
	}
	return this;
}//插入元素