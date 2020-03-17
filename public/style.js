$("document").ready(function(){

	$("button").click(function(event){
		var selected = $(this).attr("target");

		$(".display").css("display", "none");
		$(".display").toggleClass("display");

		$(selected).toggleClass("display");
		$(selected).css("display", "block");

		$(".selected").toggleClass("selected");
		$(this).toggleClass("selected");
	});
});
