// =============== b-mainGallery script ===============
$(document).ready(function(){

	var $grid = $('.grid').isotope({
	  layoutMode: 'packery',
	  packery: {
	  }
	});

	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});

});
// =============== b-mainGallery script ===============