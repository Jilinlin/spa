$(function(){
  var $progress = $('progress'),
      timer = 0,
      i = 0;

  //console.log($progress.val());
  $('#start').click(function(){
   if(timer !== 0) return;
   timer = window.setInterval(function(){
     $progress.attr('value',i++);
     if($progress.val() === 100)
       window.clearInterval(timer);
   },100);
  });
  $('#stop').click(function(){
    window.clearInterval(timer);
    timer = 0;
  });
  $('#reset').click(function() {
    $progress.attr('value', i = 0);
  });

});
