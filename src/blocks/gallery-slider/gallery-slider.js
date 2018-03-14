$(document).ready(function () {
	$('.gallery-slider__slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: $('#arrow-right'),
		prevArrow: $('#arrow-left'),
		responsive: [{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true
				}
			}
		]
	});
});