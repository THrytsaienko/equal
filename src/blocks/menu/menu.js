$("a").hover(function(){
	$('a.active').removeClass('active');
	$(this).addClass('active');
})