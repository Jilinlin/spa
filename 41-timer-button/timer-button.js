/*
//一、工厂函数
var $timerButton = (function(){  //timerButton全局对象  匿名函数
    // 添加定时器按钮点几遍 show方法就执行几遍 除了show其他代码执行一遍
    // $btn只定义了一遍 所以再次点击定时器按钮时才会出错

    //css样式一： class="timer-button"
    // var $btn =  $('<input class="timer-button" type="button" value="同意（9s）" disabled/>'),
    // var $btn =  $('<input class="timer-button" type="button" disabled/>'),
        // num = 9,
    // var cfg = {//默认配置信息
    //         container:'body',//不传容器，默认是body
    //         num:6,//倒计时次数
    //         title:'同意',//默认文字
    //         onClick: null
    //     },
    //     num,
    //     timer;

    // //css样式二：
    // var $btn =  $('<input type="button" value="同意（9s）" disabled/>'),
    //     num = 9,
    //     timer;
    // //注释：<link rel="stylesheet" href="./timer-button.css">
    // // 并添加
    //     $btn.css({
    //         height: '50px',
    //         width: '100px'
    //     });

    // function show(container){//show方法 会在函数的作用域里存在
    //     //1、DOM draw DOM绘制
    //     $(container).append($btn);
    //     //2、event bind 事件绑定
    //     timer = setInterval(function(){
    //         num--;
    //         if(num===0){
    //             clearInterval(timer);
    //             $btn.val('同意');
    //             $btn.removeAttr('disabled');
    //         }else{
    //             $btn.val('同意('+num+'s)');
    //         }
    //     },1000);
    // }

    function show(conf){//show方法 会在函数的作用域里存在
        var $btn =  $('<input class="timer-button" type="button" disabled/>'),
            cfg = {//默认配置信息
            container:'body',//不传容器，默认是body
            num:6,//倒计时次数
            title:'同意',//默认文字
            onClick: null
        },
            num,
            timer;

        //1、DOM draw DOM绘制
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

        //2、event bind 事件绑定
        $btn.click(cfg.onClick);
    }


    // $btn.click(function(){
    //     // alert('就知道你会同意哒！');
    //     cfg.onClick();
    // });

    return{
        show:show//返回简单对象自变量 返回的对象方法是共有的  可以访问上面私有方法
    }
}());
*/

// 二、构造函数
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

    // function show(conf){
    this.show = function (conf){//使其公开
        //1、DOM draw DOM绘制
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

        //2、event bind 事件绑定
        $btn.click(cfg.onClick);
    }
}

// 三、简单函数自变量
// var timerBtn = { 
//     show:function(){ //简单对象自变量中的键值都是共有的

//     }
// }




// 两种添加方式
// （1）
// var $timerButton = (function(){  //timerButton全局对象
//     var html =  '<input type="button" value="同意（9s）" disabled/>',
//     function show(container){//show方法 会在函数的作用域里存在
//         //1、DOM draw DOM绘制
//         $(container).html(html);
//         //2、event bind 事件绑定
//     }
//     return{
//         show:show
//     }
// }());

// （2）
// var $timerButton = (function(){  //timerButton全局对象
//     var $btn =  $('<input  class="timer-button" type="button" value="同意（9s）" disabled/>'),  // class="timer-button"添加样式 样式放到外部文件
//     function show(container){//show方法 会在函数的作用域里存在
//         //1、DOM draw DOM绘制
//         $(container).append($btn);
//         //2、event bind 事件绑定
//     }
//     return{
//         show:show
//     }
// }());






//不用 page load event （即$(function(){});）

//要封装成一个对象 有几种方案
//1、全局对象（简单对象字面量） 弊端：不完全是面向对象 没办法（包括）封装私有方法
// var timerBtn = {
//     show:function() //show是共有方法
// }

// 2、工厂函数 一个函数，返回值是一个简单对象 闭包 作用域是私有的 可以使用
// var timerBtn = (function(){
//     return{
//         show:function(){

//         }
//     }
// }()) //()立即执行

// 3、构造函数 
// function TimerBtn(){

// }
// var tb = new TimerBtn();