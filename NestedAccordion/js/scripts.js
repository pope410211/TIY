// Just a tracer...
// alert("It's alive!");
// debugger;

// document.head.parentNode.className = "js"; // It's alive!
//
// window.alert ("CSS is easier than JAVASCRIPT, get us some Waffles!")
//
// _.forEach(document.querySelectorAll('.cbp-nttrigger'), function(element){
//   element.addEventListener('click', function(){
//     element.parentElement.classList.toggle('cbp-ntopen')
//   })
// })

// jQuery allows the above to be turned into the following;
// $ = jQuery

  $('.cbp-nttrigger').on('click', function(event){
      $(event.target).parent().toggleClass('cbp-ntopen');
  });

// NOTES:
  // TO OPEN THE ACCORDION
  //  WHAT EVENT SHOULD I LISTEN FOR?
  //  WHAT ELEMENT SHOULD LISTEN FOR THE EVENT?
  //  WHAT SHOULD I DO WHEN THAT EVENR FIRES?
    //  1.TOGGLE `.cbp-ntopen` from parent `<li>` ELEMENT\
    //
