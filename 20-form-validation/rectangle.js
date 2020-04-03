// 小数点后面保留第 n 位
function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
$(function(){
   //程序思路
   //get dom elem
   var $width  = $('#width'),//css选择器代码
       $height = $('#height'),
       $btnCal = $('#calculate'),
       $perimeter = $('#perimeter'),
       $area = $('#area');
   /*calc button click event */
   $btnCal.click(function(){
    //validate if error return;
    //1、表单校验
    if(!validate('#width')||!validate('#height')) return;

    //get value
    var w = Number($width.val()),
        h = Number($height.val());
    //calculate
    var p = 2*(w+h),
        a=w*h;
     //output
     $perimeter.val(roundFractional(p,6));
     $area.val(roundFractional(a,6));
   });

   //3、字符校验 
   // (1)、event keypress
   // (2)、event argument get key value，e.key and e.target.value
   // (3)ilegal key filter ,e.preventDefault()
   // (4)合法字符还要考虑出现的位置，例如.,e,E,-
   $width.keypress(function(e){
        //if(e.key==='a') e.preventDefault();
        if(/[abcdf-zABCDF-Z`~=_+[\]{}|;:'",<>/?\\]/.test(e.key)){//!@#$%^&*()
            e.preventDefault();
            return;
        }

        //合法字符 e
        //允许出现在非科学计数法的数字末尾
        //允许出现在非科学计数法的数字中间

        //不允许出现在非科学计数法的数字前
        //不允许出现在空文本中
        //不允许出现在负号后面

        //不允许出现在科学计数法（e,E）数字的末尾
        //不允许出现在科学计数法数字的前面
        //不允许出现在科学计数法数字的中间、

        // content 文本框中已有的内容（字符串）
        // pos 文本框中光标位置

        var pos = e.target.selectionStart,
            con = e.target.value;//e之前字符
        console.log(pos);
        console.log(con);
        if(e.key === 'e'){
            // if(rule not ok ){
            //     e.preventDefault();
            //     return;
            // }
            if(pos === 0 || con.indexOf('e')!== -1 || con.indexOf('E') !== -1){//不是科学计数法
                e.preventDefault();
                return;
            }

            if(pos===1 && con.substring(0,1)=== '-'){
                e.preventDefault();
                return;
            }

            //合法字符E

            //合法字符.

            //合法字符-
        }


   });

   $height.keypress(function(e){
        if(/[abcdf-zABCDF-Z`~=_+[\]{}|;:'",<>/?\\]/.test(e.key)){//!@#$%^&*()
            e.preventDefault();
            return;
        }
   });
   

   //2、增加字段校验
   $width.focusout(function(){
        // if(!validate(width)) select this;
        if(!validate('#width')) $width.select();
   });
   $height.focusout(function(){
        // if(!validate(height)) select this;
        if(!validate('#height')) $height.select();

   });


   //1、表单校验（集中）
   function validate(field){
        //get DOM error message
        var $data = $(field),
            $msg = $(field+'-validation-message');

        //validate null
        if($data.val()===''){
            $msg.html('不能为空哦！');
            $data.select();
            return false;
        }

        //validate number
        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
            $msg.html('必须是数值哦！');
            $data.select();
            return false;
        }

        //validate >0
        if(Number($data.val())<0){
            $msg.html('必须大于零哦！');
            $data.select();
            return false;
        }

            //prompt error message
            //return false;
        $msg.html('');
        return true;
   }

    
});

