$(function () {
   var $container=$('.portfolio_list'),
      $loadMoreBtn=$('#loadmore'),
      $addItemCount=3,//클릭할때마다 3개씩 나오는 갯수
      $added=0,//더보기버튼 클릭 다나오면 사라지는 용도
      $allData=[];
      
      //$.getJSON('파일경로', function(i, data){});
      /* $.getJSON('./data/content.json', function(data){
         initGallery();
      }); */
	  
/* 	   $container.masonry({
			itemSelector: '.gallery-item',
			columnWidth:270,
			gutter:10
			}); */
			
      $.getJSON('./data/content.json', initGallery);
	  
      
      
      function initGallery(data){
         $allData=data;
         
         //console.log($allData);
         addItem();
         $loadMoreBtn.click(addItem);
      }
      
      function addItem(){
         var elements=[];
         var sliceData;
         
         sliceData=$allData.slice($added, $added + $addItemCount);
         
         $.each(sliceData, function(idx, item){
            var itemHTML=
			'<li style="background: url('+item.imgUrl+')" class=" item ' + item.type +'">'+
		       '<h2 class="title_bar center">'+item.title+'</h2>'+
				'<p>'+
				item.desc+
				'</p>'+
				'<a href="'+item.projectLink+'" class="big btn orange">project</a>'+
			'</li>';
            
            elements.push($(itemHTML).get(0));
            
         });
         
         $container.append(elements);
         $added +=sliceData.length;
		 
/* 		 if($added<$allData.length){
			 $loadMoreBtn.show();
		 }else{
			 $loadMoreBtn.hide();
		 } */
		 
/* 		 $container.imagesLoaded( function() {
			  $container.masonry( 'appended', elements );
			}); */

      }
});






