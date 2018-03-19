$(function() {
	var $block;
	$block = $('.carousel');
	if (!$block.length) return;
	$slides = $block.find('.carousel__slides');

	$slides.slick({
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	});

	$prevButton = $('.carousel__button-prev');
	$nextButton = $('.carousel__button-next');

	$prevButton.click(function(){
		$(this).closest($block).find($slides).slick('slickPrev');
	});

	$nextButton.click(function(){
		$(this).closest($block).find($slides).slick('slickNext');
	});
});
