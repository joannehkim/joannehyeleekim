$("#joanne").animate({left: "20%"});
$("#hyelee").animate({left: "20%"});
$("#kim").animate({left: "48%"});

var initialLoad = true;

	$(document).ready(function() {
	function show_slideup() {
		$("#loading").slideUp(4000);
	};
	window.setTimeout(show_slideup, 3000);
	initialLoad = false;
	});


// $(document).ready(function() {
// 	$("#about").click(function() {
// 		// event.preventDefault();
// 		newLocation = this.href;
// 		$("body").fadeOut(3000);
// 	});

// 	function newpage() {
// 		window.location = newLocation;
// 	}
// });