(function(window){

//using jQuery

$('.trigger').click(function(){ // I am calling the classOfAnElement , and telling it that when it is clicked to invoke this function().
  console.log("Click me one more time");
  $(this).parent().children('div').toggleClass('content-close');
  if {
    $(this).removeClass('icon')
  } else {
    $(this).addClass('icon')
  }
})








})(window);
