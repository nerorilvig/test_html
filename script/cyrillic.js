$(function(){
  const idHead = "cyr";
  $('div').contents();//初期化メソッド
  $('div').contents('hideSlide');//hideSlideメソッドを準備しておく
  var Ids=$('div').contents('makeId');
  for(var i=0;i<=Ids.length;i++){
    $('#'+idHead+Ids[i]).contents('loadSlide',idHead,Ids[i]);//プラグインに入れる引数名=メソッド名
    $('#lesson'+Ids[i]).contents('activateSlide',idHead,Ids[i]);
  }
  $('div').contents("indexClick");
});
