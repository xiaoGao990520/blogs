# 网页其实是一个树
## JS如何操作这棵树
浏览器往window上加一个document即可      
## JS用document操作网页
这就是Document Object Model文档对象模型---Dom
## Dom可以获取元素（element），也叫标签（tag）
### Dom有很多API 
例如：可以采用window.idxxxx或者直接idxxxx       
其他的获取方式详见课件吧 不推荐使用(document.getElementByld)        
### 工作使用哪个
querySelector和querySelectorAll     
做demo直接用idxxx
## Dom可以获取特殊元素
document.documentElement(获取html元素)
document.head（获取head元素）
document.body（body）
window（获取窗口 窗口不是元素）
document.all（获取所有元素）（第六个falsy值）

