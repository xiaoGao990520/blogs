# 画板
1. 通过console.log 调试大法将client中的XY坐标的出来
2. 通过把div把鼠标点击的位置创建元素出来
3. 将元素用style示意
# 利用canvas来画点
1.详见 JSindex画点.html  
2.你得先cd到当前目录才能hs . -c-1
# 利用canvas来画线
1. 先定义触摸的代码 ontouchstart (以下代码从网上搜索 如 js canvas end line)
    ```
    var isTouchDevice = 'ontouchstart' in document.documentElement;
    ```
2. 然后利用if else 来让流程走向两个方向:
    ```
    if (isTouchDevice){
        canvas.ontouchstart
        canvas.ontouchmove
    }else{
        canvas.onmousedown
        canvas.onmousemove
        canvas.onmouseup
    }
3. 声明last的函数,即操作的即时刻作为上一次的起点,结果是连起来以后变成了线
    ```
    let last 
    ```
4. ctx有关代码暂时不用记得,从网上抄的 暂时先用  
    记得使用console.log调试大法,即:console.log(1)在检查工作台的时候可以打印出1否则这行代码有误,即相当于border:1px solid red;