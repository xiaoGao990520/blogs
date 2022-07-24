<pre>
a 标签：  
  属性：href target download rel=noopener
  重点：href的取值：(网址路径伪协议（代码邮箱电话）id)
        <a href="https://google.com" target="_blank">超链接</a>
        target的取值：
        _blank _top _parent _self （内置名字）
        windows的name iframe的名字
        iframe内嵌窗口
table标签：
 thead tbody tfoot  <tr> <th> <td>
 </pre>

```
     table {
       width: 400px;  宽度
       table-layout: auto;  须有
       border-spacing: 0px;  //标准
       border-collapse: collapse; //标准
     }
     td,
     th {
       border: 1px solid black;
     }
```

<pre>
img标签：
作用：显示照片，给get请求
属性：alt（若图片加载失败则显示的名称）
     width height （高宽比）
     scr （源文件）
事件：onload(图片加载成功) onerror（图片加载失败）
响应式：css:
</pre>

```
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
```

<pre>
form表格标签：
</pre>

```
form action="/yyy" method="POST" autocapitalize="on" target="a"
```

<pre>
action 表示后端链接 method 为 post/get autocapitalize 指用户名称是否显示 target 指定 iframe 内嵌
事件：onsubmit
注意：button 后面可以加任意东西 而 input 不能只能： input type="submit" value="搞起"
</pre>

input 标签：
作用让用户输入内容详见 form.html

</pre>
