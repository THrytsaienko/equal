$(function () {
	var menuInit = function (event, page) {
		if (page == undefined) page = document;
		$page = $(page);
		$block = $page.find('.menu');
		if (!$block.length) return;

		$ru = $('#ru');

		$ru.addClass('active');
		$('a').click(function () {
			$('a.active').removeClass('active');
			$(this).addClass('active');
		});
	};

	menuInit();
	$(document).on("pageInit", menuInit);
});