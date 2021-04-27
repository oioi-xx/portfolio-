$(function(){
   var winH=$(window).innerHeight(); //창높이
   var winW=$(window).innerWidth(); //창넓이
   var vidH=$('#mainVideo').innerHeight(); //비디오 높이
   var vidW=$('#mainVideo').innerWidth(); //비디오 넓이
   var videoPlay='on'; // 기본 켜진(on)상태
   var soundMuted='off'; //기본 꺼진(off)상태
   var setId;
   
   $('#mainVideo').get(0).autoplay=true; //호환성 때문에
   $('#mainVideo').get(0).loop=1; //비디오 재생 한번만(0) 연속(1)
   $('#mainVideo').get(0).playbackRate=1; // 배속 기본 1배속
   $('#mainVideo').get(0).muted=true; //소리끄기 켜기 false
   
   
   setInterval(videoResizeFn,100);
   
   $(window).resize(function(){
      videoResizeFn();
   });
   
   function videoResizeFn(){
      winH=$(window).innerHeight();
      winW=$(window).innerWidth();
      vidH=$('#mainVideo').innerHeight();
      vidW=$('#mainVideo').innerWidth();
      
      $('.section1').css({width:100+"%", height:winH});
      if(winH>vidH){
         $('#mainVideo').css({width: 'auto', height:winH})
      }
      if(winW>vidW){
         $('#mainVideo').css({width:winW, height:'auto'})
      }
      $('#mainVideo').css({marginTop: (winH-vidH)/2, marginLeft:(winW-vidW)/2});
   }
   
   $('.watchagainBt, .sharevideoBt').on({
      click:function(){
         videoPlay='on';
         $('#mainVideo').get(0).play();
         $('.playPuaseIconBt').find('img').attr('src','img/icon-player-pause.png');
         $('.section1-watch-again').hide();
      }
   });
   
   $('.playPuaseIconBt').on({
      click:function(){
         if(videoPlay=='on'){
            videoPlay='off';
            $('#mainVideo').get(0).pause();
            $(this).find('img').attr('src','img/icon-player-play.png');
         }else{
            videoPlay='on';
            $('#mainVideo').get(0).play();
            $(this).find('img').attr('src','img/icon-player-pause.png');
            $('.section1-watch-again').hide();
         }
      }
   });
   $('.mutedIconBt').on({
      click:function(){
         if(soundMuted=='off'){
            soundMuted='on';
            $('#mainVideo').get(0).muted=false;
            $(this).find('i').attr('class','fas fa-volume-down');
         }else{
            soundMuted='off';
            $('#mainVideo').get(0).muted=true;
            $(this).find('i').attr('class','fas fa-volume-mute');
         }
      }
   });
   
   setId=setInterval(videoTimeCountFn,100);
   function videoTimeCountFn(){
      if($('#mainVideo').get(0).ended==true){
         $('.section1-watch-again').show();
         videoPlay='off';
         $('.playPuaseIconBt').find('img').attr('src','img/icon-player-play');
         clearInterval(setId);
      }
   }
   
});