//一、工厂函数
var $dlgGoto = (function(){  //timerButton全局对象  匿名函数
    var html = ''+'<div class="notepad-dlg-goto">'+
    '<div class="dialogbox">'+
        '<div class="titlebar">'+
            '<p class="title">转到指定行</p>'+
            '<span class="close-btn">×</span>'+
        '</div>'+
        '<div class="main">'+
            '<label for="">行号(L):</label>'+
            '<br>'+
            '<input class="txt-line-num" type="text" autofocus>'+
            '<br>'+
            '<input class="btn-goto" type="button" value="转到">'+
            '<input class="btn-cancel" type="button" value="取消">'+
        '</div>'+
    '</div>'+
    '</div>';
    
    
    
    $dlg = $(html);
    cfg = {//默认配置信息
        container:'body',//不传容器，默认是body
        num:6,//倒计时次数
        title:'同意',//默认文字
        onClick: null
    }

    function show(conf){
        //1、DOM draw
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        num = cfg.num;

        //2、event bind 事件绑定
        $dlg.click(cfg.onClick);
    }

    return{
        show:show
    }
}());

