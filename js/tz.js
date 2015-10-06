?//js
var params = {//初始值
    left:0,
    top:0,
    currentX:0,
    currentY:0,
    flag:false
};

var getCss = function(o,key)
{//o为当前移动元素  key为元素的css属性值
    if(o.currentStyle)//如果支持ie浏览器
    {
        return o.currentStyle[key];
    }
    else{
        return document.defaultView.getComputedStyle(o,false)[key];//getComputedStyle获取元素最终应用的样式
    }
};

//拖拽效果的实现

var startDrag = function(bar,target,callback)//bar 触发拖拽元素  target 为移动元素  callback回掉函数
{
    //判断当前元素是否设置left top属性值
   alert( getCss(target,left));
};





