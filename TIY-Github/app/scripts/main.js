(function(){



$.getJSON('api/users/' +  + '/main/profile.json')
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




})(window);
