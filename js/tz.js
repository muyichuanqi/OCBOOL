?//js
var params = {//��ʼֵ
    left:0,
    top:0,
    currentX:0,
    currentY:0,
    flag:false
};

var getCss = function(o,key)
{//oΪ��ǰ�ƶ�Ԫ��  keyΪԪ�ص�css����ֵ
    if(o.currentStyle)//���֧��ie�����
    {
        return o.currentStyle[key];
    }
    else{
        return document.defaultView.getComputedStyle(o,false)[key];//getComputedStyle��ȡԪ������Ӧ�õ���ʽ
    }
};

//��קЧ����ʵ��

var startDrag = function(bar,target,callback)//bar ������קԪ��  target Ϊ�ƶ�Ԫ��  callback�ص�����
{
    //�жϵ�ǰԪ���Ƿ�����left top����ֵ
   alert( getCss(target,left));
};





