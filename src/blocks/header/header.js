var tl = new TimelineMax({
        paused: true,
        onComplete: function () {
            $('#burger').css("display", "block");
            $('#menu-icon').html('<use xlink:href="/assets/svg/symbol/svg/sprite.symbol.svg#cross">');
            $('#menu-icon').removeClass('open');
        },
        onReverseComplete: function () {
            $('#burger').css("display", "none");
            $('#menu-icon').html('<use xlink:href="/assets/svg/symbol/svg/sprite.symbol.svg#menu">');
            $('#menu-icon').addClass('open');
        }
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
        tl.play();
    } else {
        tl.reverse();
	}
});