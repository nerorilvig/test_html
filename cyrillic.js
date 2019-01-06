$(function(){
  const openSlide=function(TopicNum,lessonNum,fileHead){
    var lessonId=`#slideop${TopicNum.toString(10)}-${lessonNum.toString(10)}`
    var slideId=`#slide${TopicNum.toString(10)}-${lessonNum.toString(10)}`
    var fileName=`./slides/${fileHead}${TopicNum.toString(10)}-${lessonNum.toString(10)}.html`
    //fileHead=cyr,TopicNum=1,lessonNum=1→slideId=slide1-1,fileName=cyr1-1.html
    $(lessonId).load(fileName);
    $(slideId).css("display:inline-block;");
    console.log(slideId);
    console.log(lessonId);
    console.log(fileName);
  } 
  $('.topic').find('a').click(function(){
    $('#modal-bg').fadeIn(); 
  }); 
  $('#modal-bg').click(function(){
    $('#modal-bg').fadeOut();
    $(".slides").fadeOut();
  });
  $('#lesson1-1').click(function(){
    openSlide(1,1,"cyr");
  });
  //$("id").load("src");
});
