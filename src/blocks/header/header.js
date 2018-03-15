$(function () {
	var headerInit = function (event, page) {
		if (page == undefined) page = document;
		$page = $(page);
		$block = $page.find('.header');
		if (!$block.length) return;

		$menuIcon = $block.find('.header__menu-icon');
		$burger = $block.find('.header__burger');

		var tl = new TimelineMax({
			paused: true,
			onComplete: function () {
				$menuIcon.removeClass('open').html('<use xlink:href="/assets/svg/symbol/svg/sprite.symbol.svg#cross">');
			},
			onReverseComplete: function () {
				$burger.css("display", "none");
				$menuIcon.addClass('open').html('<use xlink:href="/assets/svg/symbol/svg/sprite.symbol.svg#menu">');
			}
		});


		tl.set($burger, {
			'display': 'block'
		});
		tl.fromTo($burger, 1, {
			autoAlpha: 0,
			x: -1000
		}, {
			autoAlpha: 1,
			x: 0,
			ease: Power2.easeOut
		});

		$menuIcon.click(function () {
			if ($(this).hasClass('open')) {
				tl.play();
			} else {
				tl.reverse();
			}
		});
	};

	headerInit();
	$(document).on("pageInit", headerInit);
});