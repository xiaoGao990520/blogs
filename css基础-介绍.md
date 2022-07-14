<pre>

css(层叠样式表)
1. 语法一：
选择器{
    属性名：属性值;
}
2. 写代码需要附加:
<pre>
border:1px solid red;
</pre>

3.写完代码需要使用 webstorm 调试

4.文档流：（高度宽度同理）
inline/span 从左到右的排序(不能用宽度指定)
block/div 从上到下的排序(默认自动计算宽度，能有多宽就有多宽)
inline-block 从左到右 从上到下(可以用 width)
overflow 自动溢出
注：div<style="margin:20px";width:auto;>

5.盒模型：分两种:content-box,border-box(包含了 border content padding margin)

.margin 合并只有上下合并没有左右合并
第一个元素和最后一个元素与 parent 不合并的办法：
overflow:hidden;

</pre>
