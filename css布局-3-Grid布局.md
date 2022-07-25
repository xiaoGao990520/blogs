Grid 与 flex 很像:

<pre>
display: grid;
grid-template:1fr 50px/20% 1fr;(行留50px 列留20%)
grid-template-columns:50% 50% 0% 0;  
grid-template-rows:repeat(8,12.5%); (分成重复八分)
grid-template-columns:1fr 5fr; (分成六分)
grid-area: 1 / 1 / 3 / 6;
grid-column/cow: 2 / 4;(列/行的合并)
order:-1  0(默认)  1;
</pre>
<pre>表示分成列行的个数 
grid-template-columns: 20% 20% 20% 20% 20%;(划分区域)
grid-template-rows: 20% 20% 20% 20% 20%;(划分区域)
grid-column-start:3; 左数第三列的区域（只是一格）
grid-column-end:4; start与end属性将网格拓展到多列。
grid-template-columns:50px 1fr 1fr 1fr 50px;注：当列的宽度采用像素，百分比或者em的单位的时候，其他使用fr单位设置的列将会平分剩下的空间。
<strong>start与end可以为负值 右数为-1</strong>
grid-column-end:span 2; 注：span为跨度 须为正数
span后面开始数的列数然后放在后面
</pre>

<pre>
<a href="https://cssgridgarden.com/#zh-cn"target="_blank">Grid练习小游戏</a>
<a href="http://js.jirengu.com/raqecixilu/8/edit"target="_blank">Grid实践</a>
</pre>
