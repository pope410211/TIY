

$(function() {
  $('li').click(function(event) {
    $(this).siblings().removeClass('tab-current');
    $(this).addClass('tab-current');

    var panelId = $(this).children('a').attr('href');
    var $panel = $(panelId);

    $panel.addClass('content-current')
    .siblings().removeClass('content-current')
  })
})
