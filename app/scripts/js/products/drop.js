function drop() {
	$(".gd-select").click(function(){ 
	var ul = $(".gd-dropdown ul"); 
	if(ul.css("display")=="none"){ 
	ul.slideDown("fast"); 
	}else{ 
	ul.slideUp("fast"); 
	} 
	}); 
	$(".gd-dropdown ul li a").click(function(){ 
	var txt = $(this).text(); 
	$(".gd-select").val(txt); 
	$(".gd-dropdown ul").hide(); 
	}); 
}