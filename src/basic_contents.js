$(function(){
  const openTopic=function(num){
    var num_s=num.toString(10);
    var $optop=$(`#open_topic${num_s}`);
    var $topic=$(`#topic${num_s}`);
    $optop.click(function(){
      if($topic.hasClass("opened")){
       $topic.slideUp();
       $optop.find("i").addClass("fa-plus-square");
       $optop.find("i").removeClass("fa-minus-square");
       $topic.removeClass("opened");
     }else{
       $topic.slideDown();
       $optop.find("i").removeClass("fa-plus-square");
       $optop.find("i").addClass("fa-minus-square");
       $topic.addClass("opened");
     }
    }); 
  }
  for (var i=0;i<$(".topic").length;i++){
    openTopic(i+1);
  }
  $("#upper").load("./src/header.html");
  $("#lower").load("./src/footer.html");
});
