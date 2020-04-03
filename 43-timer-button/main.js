requirejs.config({//juqery配置信息
    'paths':{
        'jquery':'//apps.bdimg.com/libs/juqery/2.1.4/juqery.min'
    }
});
require(['jquery'],function($){//依赖jquery模块
  $(function(){
        var $btnAdd = $('#add');
        $btnAdd.click(function(){
            require(['timer-button'],function(TimerButton){//延迟加载timer-button.js
               var tb = new TimerButton();
                tb.show({
                    num:6,
                    title:'同意',
                    onClick:function(){//定时器响应后的回掉函数
                        alert('点击了定时器按钮');
                    }
                }); 
            });
        });
    });  
});

