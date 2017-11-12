# j-resize

> a jQuery plugin for resize element

## @params

```
jResize(opt);
```

```
minW: 100,      // 最小宽度
maxW: 300,      // 最大宽度
minH: 100,      // 最小高度
maxH: 300,      // 最大高度
noX: false,     // X 轴不可拖动
noY: false,     // Y 轴不可拖动
callback:       // 回调函数 obj (当前元素改变后的宽高，如属性未改变，则为 null)

obj = {
    width: null,
    height: null
}
```

## Usage

```
// es6:     npm install jquery && j-resize
import $ from "jquery";
require("j-resize");

// browser:
<script src="jquery.js"></script>
<script src="j-resize.js"></script>

$(function() {
    $(".drag").jResize({
        minW: 150,
        minH: 150,
        maxW: 500,
        maxH: 500,
        noY: true,
        callback: function(obj) {
            console.dir(obj);
        }
    });
})
```

