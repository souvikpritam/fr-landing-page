$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 50) {
    	$('header').addClass('shrink');
    }

    else {
    	$('header').removeClass('shrink');
    }
  });
});