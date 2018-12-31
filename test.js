$(function(){
  $('.signup-click').click(function(){
    $('.signup-modal').fadeIn();
    $('#modal-bg').fadeIn();
  });
  $('.login-click').click(function(){
    $('.login-modal').fadeIn();
    $('#modal-bg').fadeIn()
  });
  $('#modal-bg').click(function(){
    $(this).fadeOut();
    $('.modal').fadeOut();
  });
  $('.header-left a').click(function(){
    $('html,body').animate({scrollTop:0},500);
  });
});
