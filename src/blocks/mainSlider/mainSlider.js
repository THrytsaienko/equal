$('.carousel').slick({
  arrows: false
})

$('.carousel-container__button-prev').click(function(){
  $('.carousel').slick('slickPrev');
})

 $('.carousel-container__button-next').click(function(){
   $('.carousel').slick('slickNext');
 })
