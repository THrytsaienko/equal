$(function () {
	    var $block;
	    $block = $('.team-slider');
	    if (!$block.length) return;
	    var $slides = $block.find('.team-slider__slides');
	    $slides.css("display", "block");
	    var $prevButton = $('.team-slider__button-prev');
	    var $nextButton = $('.team-slider__button-next');

	    $prevButton.click(function () {
			$(this).closest($block).find($slides).slick('slickPrev');
	    });

	    $nextButton.click(function () {
			$(this).closest($block).find($slides).slick('slickNext');
	    });

	    $slides.slick({
		        infinite: true,
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        autoplay: true,
		        autoplaySpeed: 3000
	    });
});