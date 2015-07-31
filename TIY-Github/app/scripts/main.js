(function(){

var self = this;

$.getJSON('api/users/octocat/main/octocatmain.json')
.success(function(data){
self.user = data;
console.log('success', data);
}).
error(function(data){
  console.log('error');

});




})(window);
