$(document).ready(function () {
	$('.gallery-slider__slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: $('#arrow-right'),
		prevArrow: $('#arrow-left')
	});
});