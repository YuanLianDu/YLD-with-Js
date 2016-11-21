# Dom 总结 

[Dom Api](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)



获取元素常用方法：

+ getElementById()
+ getElementsByTagName()
+ getElementsByClassName()
+ getAttribute()
+ setAttribute()


## DOM 事件模型:

### 注册事件监听器：

**1.`EventTarget.addEventListener`**

```
<button id="my_button_one">click button one</button>

<script>
 var myButtonOne = document.getElementById('my_button_one');
    myButtonOne.addEventListener('click',function () {
        alert('Hello world,button one');
    });
</script>
```


**2.HTML属性**

```
<button id="my_button_two" onclick="alert('hello world,button two')">click button two</button>
```


**3.DOM 元素属性**

```
<button id="my_button_three" >click button three</button>

<script>
 var myButtonThree = document.getElementById('my_button_three');
    myButtonThree.onclick = function (event) {
        alert('Hello world,button three');
    }
</script>
```


 ## Examples
 
 
 ###  Example One:  高度和宽度
 
 利用数循环展示了在不同尺寸的图片时使用其 height 和 width 属性的情况：
      
 
 + `getElementById()`
 + `height width` 与 `style.height style.width` 的区别？？？？？？
 
  [example one 代码]()
  
 ### Example Two: 图片属性
 
 修改图片的border属性
  + `document.getElementById('img1').style.border = width + "px solid green";`
 
  [example two 代码]()
 
 ### Example Three: 操作样式
  
  利用html属性来操作样式，点击按钮，字体颜色、大小改变
  
  ```
  var p =  document.getElementById('pid');
          p.style.color = "blue";
          p.style.fontSize = "32pt";
  ```
 
  [example three 代码]()
 
 ### Example Four: 使用样式表
 
 styleSheets是document对象的一个属性，返回的是载入文档的样式列表。
 你可以通过styleSheets、style和CSSRule对象来获取样式表和每条样式规则.
 下面的例子把所有的样式规则中的选择器文本（字符串）打印到控制台中。
 
 + `ss = document.styleSheets`
 + `ss[i].cssRules[j].selectorText`
 
 
  [example four 代码]()
 
 ### Example Five: 冒泡事件
  
  本demo阐述了事件是如何触发以及在 DOM 中是如何处理的。
  
  当这个 HTML 文档 BODY 载入的时候，在 TABLE 的首行注册了一个事件监听器。
  事件监听器通过执行函数 stopEvent 处理事件，从而改变在该表的底部单元的值。
  
  + ` elem.addEventListener("click", stopEvent, false);`
  + `ev.stopPropagation();`
  
  [更多CSS 参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)
  [example five 代码]()
  
 ### Example Six: getComputedStyle [Api](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle#摘要)
 
 + `getComputedStyle()`
 + `getPropertyValue()`
 
 ```
  var RefDiv    = document.getElementById("d1");
  document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("height");
 ```
 
  [example six 代码]()
  
 ### Example Seven: 显示事件对象的属性
 
 创建一个表格，显示事件`load`的属性。
 
 知识点：创建表格 
 + `createElement("table")`
 + `table.createTHead()`
 + `table.insertRow(-1)` ： －1 代表将该行追加为最后一行
 + `row.insertCell(-1)`
 + `createTextNode(text)`
 + `body.appendChild(table)`
 
 `for (... in ...)`
 
  [example seven代码]()
  
 
 ### Example Eight: 使用 DOM Table 接口(Interface)
 
 是对Example Seven: 显示事件对象的属性的巩固，使用table接口，插入一行元素。
 
 注意本案例，要先渲染页面再加载script，不然会找不到元素。
 
 [更多关于table的接口](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement#Methods)
 
 [example eight 代码]()
 



