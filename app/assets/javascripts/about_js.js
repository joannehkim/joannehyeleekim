$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

  console.log(wScroll);

	if(wScroll > $('.about_para').offset().top - 500) {
		$(".about_para").addClass("animated slideInLeft is_showing");
	}

  if(wScroll > $('.skills').offset().top - 500) {
    $(".skills").addClass("animated bounceInDown is_showing");
  }

  if(wScroll > $('.skills_logo').offset().top - 500) {
    $(".skills_para").addClass("animated zoomInRight is_showing");
  }

  if(wScroll > $('.skills_logo').offset().top - 500) {
    $(".skills_para_after").addClass("animated zoomInRight is_showing");
  }

  if(wScroll > $('.facts').offset().top - 500) {
    $(".facts").addClass("animated bounceInDown is_showing");
  }

  if(wScroll > $('.facts_para').offset().top - 500) {
    $(".facts_para").addClass("animated bounceInLeft is_showing");
  }

	// $('.container').css({
	// 	'transform' : 'translate(0px, '+ wScroll /2 +'%)'
	// });

	// console.log(wScroll);
});