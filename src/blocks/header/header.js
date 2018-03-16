var tl = new TimelineMax({
	paused: true,
	onComplete: function () {
		// $('#menu-icon').html('<use xlink:href="/assets/svg/symbol/svg/sprite.symbol.svg#cross">');
		// $('#menu-icon').removeClass('open').addClass('header__menu-icon-close');
	},
	onReverseComplete: function () {
		$('#burger').css("display", "none");
		// $('#menu-icon').html('<use xlink:href="/assets/svg/symbol/svg/sprite.symbol.svg#menu">');
		// $('#menu-icon').addClass('open').removeClass('header__menu-icon-close');
	}
});

tl.set('#burger', {
	'display': 'block'
});
tl.fromTo('#burger', 1, {
	autoAlpha: 0,
	x: -1000
}, {
	autoAlpha: 1,
	x: 0,
	ease: Power2.easeOut
});


$('#menu-icon').click(function () {
	if ($('#menu-icon').hasClass('open')) {
		$('#menu-icon').removeClass('open').addClass('header__menu-icon-close');
		$('.header__menu-icon__middle').removeClass('open').addClass('header__menu-icon__middle-close');
		tl.play();
	} else {
		$('#menu-icon').addClass('open').removeClass('header__menu-icon-close');
		$('.header__menu-icon__middle-close').addClass('open').removeClass('header__menu-icon__middle-close');
		tl.reverse();
	}
});

// var tlIcon = new TimelineMax({});

// tlIcon.fromTo('.header__menu-icon__middle', 1, {
// 	x: 0
// }, {
// 	x: -1000,
// 	ease: Power2.easeOut
// });


// var tl = new TimelineMax({
// 		paused: true,
// 		onComplete: function () {
// 			$('#menu-icon').html('<use xlink:href="/assets/svg/symbol/svg/sprite.symbol.svg#cross">');
// 			$('#menu-icon').removeClass('open');
// 		},
// 		onReverseComplete: function () {
// 			$('#burger').css("display", "none");
// 			$('#menu-icon').html('<use xlink:href="/assets/svg/symbol/svg/sprite.symbol.svg#menu">');
// 			$('#menu-icon').addClass('open');
// 		}
// 	});

// tl.set('#burger', { 'display': 'block' });
// tl.fromTo('#burger', 1, {
// 	autoAlpha: 0,
// 	x: -1000
// }, {
// 	autoAlpha: 1,
// 	x: 0,
// 	ease: Power2.easeOut
// });


// $('#menu-icon').click(function () {
// 	if ($('#menu-icon').hasClass('open')) {
// 		tl.play();
// 	} else {
// 		tl.reverse();
// 	}
// });