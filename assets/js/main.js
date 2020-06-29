


$(function () {
"use strict";


	//===== Preloader

	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// data - background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
	});

	//Scroll top 
	$(".scroll-top").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 1000);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 180) { $(".scroll-top").fadeIn(); }
		else {
			$(".scroll-top").fadeOut();
		}
	});

	//===== close navbar-collapse when a  clicked

	$(".navbar-nav a").on('click', function () {
		$(".navbar-collapse").removeClass("show");
	});


	// testimonial-active slider 
	$('.testimonial-active').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	});


	// WOW active
	new WOW().init();

});	

