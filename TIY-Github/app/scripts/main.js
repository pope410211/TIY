(function(){

//
// var profile = $('#profile-change').find(':selected').text();
// console.log('yay', profile);
// var chosen = $.on('#profile-change', 'select', function(){
//   $(this).addClass('selected').siblings().removeClass('selected')
// })


// var profile = [];
// var profile = $('#profile-change option').each(function(){
//   options[$(this).text()] = $(this).val();
// });

// loop + if/else statement!
// if(profile === 'octocat'){
//   return 'octocat';
//   console.log(profile);
// } else {
//   return 'pope410211';
//   console.log(profile);
// };
//

// var option = $('#profile-change option:contains("octocat")').prop('selected', true).text();


// The following code came from code.runnable.com/Ue9c4krQF7VjAAAP/how-to-get-selected-option-using-jquery
  /* we are assigning change event handler for select box */
	/* it will run when selectbox options are changed */
	$('#profile-change').change(function()
	{
		/* setting currently changed option value to option variable */
		var option = $(this).find('option:selected').text();

    console.log(option);


// console.log('yay', options, profile);

$.getJSON('api/users/' + option + '/main/profile.json')
.then(function(user){
console.log('success', user);

$avatar = $('#avatar');
$avatar.attr('src', user.avatar_url);

$name = $('#user-name');
$name.text(user.name);

$login = $('#user-login');
$login.text(user.login);

$company = $('#company');
$company.text(user.company);

$location = $('#location');
$location.text(user.location);

$mail = $('#mail');
$mail.text(user.email);
$mail.attr('href', 'mailto:' + user.email);

$blog = $('#blog');
$blog.text(user.blog);
$blog.attr('href', user.blog);

$starred = $('#starred');
$starred.text(user.starred_url.length);

$followers = $('#followers');
$followers.text(user.followers);

$following = $('#following');
$following.text(user.following);

}); //end getJSON

});// end profile switch function





})(window);
