//js
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
    else
    {
        return document.defaultView.getComputedStyle(o,false)[key];//getComputedStyle获取元素最终应用的样式
    }
};
//拖拽效果的实现
var startDrag = function(bar, target, callback)//bar 触发拖拽元素  target 为移动元素  callback回掉函数
{
    //判断当前元素是否设置left top属性值
   //alert( getCss(target,"left"));
    if(getCss(target,"left") != "auto")
    {
        params.left = getCss(target,"left");
    }
    if(getCss(target,"top") != "auto")
    {
        params.top = getCss(target,"top")
    }

    var obody = document.getElementsByTagName("body")[0];

    //当鼠标按下的时候
    bar.onmousedown = function(event)
    {
        params.flag = true;
        if(!event)
        {
            event = window.event;
            //防止ie文字被选中
            bar.onselectstart = function()
            {
                return false;
            }
        }
        else
        {
            var e = event;
            params.currentX = e.clientX;//e.clientX是当前鼠标事件所处位置x
            params.currentY = e.clientY;
        }
    };
    document.onmousemove = function(event)
    {
        var e = event ? event: window.event;
        if(params.flag)//params.flag为true 表示鼠标按下
        {
            console.log(params.left);
            var nowX = e.clientX, nowY = e.clientY;//当前事件所处的x,y值得位置
            var disX = nowX - params.currentX,disY = nowY - params.currentY;//获取当前元素的偏移量
            target.style.left = parseInt(params.left) + disX + "px";
            target.style.top = parseInt(params.top) + disY + "px";

            var newleft = parseInt(getCss(target,"left")),
                newtop = parseInt(getCss(target,"top")),
                newright = parseInt(getCss(target,"right")),
                newbottom = parseInt(getCss(target,"bottom"))

            obody.style.overflow = (newleft<=0||newtop<=0||newright<=0||newbottom<=0) ? "hidden" : "auto";
        }
    };
    document.onmouseup = function()
    {
        params.flag = false;
        if(getCss(target,"left") != "auto")
        {
            params.left = getCss(target,"left");
        }
        if(getCss(target,"top") != "auto")
        {
            params.top = getCss(target,"top")
        }
    }

};





