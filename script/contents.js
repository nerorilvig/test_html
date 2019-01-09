(function($){
 var methods = {
   //以下メソッドの定義
   init : function(){
     return this;
   },
   //プラグインを呼び出した要素はthisで取得できる※$(this)ではない
   //オブジェクト形式なので、functionの最後にカンマを忘れないこと

   makeId : function(){
     var topicCount=$(".topic").length;
     var index=0;
     var Ids=[];
     for(var i=0;i<topicCount;i++){
       for(var j=0;j<$(".topic").eq(i).find("li").length;j++){
         Ids[index]=`${i+1}-${j+1}`;
         index++;
       }
     }
     return Ids;
   },
   opTopic : function(){
     //引数indexを取るとeach文内でインデックス番号を取得できる
     $(".open_topic").each(function(index){
       var $topic=$(".topic").eq(index);
       var $optop=$(this);
      $optop.click(function(){
      //topicが開いてたら次のクリックで閉じる。閉まってたら開く。
      //この時,アイコンの+と-を切り替え
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
      return this;
     });
   },
   loadSlide : function(slideId,slideNo){
     var id = slideId+slideNo;
     var fileName=`./slides/${slideId+slideNo}.html`
     $("#"+id).load(fileName);
   },
   activateSlide : function(slideId,slideNo){
     var fullId = slideId+slideNo;
     var fileName=`./slides/${fullId}.html`;
     $(`#lesson${slideNo}`).click(function(){
       $("#modal-bg").fadeIn();
       $("#"+fullId).find(".slide-mod").fadeIn();
       console.log($("#"+fullId).find(".slide-mod").attr("id"));
       $("#"+fullId).find(".slides").eq(0).addClass("activate");
       $(".index").fadeIn();
     });
     return this;
   },
   hideSlide : function(){
     //modalの背景をクリックするとスライドを閉じる
     $("#modal-bg").click(function(){
       $("#modal-bg").fadeOut();
       $(".index").fadeOut();
       $(".slide-mod").fadeOut();
       $(".activate").removeClass("activate");
     });
     return this;
   },
   indexClick : function(){
     $(document).on('click','.index-btn',function(){
     //jQueryで後から読み込んだ要素にクリックイベントを入れるには$(document),onを使う
       $(".activate").removeClass("activate");
       var clickedIndex=$('.index-btn').index($(this));
       $(".slides").eq(clickedIndex).addClass("activate");
     });
     return this;
   }
 };
 //カプセル化記述。プラグイン名はcontents
 $.fn.contents = function(method) {
   if ( methods[method] ){
     return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1));
   }else if ( typeof method === 'object' || ! method ) {
     return methods.init.apply( this, arguments );
   }else{
     $.error(' Method ' + method + ' does not exist on jQuery.' + plugname );
     return this;
   }
 };
})(jQuery);
//メソッドの呼び方 $(セレクタ).showSlide('メソッド名');
//引数付きの場合 $(セレクタ).showSlide('メソッド名','引数1','引数2',...);
