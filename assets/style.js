$("document").ready(function(){

	// setting up tabs
	$("button").click(function(event){
		var selected = $(this).attr("target");

		$(".display").css({
			display: "none",
			opacity: 0,
		});
		$(".display").toggleClass("display");

		$(selected).toggleClass("display");
		$(selected).css("display", "block");

		$(selected).animate({opacity: 1}, "slow");

		$(".selected").toggleClass("selected");
		$(this).toggleClass("selected");
	});

	// setting up hover effect on last page
	$(".last_page").hover(function() {
		var selected = $(this).attr("target");

		$(selected).animate({width: 0}, "fast");
	}, function() {
		var selected = $(this).attr("target");

		$(selected).animate({width: "100%"}, "fast");
	})
});
