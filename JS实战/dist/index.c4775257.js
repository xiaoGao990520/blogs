let html = document.querySelector("#html"); // 此函数的含义是利用CSS选择器找到demo
let style = document.querySelector("style");
let string = `/* 你好，我是一名前端新人
* 接下来我将加上样式了
* 我要加的样式是 */
#div1{
    border:1px solid red;
    height:200px;
    width:200px;
}
/* 接下来我把 div 变成一个八卦图
 * 首先成为一个圆 
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(9,9,121,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个风火轮 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left: 50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left: 50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`; // 即将打印出来的字母
// 5. 已经在下面进行了innerHTML,然后div1创建一个框 位置放在哪里卸载了html
let string2 = "" // 2. 缓存显示string内容
;
// string = string.replace(/\n/g, "<br>");     // 2. 正则表达式，将所有的\n改为<br> 但是会出现 <
// console.log(string.length)          // 用于测试采用的是n 还是n+1 n-1
let n = 0; //  使之从0开始计时 即从n=0开始   // 2. 改为-1
// demo.innerHTML = string.substring(0, n)      // html上打印出来的内容保留    // 2. 删除此句话 为了只写一遍
let step = ()=>{
    setTimeout(()=>{
        // n = n + 1;            // 3. 删除n=-1  改为0  删除n=n+1
        if (string[n] === "\n") string2 += "<br>"; // 5. 遇到回车的时候 加 br
        else if (string[n] === " ") string2 += "&nbsp;"; // 5. 遇到空格的时候有空格
        else string2 += string[n];
        // 2. 如果是回车就不照搬
        // 4. 简写：string2 += (string[n] === "\n" ? "<br>" : string[n])
        // 2. 如果不是回车就照抄  放在2里面 等着缓存表达
        html.innerHTML = string2; // 2. 是下面这串字母的延申
        style.innerHTML = string.substring(0, n); // 5. 利用inner然后进行style
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        // demo.innerHTML = string.substring(0, n);    // 打印出来字母
        // length 55
        if (n < string.length - 1) {
            // n = 53
            n += 1;
            step(); // 54
        }
    }, 50);
};
step(); // 执行函数
 // 2. 以下把CSS加上去
 // 3. 试出来是否需要加一减一
 // 4. 可以将if else语句改为疑问语句
 // 5. 开始写style
 // 6. 利用 before after 伪元素

//# sourceMappingURL=index.c4775257.js.map
