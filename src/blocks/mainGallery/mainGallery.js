// =============== b-mainGallery script ===============
$(document).ready(function(){
	setGrideSize();
	var $grid = $('.grid').isotope({
	  layoutMode: 'packery',
	  packery: {
	  }
	});

	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});

});
$(window).resize(function(){
	setGrideSize();
});
function setGrideSize(){
	let screenW = $(window).width(),
		allPics = $(".main-gallery__picture");
	if(screenW>480){
		sizeImg("xs", 3, 3);
		sizeImg("sm", 6, 3);
		sizeImg("md", 4, 5);
		sizeImg("lg", 6, 6);
		sizeImg("xl", 12, 12);
	} else {
		allPics.css("width", screenW);
	}
}

function sizeImg(size, numW, numH){
	let	container = $(".grid"),
		containerW = parseInt(container.css("width")),
		gridSize = containerW/12;
	$(".main-gallery__picture_" + size)
		.css("width", gridSize * numW)
		.css("height", gridSize * numH)
}
// =============== b-mainGallery script ===============