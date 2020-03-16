$("document").ready(function(){

	$("button").click(function(event){
		var selected = $(this).attr("target");

		$(".display").animate({
			opacity: 0,
		}, 300, function() { 
			$(this).css("display", "none");
			$(this).toggleClass("display");

			$(selected).css("display", "block");
			$(selected).animate({
				opacity: 1,
			}, 300, function(){
				$(this).toggleClass("display")
			});
		});

		$(".selected").toggleClass("selected");
		$(this).toggleClass("selected");
	});
});
