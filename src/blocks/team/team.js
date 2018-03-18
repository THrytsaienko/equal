$(function() {
  var $block;
  $block = $('.team-slider');
  if (!$block.length) return;
  $container = $block.find('.team-slider__slides');

  $slides.slick({
    arrows: false,
  });

  $prevButton = $('.team-slider__button-prev');
  $nextButton = $('.team-slider__button-next');

  $prevButton.click(function(){
    $(this).closest($block).find($slides).slick('slickPrev');
  })

   $nextButton.click(function(){
     $(this).closest($block).find($slides).slick('slickNext');
   })  
})

