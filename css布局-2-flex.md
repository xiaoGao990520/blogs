一、flex container 的样式有哪些:
让一个元素如何成为 flex 容器

<pre>
.container{
    display:flex;
}
</pre>

改变 items 流动方向：

<pre>
.container{
    flex-direction:row |row reverse | column |column-reverse;
}
</pre>

改变折行：

<pre>
.container{
    flex-wrap:nowrap|wrap|wrap-reverse;
}
</pre>

主轴对齐方向：

<pre>
.container{
    justify-content:flex-start | flex-end ;
}
</pre>

次轴对其：

<pre>
.container{
    align-items:stretch |flex-start;
}
</pre>

二、flex item 有哪些属性：

<pre>
1.item 上面加order; 也可以是个负数
2.item上面加flex-grow;
3.item上面加 flex-shrink:0;
4.flex控制基准宽度;
5.flex:flex-grow flex-shrink flex-basis;
6.align-self定制align-items；
</pre>

重点:

<pre>
display:flex    创造一个container容器
flex-wrap:wrap;    换行
order 换顺序
<strong>flex-direction:row/row-reverse/column/column-reverse;    横着还是竖着放

justify-content:center/space-between/space-around/flex-start/flex-end;  前提是布局怎么在主（默认是X前提不改变flex-direction）轴上放

align-items:center/flex-end/;  前提是column布局在次轴（默认是Y前提不改变flex-direction）上放

flex-flow (flex-direction与flex-wrap连接)
</strong>
</pre>
<pre>
例子:<a href="http://js.jirengu.com/dojitihufe/6/edit"target="_blank">flex container items</a>
青蛙游戏：<a href="https://flexboxfroggy.com/#zh-cn"target="_blank">青蛙游戏</a> 
布局：<a href="http://js.jirengu.com/ruhizazaka/5/edit"target="_blank">布局</a> 
</pre>
<pre>
注：
不能写死。写死：width:100px；
✓ width: 50%
✓ max-width: 100px
✓ width: 30vw
✓ min-width: 80%
✓ 特点：不使用 px，或者加 min max 前缀
必须要设计稿
</pre>
