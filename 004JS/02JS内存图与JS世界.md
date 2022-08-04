# 内存图与 JS 世界

## 一、浏览器的功能

<pre>
下载解析执行   渲染JS引擎  线程进程
线程比进程更小
</pre>

## 二、JS 引擎

<pre>
功能：编译；优化；执行；垃圾回收；</pre>

## 三、执行 JS 代码

### 瓜分内存

<pre>
主要是：环境区（a b c） 数据区(Stack Heap)
Stack栈（不变的 顺序存放） Heap堆（会变 随机存放）
区分值和地址</pre>

### JS 入门

<pre>
1.console document 对象 数组 函数

2.window.console 保存地址/指向引用
window.object 打出她的结构 函数的实现
window.array 函数的实现
window是对象名 console Object Array 是属性名

注：
变量与对象是不同的东西</pre>

### JS 世界-原型链
