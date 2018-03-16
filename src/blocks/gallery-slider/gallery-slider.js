$(function () {
	var gallerySliderInit = function (event, page) {
		if (page == undefined) page = document;
		$page = $(page);
		$block = $('.gallery-slider');
		if (!$block.length) return;

		$slides = $block.find('.gallery-slider__slides');
		$slides.css("display", "block");

		$prevButton = $('.gallery-slider__button-prev');
		$nextButton = $('.gallery-slider__button-next');

		$prevButton.click(function () {
			$(this).closest($block).find($slides).slick('slickPrev');
		})

		$nextButton.click(function () {
			$(this).closest($block).find($slides).slick('slickNext');
		})

		$slides.slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 2,
			autoplay: true,
			autoplaySpeed: 3000,
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
	};

	gallerySliderInit();
	$(document).on("pageInit", gallerySliderInit);
});