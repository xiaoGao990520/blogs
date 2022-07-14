```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
<div class="rainbow">
  <div>
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>
</pre>
<strong>.div 改为rainbow 且需要div>div>div>div>div>div>div> 在里面输入
```

CSS 内容：

<pre>
* {
  box-sizing: border-box;
}
body{
  border:1px solid black;  //每次都需要写到
  background:white;   背景;
}
.rainbow {
  height: 200px;    //可以就此省去下面所有的border: 1px solid hsl(420, 100%, 100%);
  overflow: hidden;
}
.rainbow div{
  overflow: hidden;   //rainbow所有的溢出的都需要hidden
}
.rainbow>div {    //编写每一个彩虹的代码
  width: 400px;
  height: 400px;
  background: red;
  border-radius: 50%;
}
.rainbow>div>div {
  background: hsl(60, 80%, 50%);  //色调、饱和度和亮度
  height: 380px;
  margin: 10px;
  border-radius: 50%;
}
.rainbow>div>div>div {
  background: hsl(120, 80%, 50%);
  height: 360px;
  margin: 10px;
  border-radius: 50%;
}
.rainbow>div>div>div>div {
  background: hsl(180, 80%, 50%);
  height: 340px;
  margin: 10px;
  border-radius: 50%;
}
.rainbow>div>div>div>div>div {
  background: hsl(240, 80%, 50%);
  height: 320px;
  margin: 10px;
  border-radius: 50%;
}
.rainbow>div>div>div>div>div>div {
  background: hsl(300, 80%, 50%);
  height: 300px;
  margin: 10px;
  border-radius: 50%;
}
.rainbow>div>div>div>div>div>div>div {
  background: hsl(360, 80%, 50%);
  height: 280px;
  margin: 10px;
  border-radius: 50%;
}
.rainbow>div>div>div>div>div>div>div>div {
  border: 1px solid hsl(420, 100%, 100%);
  background: hsl(420, 100%, 100%);
  height: 260px;
  margin: 10px;
  border-radius: 50%;
}
</pre>
