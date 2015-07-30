(function(window){

$('li').click(function(){
  $(this).siblings().removeClass('tabs-current');
  $(this).addClass('tabs-current');
  // this (the function) goes to the other `li` elements and removes their class.
  //then it add a class to the `li` that was clicked on.
  // after the new class was added in the tabs it does the following;
  $('section').removeClass('display-yes');
  // first it removes the class from ALL section elements
  console.log('work');
  $($('a', this).attr('href')).addClass('display-yes');
  //once all classes are removed, it located an element using the elemnts in the li.
  // it looks for the <a> then tells this function to follow the attribute of the 'href'.
  //one it follows the 'href' it is to add a class of display-yes to th element
});



})(window);
