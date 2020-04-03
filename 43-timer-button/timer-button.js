define(['jquery'], function($) {
    function TimerButton(){ //TimerButton 构造函数会执行多次
        var $btn =  $('<input class="timer-button" type="button" disabled/>'),
                cfg = {//默认配置信息
                container:'body',//不传容器，默认是body
                num:6,//倒计时次数
                title:'同意',//默认文字
                onClick: null
            },
                num,
                timer;
    
        this.show = function (conf){//使其公开
            $(cfg.container).append($btn);
            $.extend(cfg,conf);//传入参数更改
            num = cfg.num;
    
            $btn.val(cfg.title+'('+cfg.num+'s)');//按钮文字更改
    
            timer = setInterval(function(){
                num--;
                if(num === 0){
                    clearInterval(timer);
                    $btn.val(cfg.title);
                    $btn.removeAttr('disabled');
                }else{
                    $btn.val(cfg.title+'('+num+'s)');
                }
            },1000);
            $btn.click(cfg.onClick);
        }
    }
    return TimerButton;
});
