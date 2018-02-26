$('#menu-icon').click(function () {
    if ($('#menu-icon').hasClass('open')) {
        TweenMax.to('#burger', 1, {
            autoAlpha: 1,
            x: 0,
            ease: Power2.easeOut,
            onComplete: function () {
                $('#burger').css("display", "block");
                $('#menu-icon').html('<use xlink:href="/assets/svg/symbol/svg/sprite.symbol.svg#cross">');
                $('#menu-icon').removeClass('open');
            }
        });
    } else {
        TweenMax.from('#burger', 1, {
            autoAlpha: 1,
            x: 0,
            ease: Power2.easeOut,
            onComplete: function () {
                $('#burger').css("display", "none");
                $('#menu-icon').html('<use xlink:href="/assets/svg/symbol/svg/sprite.symbol.svg#menu">');
                $('#menu-icon').addClass('open');
            }
        });
    }
})


// $('#menu-icon').click(function () {
//     $('#burger').css("display", "block");
//     if ($('#menu-icon').hasClass('open')) {
//         $('#menu-icon').html('<use xlink:href="/assets/svg/symbol/svg/sprite.symbol.svg#cross">');
//         $('#menu-icon').removeClass('open');
//         TweenMax.to('#burger', 1, {
//             autoAlpha: 1,
//             x: 0,
//             ease: Power2.easeOut
//         });
//     } else {
//         TweenMax.from('#burger', 5, {
//             autoAlpha: 1,
//             x: 0
//         });
//         $('#menu-icon').html('<use xlink:href="/assets/svg/symbol/svg/sprite.symbol.svg#menu">');
//         $('#menu-icon').addClass('open');
//         $('#burger').css("display", "none");
//     }
// })