$(function () {    
	var headerInit = function (event, page) {        
		if (page == undefined) page = document;        
		$page = $(page);        
		$block = $page.find('.header');        
		if (!$block.length) return;        
		$menuIcon = $block.find('.header__menu-burger');        
		$burger = $block.find('.header__burger');        
		var tl = new TimelineMax({            
			paused: true,
			onReverseComplete: function () {                
				$burger.css("display", "none");         
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

		$iconTop = $('.header__menu-icon-top');
		$iconMiddle = $('.header__menu-icon-middle');
		$iconBottom = $('.header__menu-icon-bottom');

		var tlIconMenuTop = new TimelineMax({
			paused: true
		});

		var tlIconMenuMiddle = new TimelineMax({
			paused: true
		});

		var tlIconMenuBottom = new TimelineMax({
			paused: true
		});

		tlIconMenuTop.to($iconTop, .5, {
			rotation: '45deg',
			ease: Power2.easeOut
		});   

		tlIconMenuMiddle
			.to($iconMiddle, .2, {
				autoAlpha: 0
			})
			.to($iconMiddle, .5, {
				x: -500
			}, .2); 
			  
		tlIconMenuBottom.to($iconBottom, .5, {
			rotation: '-45deg',
			y: 1,
			ease: Power2.easeOut
		});     
		   
		$menuIcon.click(function () {            
			if ($(this).hasClass('open')) {  
				$menuIcon.removeClass('open');              
				tl.play();            
				tlIconMenuTop.play();            
				tlIconMenuMiddle.play();            
				tlIconMenuBottom.play();            
			} else {
				$menuIcon.addClass('open');           
				tl.reverse();            
				tlIconMenuTop.reverse();            
				tlIconMenuMiddle.reverse();            
				tlIconMenuBottom.reverse();            
			}        
		});    
	};    
	headerInit();    
	$(document).on("pageInit", headerInit);
});   