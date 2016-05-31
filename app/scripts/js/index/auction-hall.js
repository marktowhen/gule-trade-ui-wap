function auction_hall(){
	$(document).on('click','.ah-box3 i.icon-arrow-12',function(){
		if($(this).hasClass("cur")){
			$(this).removeClass("cur");
			$(".ah-box3").removeClass("cur");
		}else{
			$(this).addClass("cur");
			$(".ah-box3").addClass("cur");
		}
	});
}