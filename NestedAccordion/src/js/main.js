(function(window){

//using jQuery

$('.trigger').click(function(){ // I am calling the classOfAnElement , and telling it that when it is clicked to invoke this function().
  console.log("Click me one more time"); // tracer bullet to make sure it works
  $(this).parent().children('div').toggleClass('content-close');
// I am saying that this parent Elements childeren Elements need to toggle (like a switch) the class (which changes my css info).
});

$('.trigger').click(function(){
  console.log("Hope this works");
  $(this).toggleClass('icon');
})


// Work on 'this'...what is it 'this' really saying?
// I would still like to maybe go over it in Vanilla JS or break it down a little more.




})(window);
