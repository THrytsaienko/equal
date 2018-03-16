$(document).ready(function () {
	$('#ru').addClass('active');
	$('a').click(function () {
		$('a.active').removeClass('active');
		$(this).addClass('active');
	});
});