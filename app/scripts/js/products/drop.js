"use strict";
function drop() {

	$(document).on('click','.gd-select',function(){
		var ul = $(".gd-dropdown ul"); 
		if(ul.css("display")=="none"){ 
		ul.slideDown("fast"); 
		}else{ 
		ul.slideUp("fast"); 
		} 
	});	

	$(document).on('click','.gd-dropdown ul li a',function(){
		var txt = $(this).text(); 
		$(".gd-select").val(txt); 
		$(".gd-dropdown ul").hide();
	});	
}