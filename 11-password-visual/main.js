$(function(){
    var $pwd = $('#pwd'),
        $pwdtext = $('.pwdtext'),
        $eye = $('#eye');
    
    $pwd.on('input',function(){
      $pwdtext.val($pwd.val());
    });
    $eye.mouseover(function(){
      $pwdtext.css('z-index', '10');
    });
    $eye.mouseout(function(){
      $pwdtext.css('z-index', '-10');
  
    })
});
  