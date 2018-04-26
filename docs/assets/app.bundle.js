/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// =============== b-clients script ===============
$(document).ready(function () {
  var containerW = $(window).innerWidth();
  $(".clients__logo").css("width", containerW / 5); // console.log("clients msg")
}); // =============== b-clients script ===============

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  var $block;
  $block = $('.gallery-slider');
  if (!$block.length) return;
  var $slides = $block.find('.gallery-slider__slides');
  $slides.css("display", "block");
  $prevButton = $('.gallery-slider__button-prev');
  $nextButton = $('.gallery-slider__button-next');
  $prevButton.click(function () {
    $(this).closest($block).find($slides).slick('slickPrev');
  });
  $nextButton.click(function () {
    $(this).closest($block).find($slides).slick('slickNext');
  });
  $slides.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }]
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// =============== b-mainGallery script ===============
$(document).ready(function () {
  setGrideSize();
  var $grid = $('.grid').isotope({
    layoutMode: 'packery',
    packery: {}
  });
  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');
  });
});
$(window).resize(function () {
  setGrideSize();
});

function setGrideSize() {
  var screenW = $(window).width(),
      allPics = $(".main-gallery__picture");

  if (screenW > 480) {
    sizeImg("xs", 3, 3);
    sizeImg("sm", 6, 3);
    sizeImg("md", 4, 5);
    sizeImg("lg", 6, 6);
    sizeImg("xl", 12, 12);
  } else {
    allPics.css("width", screenW);
  }
}

function sizeImg(size, numW, numH) {
  var container = $(".grid"),
      containerW = parseInt(container.css("width")),
      gridSize = containerW / 12;
  $(".main-gallery__picture_" + size).css("width", gridSize * numW).css("height", gridSize * numH);
} // =============== b-mainGallery script ===============

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// =============== b-catalogue script ===============
$(document).ready(function () {
  // console.log("catalogue msg");
  setGrideSize(); // init isotope

  var $grid = $('.grid').isotope({
    // options...
    layoutMode: 'packery',
    // percentPosition: true,
    packery: {}
  }); // layout Isotope after each image loads

  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');
  }); // use filters in isotope

  function filter(id) {
    var stuffToFilter = {
      filter: '.' + id
    };

    if (id == "all") {
      $grid.isotope({
        filter: '*'
      });
    } else {
      $grid.isotope(stuffToFilter);
    }
  }

  ;
  $(".menu__link").click(function () {
    filter(this.id);
  });
});
$(window).resize(function () {
  setGrideSize();
});

function setGrideSize() {
  var screenW = $(window).width(),
      allPics = $(".catalogue__picture");

  if (screenW > 480 && screenW <= 768) {
    sizeImg("sm", 1.5, 1);
    sizeImg("md", 1.5, 2);
  } else if (screenW > 768) {
    sizeImg("sm", 1, 1);
    sizeImg("md", 1, 2);
  } else {
    allPics.css("width", screenW);
  }
}

function sizeImg(size, numW, numH) {
  var container = $(".grid"),
      containerW = parseInt(container.css("width")),
      gridSize = containerW / 3;
  $(".catalogue__picture_" + size).css("width", gridSize * numW).css("height", gridSize * numH);
} // =============== b-catalogue script ===============

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
  $('#ru').addClass('active');
  $('a').click(function () {
    $('a.active').removeClass('active');
    $(this).addClass('active');
  });
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  var headerInit = function headerInit(event, page) {
    if (page == undefined) page = document;
    var $page = $(page);
    var $block = $page.find('.header');
    if (!$block.length) return;
    var $menuIcon = $block.find('.header__menu-burger');
    var $burger = $block.find('.header__burger');
    var tl = new TimelineMax({
      paused: true,
      onReverseComplete: function onReverseComplete() {
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
    var $iconTop = $('.header__menu-icon-top');
    var $iconMiddle = $('.header__menu-icon-middle');
    var $iconBottom = $('.header__menu-icon-bottom');
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
    tlIconMenuMiddle.to($iconMiddle, .2, {
      autoAlpha: 0
    }).to($iconMiddle, .5, {
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  var $block;
  $block = $('.carousel');
  if (!$block.length) return;
  var $slides = $block.find('.carousel__slides');
  $slides.slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });
  var $prevButton = $('.carousel__button-prev');
  var $nextButton = $('.carousel__button-next');
  $prevButton.click(function () {
    $(this).closest($block).find($slides).slick('slickPrev');
  });
  $nextButton.click(function () {
    $(this).closest($block).find($slides).slick('slickNext');
  });
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  var $block;
  $block = $('.team-slider');
  if (!$block.length) return;
  var $slides = $block.find('.team-slider__slides');
  $slides.css("display", "block");
  var $prevButton = $('.team-slider__button-prev');
  var $nextButton = $('.team-slider__button-next');
  $prevButton.click(function () {
    $(this).closest($block).find($slides).slick('slickPrev');
  });
  $nextButton.click(function () {
    $(this).closest($block).find($slides).slick('slickNext');
  });
  $slides.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });
});

/***/ })
/******/ ]);