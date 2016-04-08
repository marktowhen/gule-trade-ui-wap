"use strict";


function slide(){
	var haha = document.getElementById('slide');
		window.mySwipe = Swipe(
			haha, 
			{	
				startSlide: 0,		
				auto: 3000,         
				continuous: true,   
				disableScroll: true,  
				stopPropagation: true,   
				callback: function(index, element) {
					$(".dot ul li").eq(index).addClass("cur").siblings().removeClass("cur");
				}
			}
		);


		$(".dot ul li").click(
			function(){
				mySwipe.slide($(this).index(),1000);
			}
		);
}