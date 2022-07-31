# CSS 定位

<pre>
<a href="http://js.jirengu.com/meriv/1/edit?html,css,output"target="_blank">课堂实践js</a>
</pre>

## 定位与布局的区别：

定位是垂直于屏幕的
布局是屏幕的平面

## div 的分层

aaaaaa
<img src="css定位.png" alt="我也不知道啊">

## position

<pre>
position:static;(默认；待在文档流)
position:relative;(很少用)

z-index:auto(0)/1/2; (默认是 auto)
学会管理 z-index 不要写 9999

<strong>position:absolute;</strong>
(脱离原来位置 另起一层 比如对话框的关闭按钮以及鼠标提示)（定位基准是祖先里的非 static）

absolute 配合 z-index;某些浏览器如果不写 top/left 会位置错乱；善用 left:100%;善用 left:50%;加负 margin；
<a href="http://js.jirengu.com/zerazapifa/2/edit"target="_blank">课堂实践js</a>

position:fixed;(视口；可适用于广告和回到顶部按钮；手机上不要用)

</pre>

## 层叠上下文

z-index 属性设定了一个定位元素及其后代元素或 flex 项目的 z-order。当元素之间重叠的时候，z-index 较大的元素会覆盖较小的元素在上层进行显示。
