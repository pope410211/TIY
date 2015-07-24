(function(window){

//using jQuery

$('.trigger').click(function(){ // I am calling the classOfAnElement , and telling it that when it is clicked to invoke this function().
  console.log("Click me one more time");
  this.parent().child('div').toggleClass('content-close');
})








})(window);
