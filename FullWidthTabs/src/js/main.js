(function(window){

$('li').click(function(){
  $(this).siblings().removeClass('tabs-current');
  $(this).addClass('tabs-current');
  $('section').removeClass('display-yes');
  console.log('work');
});



})(window);
