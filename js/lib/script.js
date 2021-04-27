$(document).ready(function() {
    
    /* 풀페이지*/
	$('#fullpage').fullpage({
        //anchors:['firstPage', 'secondPage', 'thirdPage']
	});
    
   /* 메인스와이퍼 슬라이드*/
    
   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});





